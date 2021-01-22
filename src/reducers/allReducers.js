import themeToggler from './themeToggler';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    theme: themeToggler
})

export default allReducers;