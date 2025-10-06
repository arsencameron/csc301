import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  events: [],
  selectedEvent: null,
  filters: {
    type: 'all',
    dateRange: 'all',
    location: 'all'
  },
  loading: false,
  error: null,
}

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload
    },
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { 
  setEvents, 
  setSelectedEvent, 
  setFilters, 
  setLoading, 
  setError 
} = eventSlice.actions

export default eventSlice.reducer
```

```

