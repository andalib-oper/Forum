import {combineReducers} from 'redux';
import authReducer from './auth/reducer';
import feedReducer from './Feeds/reducer';

const rootReducer = combineReducers({
  authState: authReducer,
  feedState:feedReducer
});

export default rootReducer;