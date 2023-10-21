import { setPriority } from 'os'
import { MutableRefObject, Ref, useCallback, useEffect, useRef, useState } from 'react'
import { useProgress } from './useProgress'
import { resolvePtr } from 'dns'

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

  const { progress, stopProgress, startProgress, resetProgress } = useProgress(getProgress)

  const next = useCallback(() => {
    stopProgress()
    resetProgress()
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
    startProgress()
  }, [intervalDuration, numOfItems, stopProgress, startProgress, resetProgress])

  const previous = useCallback(() => {
    stopProgress()
    resetProgress()
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
    startProgress()
  }, [intervalDuration, numOfItems, next, stopProgress, startProgress, resetProgress])


  const pause = useCallback(() => {
    stopProgress()
    if (timerId.current) {
      clearTimeout(timerId.current)
      timerId.current = null
    }
    timeElapsedAtPause.current = getProgress() * intervalDuration
  }, [timeElapsedAtPause, intervalDuration, getProgress, stopProgress])

  const resume = useCallback(() => {
    if (!timerId.current) {
      timerId.current = setTimeout(() => {
        next()
      }, intervalDuration - timeElapsedAtPause.current)
      timerStartTime.current = Date.now() - timeElapsedAtPause.current
      timeElapsedAtPause.current = 0
      startProgress()
    }
  }, [timeElapsedAtPause, intervalDuration, next, startProgress])

  useEffect(() => {
    timerStartTime.current = Date.now()
    timerId.current = setTimeout(() => {
      next()
    }, intervalDuration)
    startProgress()

    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current)
        timerId.current = null
      }
    }
  }, [next, intervalDuration, startProgress])

  return { selectedIndex, next, previous, pause, resume, startTime: timerStartTime.current, getProgress, progress }
}

export default useAutoIndexManager