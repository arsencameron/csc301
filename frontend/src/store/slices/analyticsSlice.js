import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  timeSeriesData: [
    { date: '2024-01-01', demand: 85, expenditure: 2400 },
    { date: '2024-01-02', demand: 92, expenditure: 2800 },
    { date: '2024-01-03', demand: 78, expenditure: 2200 },
    { date: '2024-01-04', demand: 95, expenditure: 3200 },
    { date: '2024-01-05', demand: 88, expenditure: 2600 },
    { date: '2024-01-06', demand: 76, expenditure: 2100 },
    { date: '2024-01-07', demand: 82, expenditure: 2300 },
  ],
  statistics: {
    totalSpend: 2400000,
    average: 342000,
    growth: 12,
    forecasted: 2700000
  },
  weeklyDemand: [85, 92, 78, 95, 88, 76, 82],
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
