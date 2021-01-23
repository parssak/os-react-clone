import themeToggler from './themeToggler';
import { combineReducers } from 'redux';
import appManager from './appManager';

const allReducers = combineReducers({
    theme: themeToggler,
    apps: appManager
})

export default allReducers;