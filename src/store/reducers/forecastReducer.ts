import {
  ForecastActions,
  ForecastActionTypes,
  ForecastState,
} from '../../types/forecast';

const initialState: ForecastState = {
  currentWeather: {
    data: null,
    loading: false,
    error: '',
  },
  forecastForWeek: {
    data: null,
    loading: false,
    error: '',
  },
};

export const forecastReducer = (
  state: ForecastState = initialState,
  action: ForecastActions
): ForecastState => {
  switch (action.type) {
    case ForecastActionTypes.FETCH_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: {
          ...state.currentWeather,
          loading: true,
          error: '',
        },
      };
    case ForecastActionTypes.FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        currentWeather: {
          data: action.payload,
          loading: false,
          error: '',
        },
      };
    case ForecastActionTypes.FETCH_CURRENT_WEATHER_FAILURE:
      return {
        ...state,
        currentWeather: {
          ...state.currentWeather,
          loading: false,
          error: action.payload,
        },
      };
    case ForecastActionTypes.FETCH_FORECAST_FOR_WEEK:
      return {
        ...state,
        forecastForWeek: {
          ...state.forecastForWeek,
          loading: true,
          error: '',
        },
      };
    case ForecastActionTypes.FETCH_FORECAST_FOR_WEEK_SUCCESS:
      return {
        ...state,
        forecastForWeek: {
          data: action.payload,
          loading: false,
          error: '',
        },
      };
    case ForecastActionTypes.FETCH_FORECAST_FOR_WEEK_FAILURE:
      return {
        ...state,
        forecastForWeek: {
          ...state.forecastForWeek,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
