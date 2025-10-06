import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Search } from 'lucide-react'

const Map = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Map</h1>
      
      <div className="flex gap-6 h-[calc(100vh-200px)]">
        {/* Main Map Area */}
        <div className="flex-1">
          <Card className="h-full">
            <CardContent className="p-0 h-full">
              <div className="h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">MAP</h3>
                  <p className="text-muted-foreground">Interactive map will be displayed here</p>
                  <div className="mt-4 p-4 bg-background border rounded-lg">
                    <p className="text-sm">Stats for selected event on click</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 space-y-4">
          {/* Location Search */}
          <Card>
            <CardHeader>
              <CardTitle>Location Search</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for a location..."
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Event Filters */}
          <Card>
            <CardHeader>
              <CardTitle>Event Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Event Type</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>All Events</option>
                    <option>Concerts</option>
                    <option>Sports</option>
                    <option>Conferences</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats for selected location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Total Events</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-sm text-muted-foreground">Average Demand</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Map
