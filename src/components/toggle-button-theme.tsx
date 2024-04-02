'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'

export function ToggleButtonTheme() {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      size={'icon'}
      variant={'secondary'}
      onClick={() => {
        if (theme === 'light') {
          return setTheme('dark')
        }
        setTheme('light')
      }}
      className="relative border"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
