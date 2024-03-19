import { applyMiddleware, createStore,compose } from "redux";
import { cartreducer } from "./reducer";
import { thunk } from "redux-thunk";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(cartreducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));