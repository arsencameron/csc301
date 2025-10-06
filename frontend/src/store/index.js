import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './slices/locationSlice'
import eventReducer from './slices/eventSlice'
import analyticsReducer from './slices/analyticsSlice'

export const store = configureStore({
  reducer: {
    location: locationReducer,
    events: eventReducer,
    analytics: analyticsReducer,
  },
})

export default store