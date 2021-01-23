import { combineReducers } from 'redux';

import themeToggler from './themeToggler';
import appManager from './appManager';


const allReducers = combineReducers({
    theme: themeToggler,
    apps: appManager
})

export default allReducers;