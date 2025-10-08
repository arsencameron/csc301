import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  // Mock events data
  const mockEvents = [
    { id: 1, name: 'Summer Music Festival', date: '2024-01-15', type: 'Concert' },
    { id: 2, name: 'Tech Conference', date: '2024-01-20', type: 'Conference' },
    { id: 3, name: 'Sports Championship', date: '2024-01-25', type: 'Sports' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Calendar</h1>
      
      {/* Location Search */}
      <Card>
        <CardHeader>
          <CardTitle>Location Search</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="Search for a location..." />
        </CardContent>
      </Card>

      <div className="flex gap-6">
        {/* Calendar View */}
        <div className="flex-1">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Calendar</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={prevMonth}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="font-medium">
                    {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <Button variant="outline" size="sm" onClick={nextMonth}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Calendar grid will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics and Events */}
        <div className="w-80 space-y-4">
          {/* Statistics for Day */}
          <Card>
            <CardHeader>
              <CardTitle>Statistics for Day</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Projected Spend</p>
                  <p className="text-xl font-bold">$2,400</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Projected Attendance</p>
                  <p className="text-xl font-bold">1,250</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Other Stats</p>
                  <p className="text-xl font-bold">85%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Events That Day */}
          <Card>
            <CardHeader>
              <CardTitle>Top Events That Day</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockEvents.map((event) => (
                  <div key={event.id} className="p-3 border rounded-lg">
                    <p className="font-medium">{event.name}</p>
                    <p className="text-sm text-muted-foreground">{event.type}</p>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Calendar
