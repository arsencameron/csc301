import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  timeSeriesData: [],
  statistics: {
    totalSpend: 0,
    average: 0,
    growth: 0,
    forecasted: 0
  },
  weeklyDemand: [],
  selectedDate: new Date().toISOString().split('T')[0],
  loading: false,
}

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setTimeSeriesData: (state, action) => {
      state.timeSeriesData = action.payload
    },
    setStatistics: (state, action) => {
      state.statistics = action.payload
    },
    setWeeklyDemand: (state, action) => {
      state.weeklyDemand = action.payload
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { 
  setTimeSeriesData, 
  setStatistics, 
  setWeeklyDemand, 
  setSelectedDate, 
  setLoading 
} = analyticsSlice.actions

export default analyticsSlice.reducer
