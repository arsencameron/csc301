import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedLocation: null,
  favouriteLocations: [
    { id: 1, name: 'Montreal', nextEvent: 'Concert', forecast: '+16%' },
    { id: 2, name: 'Boston', nextEvent: 'Festival', forecast: '-2%' },
    { id: 3, name: 'Toronto', nextEvent: 'Sports', forecast: '+7%' }
  ],
  searchQuery: '',
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    addFavouriteLocation: (state, action) => {
      if (state.favouriteLocations.length < 3) {
        state.favouriteLocations.push(action.payload)
      }
    },
    removeFavouriteLocation: (state, action) => {
      state.favouriteLocations = state.favouriteLocations.filter(
        loc => loc.id !== action.payload
      )
    },
  },
})

export const { 
  setSelectedLocation, 
  setSearchQuery, 
  addFavouriteLocation, 
  removeFavouriteLocation 
} = locationSlice.actions

export default locationSlice.reducer
```

```

