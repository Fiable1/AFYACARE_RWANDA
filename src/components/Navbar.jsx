import { links, navLinks } from '../data/links'
import { HeartbeatIcon } from './icons'

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-100/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a className="flex items-center gap-3" href={links.brand}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-700 text-white shadow-sm">
            <HeartbeatIcon className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-700">AfyaCare</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              className="transition hover:text-brand-700"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
