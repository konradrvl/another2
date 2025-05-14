import { cn } from '@/lib/utils'

export default function Header() {
  return (
    <header className={cn("w-full p-4 md:p-6")}>
    <div className="container flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-inspire-yellow to-inspire-orange flex items-center justify-center">
          <span className="text-xl">✨</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
          Kinderspiel
        </h1>
      </div>
      {/* ThemeToggle removed. Implement DaisyUI compatible theme toggle if needed */}
    </div>
  </header>
  )
}
