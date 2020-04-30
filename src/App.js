import React, {Suspense, lazy, useReducer} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import reducer from "./custom-redux/reducer";
import Store from "./custom-redux/store";
import "./app.scss";
import Loading from "./components/Loading";

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Error = lazy(() => import('./pages/Error'));
const NotFound = lazy(() => import('./pages/NotFound'));

const initialState = {data: "globalData"};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='app'>
      <Store.Provider value={{state, dispatch}}>
        <Suspense fallback={<Loading/>}>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Redirect to="/dashboard"/>
              </Route>
              <Route path="/dashboard" exact>
                <Dashboard/>
              </Route>
              <Route path="/error" exact>
                <Error/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </Store.Provider>
    </div>
  );
}

export default App;
