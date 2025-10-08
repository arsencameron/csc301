import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Dashboard = () => {
  const { favouriteLocations } = useSelector((state) => state.location)
  const { weeklyDemand, statistics } = useSelector((state) => state.analytics)

  // Prepare chart data
  const chartData = [
    { name: 'Mon', demand: weeklyDemand[0] },
    { name: 'Tue', demand: weeklyDemand[1] },
    { name: 'Wed', demand: weeklyDemand[2] },
    { name: 'Thu', demand: weeklyDemand[3] },
    { name: 'Fri', demand: weeklyDemand[4] },
    { name: 'Sat', demand: weeklyDemand[5] },
    { name: 'Sun', demand: weeklyDemand[6] },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Favourite Locations */}
          <Card>
            <CardHeader>
              <CardTitle>Favourite Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {favouriteLocations.map((location) => (
                  <div
                    key={location.id}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div>
                      <p className="font-medium">{location.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Next Major Event: {location.nextEvent}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-green-600">
                      Tomorrow Forecast: {location.forecast}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projected One Week Demand */}
          <Card>
            <CardHeader>
              <CardTitle>Projected One Week Demand</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-7 gap-2 text-sm font-medium text-muted-foreground">
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {weeklyDemand.map((demand, index) => (
                    <div
                      key={index}
                      className="bg-muted rounded p-2 text-center text-sm"
                    >
                      {demand}%
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold">${(statistics.totalSpend / 1000000).toFixed(1)}M</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Average</p>
                    <p className="text-2xl font-bold">${(statistics.average / 1000).toFixed(0)}K</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Growth</p>
                    <p className="text-2xl font-bold text-green-600">+{statistics.growth}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Forecasted</p>
                    <p className="text-2xl font-bold">${(statistics.forecasted / 1000000).toFixed(1)}M</p>
                  </div>
                </div>
                
                {/* Chart */}
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="demand" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center">
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-primary"
        >
          SEE API DOCUMENTATION LINK
        </a>
      </div>
    </div>
  )
}

export default Dashboard