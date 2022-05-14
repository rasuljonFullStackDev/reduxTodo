import { createStore } from "redux";


import rootRender from "./redux/reducers/index";
const store = createStore(rootRender,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;