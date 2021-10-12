import './App.css';
import {applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import reducer from './reducers/inedx'
import Navbar from './components/Navbar'
import Login from './components/Login';
import Home from './components/Home';
import AuthRoute from './components/AuthRoute'

const composedEnhancer = compose(applyMiddleware(thunk) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(
  reducer,
  composedEnhancer
  )


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          
          <Route exact path='/'>
            <Navbar />
            <Login />
          </Route>

          <AuthRoute exact path='/home'>
            <Navbar />
            <Home />
          </AuthRoute>
            
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
