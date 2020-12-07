import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reducers from "./store/reducers"
import {createStore, combineReducers} from "redux"
import {Provider} from "react-redux"
import {reducer as formReducer} from "redux-form"

const rootReducer = combineReducers({
    reducers,
    form: formReducer,
})
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
)
// Add provider
