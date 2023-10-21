import { clearPreviewData } from 'next/dist/server/api-utils'
import { setPriority } from 'os'
import { MutableRefObject, Ref, useCallback, useEffect, useRef, useState } from 'react'

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
  ({ selectedIndex: number, next: () => void, previous: () => void, pause: () => void, resume: () => void, startTime: number | null, getProgress: () => number, progress: number }) {
  const [selectedIndex, changeIndex] = useState(0)
  const timerId = useRef<NodeJS.Timeout | null>(null)
  const timerStartTime = useRef<number | null>(null)
  const [progress, setProgress] = useState(0)
  const progressIntervalId = useRef<NodeJS.Timeout | null>(null)

  const timeElapsedAtPause = useRef(0)

  const getProgress = useCallback(() => {
    // now - start time -> [0, 1]
    let msElapsed = 0
    if (timeElapsedAtPause.current > 0) {
      msElapsed = timeElapsedAtPause.current
    } else {
      msElapsed = timerStartTime.current ? Date.now() - timerStartTime.current : 0
    }


    return msElapsed / intervalDuration
  }, [intervalDuration, timeElapsedAtPause])

  const updateProgress = useCallback(() => {
    setProgress(getProgress())
  }, [setProgress, getProgress])

  const setProgressTimer = useCallback(() => {
    if (progressIntervalId.current)
      clearInterval(progressIntervalId.current)
    progressIntervalId.current = setInterval(updateProgress, 15)
  }, [progressIntervalId, updateProgress])

  const next = useCallback(() => {
    if (timerId.current) {
      clearTimeout(timerId.current)
      timerId.current = null
    }
    setProgress(0)

    changeIndex(prev => {
      return ((prev + 1) % numOfItems)
    })

    timerStartTime.current = Date.now()
    timerId.current = setTimeout(() => {
      next()
    }, intervalDuration)
    setProgressTimer()
  }, [intervalDuration, numOfItems, setProgressTimer])

  const previous = useCallback(() => {
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
  }, [intervalDuration, numOfItems, next])


  const pause = useCallback(() => {
    if (timerId.current) {
      clearTimeout(timerId.current)
      timerId.current = null
    }
    timeElapsedAtPause.current = getProgress() * intervalDuration
    updateProgress()
    // console.log(timeElapsedAtPause)
  }, [timeElapsedAtPause, intervalDuration, getProgress, updateProgress])

  const resume = useCallback(() => {
    if (!timerId.current) {
      timerId.current = setTimeout(() => {
        next()
      }, intervalDuration - timeElapsedAtPause.current)
      timerStartTime.current = Date.now() - timeElapsedAtPause.current
      timeElapsedAtPause.current = 0
    }
  }, [timeElapsedAtPause, intervalDuration, next])

  useEffect(() => {
    timerStartTime.current = Date.now()
    timerId.current = setTimeout(() => {
      next()
    }, intervalDuration)

    return () => {
      if (timerId.current)
        clearTimeout(timerId.current)
      if (progressIntervalId.current)
        clearTimeout(progressIntervalId.current)
    }
  }, [next, intervalDuration])

  return { selectedIndex, next, previous, pause, resume, startTime: timerStartTime.current, getProgress, progress }
}

export default useAutoIndexManager