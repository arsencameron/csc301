import React from 'react'
import { useSelector } from 'react-redux'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Heart, Plus } from 'lucide-react'

const Sidebar = () => {
  const { favouriteLocations } = useSelector((state) => state.location)

  return (
    <aside className="w-80 border-r bg-card p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Favourite Locations
          </CardTitle>
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
                    {location.nextEvent}
                  </p>
                </div>
                <span className="text-sm font-medium text-green-600">
                  {location.forecast}
                </span>
              </div>
            ))}
            {favouriteLocations.length < 3 && (
              <Button variant="outline" size="sm" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Location
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}

export default Sidebar
