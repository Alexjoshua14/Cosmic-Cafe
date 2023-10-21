import { useEffect, useRef, useState } from 'react'

/**
 * TESTS TO CREATE
 * - Ensure timer is set to intervalDuration and index changes after provided time
 * - Ensure that on mouseOver and on touchStart timer is paused
 * - Ensure that on mouseLeave and on touchEnd timer is resumed correctly
 * - Ensure that progress is correct during normal auto time
 * - Ensure that progress is correct during pause
 * - Ensure that progress is correct upon resume
 */


/**
 * 
 * @param intervalDuration 
 * @param numOfItems 
 * @returns 
 */
function useAutoIndexManager(intervalDuration: number, numOfItems: number):
  ({ selectedIndex: number, next: () => void, previous: () => void, pause: () => void, resume: () => void, startTime: number | null, getProgress: () => number }) {
  const [selectedIndex, changeIndex] = useState(0)
  const timerId = useRef<NodeJS.Timeout | null>(null)
  const timerStartTime = useRef<number | null>(null)

  let timeElapsedAtPause = 0

  const next = () => {
    if (timerId.current) {
      clearTimeout(timerId.current)
      timerId.current = null
    }

    changeIndex(prev => {
      return ((prev + 1) % numOfItems)
    })

    timerStartTime.current = Date.now()
    timerId.current = setTimeout(() => {
      next()
    }, intervalDuration)
  }

  const previous = () => {
    if (timerId.current) {
      clearTimeout(timerId.current)
      timerId.current = null
    }

    changeIndex(prev => {
      const selected = prev - 1
      return selected >= 0 ? selected : numOfItems - 1
    })

    timerStartTime.current = Date.now()
    timerId.current = setTimeout(() => {
      next()
    }, intervalDuration)
  }

  const pause = () => {
    if (timerId.current) {
      clearTimeout(timerId.current)
      timerId.current = null
    }
    timeElapsedAtPause = getProgress() * intervalDuration
    console.log(timeElapsedAtPause)
  }

  const resume = () => {
    if (!timerId.current) {
      timerId.current = setTimeout(() => {
        next()
      }, intervalDuration - timeElapsedAtPause)
      timerStartTime.current = Date.now() - timeElapsedAtPause
      timeElapsedAtPause = 0

    }
  }

  const getProgress = () => {
    // now - start time -> [0, 1]
    let msElapsed = 0
    if (timeElapsedAtPause > 0) {
      msElapsed = timeElapsedAtPause
    } else {
      msElapsed = timerStartTime.current ? Date.now() - timerStartTime.current : 0
    }


    return msElapsed / intervalDuration
  }

  useEffect(() => {
    timerStartTime.current = Date.now()
    timerId.current = setTimeout(() => {
      next()
    }, intervalDuration)

    return () => {
      if (timerId.current)
        clearTimeout(timerId.current)
    }
  })

  return { selectedIndex, next, previous, pause, resume, startTime: timerStartTime.current, getProgress }
}

export default useAutoIndexManager