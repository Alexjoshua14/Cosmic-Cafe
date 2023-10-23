'use client'

import { useCallback, useRef, useState } from "react"

export function useProgress(getProgress: () => number): {
  progress: number, resetProgress: () => void, stopProgress: () => void, startProgress: () => void
} {
  const [progress, setProgress] = useState(0)
  const progressIntervalId = useRef<NodeJS.Timeout | null>(null)

  const startProgress = useCallback(() => {
    if (!progressIntervalId.current) {
      progressIntervalId.current = setInterval(() => {
        setProgress(() => getProgress())
      }, 100)
    }
    
  }, [getProgress])


  const stopProgress = useCallback(() => {
    if (progressIntervalId.current) {
      clearInterval(progressIntervalId.current)
      progressIntervalId.current = null
    }
    getProgress()

  }, [getProgress])

  const resetProgress = useCallback(() => {
    setProgress(0)
  }, [setProgress])


  return {progress, resetProgress, stopProgress, startProgress}
}