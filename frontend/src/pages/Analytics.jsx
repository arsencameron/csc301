import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Search } from 'lucide-react'

const Analytics = () => {
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data
  const mockEvents = [
    { id: 1, name: 'Summer Music Festival', date: '2024-01-15', type: 'Concert', impact: 'High' },
    { id: 2, name: 'Tech Conference', date: '2024-01-20', type: 'Conference', impact: 'Medium' },
    { id: 3, name: 'Sports Championship', date: '2024-01-25', type: 'Sports', impact: 'High' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Analytics</h1>
      
      {/* Location Search */}
      <Card>
        <CardHeader>
          <CardTitle>Location Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for a location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      {/* Time Series Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Time Series Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Chart will be displayed here</p>
          </div>
        </CardContent>
      </Card>

      {/* Statistical Summaries */}
      <Card>
        <CardHeader>
          <CardTitle>Statistical Summaries For Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">85%</p>
              <p className="text-sm text-muted-foreground">Average Demand</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">$2.4M</p>
              <p className="text-sm text-muted-foreground">Total Expenditure</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">+12%</p>
              <p className="text-sm text-muted-foreground">Growth Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">15</p>
              <p className="text-sm text-muted-foreground">Total Events</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Relevant Events Table */}
      <Card>
        <CardHeader>
          <CardTitle>Relevant Events Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Event Name</th>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Type</th>
                  <th className="text-left p-2">Impact</th>
                </tr>
              </thead>
              <tbody>
                {mockEvents.map((event) => (
                  <tr key={event.id} className="border-b">
                    <td className="p-2">{event.name}</td>
                    <td className="p-2">{event.date}</td>
                    <td className="p-2">{event.type}</td>
                    <td className="p-2">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          event.impact === 'High'
                            ? 'bg-red-100 text-red-800'
                            : event.impact === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {event.impact}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Analytics