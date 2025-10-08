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
  
  const analyticsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'analytics/setTimeSeriesData':
        return { ...state, timeSeriesData: action.payload }
      case 'analytics/setStatistics':
        return { ...state, statistics: action.payload }
      case 'analytics/setWeeklyDemand':
        return { ...state, weeklyDemand: action.payload }
      case 'analytics/setSelectedDate':
        return { ...state, selectedDate: action.payload }
      case 'analytics/setLoading':
        return { ...state, loading: action.payload }
      default:
        return state
    }
  }
  
  // Action creators
  export const setTimeSeriesData = (data) => ({
    type: 'analytics/setTimeSeriesData',
    payload: data
  })
  
  export const setStatistics = (stats) => ({
    type: 'analytics/setStatistics',
    payload: stats
  })
  
  export const setWeeklyDemand = (demand) => ({
    type: 'analytics/setWeeklyDemand',
    payload: demand
  })
  
  export const setSelectedDate = (date) => ({
    type: 'analytics/setSelectedDate',
    payload: date
  })
  
  export const setLoading = (loading) => ({
    type: 'analytics/setLoading',
    payload: loading
  })
  
  export default analyticsReducer