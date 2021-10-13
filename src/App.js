import './App.css';
import {applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import  LoadingBar  from 'react-redux-loading-bar';
import reducer from './reducers/inedx'
import Navbar from './components/Navbar'
import Login from './components/Login';
import Home from './components/Home';
import AuthRoute from './components/AuthRoute'
import Question from './components/Question';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';

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
            <LoadingBar />
            <Navbar />
            <Login />
          </Route>

          <AuthRoute exact path='/home'>
            <LoadingBar />
            <Navbar />
            <Home />
          </AuthRoute>

          <AuthRoute path='/questions/:id'>
            <Navbar />
            <Question />
          </AuthRoute>
        
          <AuthRoute path='/new-question'>
            <Navbar />
            <NewQuestion />
          </AuthRoute>

          <AuthRoute path='/leaderboard'>
            <Navbar />
            <LeaderBoard />
          </AuthRoute>

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
