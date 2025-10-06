const initialState = {
  events: [
    { id: 1, name: 'Summer Music Festival', date: '2024-01-15', type: 'Concert', impact: 'High' },
    { id: 2, name: 'Tech Conference', date: '2024-01-20', type: 'Conference', impact: 'Medium' },
    { id: 3, name: 'Sports Championship', date: '2024-01-25', type: 'Sports', impact: 'High' },
  ],
  selectedEvent: null,
  filters: {
    type: 'all',
    dateRange: 'all',
    location: 'all'
  },
  loading: false,
  error: null,
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'events/setEvents':
      return { ...state, events: action.payload }
    case 'events/setSelectedEvent':
      return { ...state, selectedEvent: action.payload }
    case 'events/setFilters':
      return { ...state, filters: { ...state.filters, ...action.payload } }
    case 'events/setLoading':
      return { ...state, loading: action.payload }
    case 'events/setError':
      return { ...state, error: action.payload }
    default:
      return state
  }
}

// Action creators
export const setEvents = (events) => ({
  type: 'events/setEvents',
  payload: events
})

export const setSelectedEvent = (event) => ({
  type: 'events/setSelectedEvent',
  payload: event
})

export const setFilters = (filters) => ({
  type: 'events/setFilters',
  payload: filters
})

export const setLoading = (loading) => ({
  type: 'events/setLoading',
  payload: loading
})

export const setError = (error) => ({
  type: 'events/setError',
  payload: error
})

export default eventReducer