const initialState = {
  selectedLocation: null,
  favouriteLocations: [
    { id: 1, name: 'Montreal', nextEvent: 'Concert', forecast: '+16%' },
    { id: 2, name: 'Boston', nextEvent: 'Festival', forecast: '-2%' },
    { id: 3, name: 'Toronto', nextEvent: 'Sports', forecast: '+7%' }
  ],
  searchQuery: '',
}

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'location/setSelectedLocation':
      return { ...state, selectedLocation: action.payload }
    case 'location/setSearchQuery':
      return { ...state, searchQuery: action.payload }
    case 'location/addFavouriteLocation':
      if (state.favouriteLocations.length < 3) {
        return { ...state, favouriteLocations: [...state.favouriteLocations, action.payload] }
      }
      return state
    case 'location/removeFavouriteLocation':
      return { 
        ...state, 
        favouriteLocations: state.favouriteLocations.filter(loc => loc.id !== action.payload)
      }
    default:
      return state
  }
}

// Action creators
export const setSelectedLocation = (location) => ({
  type: 'location/setSelectedLocation',
  payload: location
})

export const setSearchQuery = (query) => ({
  type: 'location/setSearchQuery',
  payload: query
})

export const addFavouriteLocation = (location) => ({
  type: 'location/addFavouriteLocation',
  payload: location
})

export const removeFavouriteLocation = (locationId) => ({
  type: 'location/removeFavouriteLocation',
  payload: locationId
})

export default locationReducer