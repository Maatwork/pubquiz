import { createStore, compose } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

import quiz from './data/quiz';

//create an object for the default data
const defaultState = {
    quiz
};

const store = createStore(rootReducer, defaultState
);


export default store;