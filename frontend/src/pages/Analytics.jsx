import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchQuery } from '../store/slices/locationSlice'
import { setFilters } from '../store/slices/eventSlice'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Search } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Analytics = () => {
  const dispatch = useDispatch()
  const { searchQuery } = useSelector((state) => state.location)
  const { events, filters } = useSelector((state) => state.events)
  const { timeSeriesData, statistics } = useSelector((state) => state.analytics)

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
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                className="pl-10"
              />
            </div>
            <Button>Search</Button>
          </div>
        </CardContent>
      </Card>

      {/* Time Series Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Time Series Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="demand"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="expenditure"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
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
              <p className="text-2xl font-bold">${(statistics.totalSpend / 1000000).toFixed(1)}M</p>
              <p className="text-sm text-muted-foreground">Total Expenditure</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">+{statistics.growth}%</p>
              <p className="text-sm text-muted-foreground">Growth Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{events.length}</p>
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
                {events.map((event) => (
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