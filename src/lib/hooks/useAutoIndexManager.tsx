import { useEffect, useRef, useState } from 'react'

function useAutoIndexManager(intervalDuration: number, numOfItems: number):
  ([number, () => void, () => void, () => void, () => void, () => void]) {
  const [selectedIndex, changeIndex] = useState(0)
  const timerId = useRef<NodeJS.Timeout | null>(null)
  const timerStartTime = useRef<number | null>(null)

  let pausedTime = 0

  const next = () => {
    if (timerId.current) {
      console.log(timerId.current)
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
    pausedTime = getProgress() * intervalDuration
    console.log(pausedTime)
  }

  const resume = () => {
    if (!timerId.current) {
      timerId.current = setTimeout(() => {
        next()
      }, intervalDuration - pausedTime)
    }
  }

  const getProgress = () => {
    // now - start time -> [0, 1]

    let msElapsed = timerStartTime.current ? Date.now() - timerStartTime.current : 0

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

  return [selectedIndex, next, previous, pause, resume, getProgress]
}

export default useAutoIndexManager