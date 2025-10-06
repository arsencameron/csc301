import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../utils/cn'

const Header = () => {
  const location = useLocation()
  
  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/analytics', label: 'Analytics' },
    { path: '/map', label: 'Map' },
    { path: '/calendar', label: 'Calendar' },
  ]

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            Pulse
          </Link>
          
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
