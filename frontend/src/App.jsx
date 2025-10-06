import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Map from './pages/Map'
import Calendar from './pages/Calendar'

// Simple layout
const SimpleLayout = ({ children }) => (
  <div className="min-h-screen bg-background">
    <header className="border-b bg-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Pulse</h1>
          <nav className="flex space-x-8">
            <a href="/" className="text-sm font-medium text-primary">Dashboard</a>
            <a href="/analytics" className="text-sm font-medium text-muted-foreground">Analytics</a>
            <a href="/map" className="text-sm font-medium text-muted-foreground">Map</a>
            <a href="/calendar" className="text-sm font-medium text-muted-foreground">Calendar</a>
          </nav>
        </div>
      </div>
    </header>
    <main className="p-6">
      {children}
    </main>
  </div>
)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={
            <SimpleLayout>
              <Dashboard />
            </SimpleLayout>
          } />
          <Route path="/analytics" element={
            <SimpleLayout>
              <Analytics />
            </SimpleLayout>
          } />
          <Route path="/map" element={
            <SimpleLayout>
              <Map />
            </SimpleLayout>
          } />
          <Route path="/calendar" element={
            <SimpleLayout>
              <Calendar />
            </SimpleLayout>
          } />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App