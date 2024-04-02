'use client'

import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import { ToggleButtonTheme } from './toggle-button-theme'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function Header() {
  return (
    <header className="fixed top-0 flex justify-center items-center w-full h-24 border-b">
      <div className="flex w-full max-w-7xl justify-between items-center">
        <Link href={'/'}>React Ceará Blog</Link>
        <div className="flex items-center gap-6">
          <div className="flex border rounded-lg items-center gap-2 bg-muted">
            <Input className="h-8 border-none outline-none bg-muted text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0" />
            <Button size={'icon'} variant={'ghost'} className="px-2">
              <SearchIcon className="w-5 h-5 text-muted-foreground" />
            </Button>
          </div>
          <ToggleButtonTheme />
        </div>
      </div>
    </header>
  )
}
