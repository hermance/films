import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import {persistReducer, persistStore} from "redux-persist"
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./state/reducers";
import storage from "redux-persist/lib/storage";
import 'bootstrap/dist/css/bootstrap.min.css';


const persistConfig = {
    key: "root",
    storage,
    whitelist: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistReducer(persistConfig, rootReducer),
    composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/">
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);