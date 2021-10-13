import './App.css';
import {applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import  LoadingBar  from 'react-redux-loading-bar';
import reducer from './reducers/inedx'
import Navbar from './components/Navbar'
import Login from './components/Login';
import Home from './components/Home';
// import AuthRoute from './components/AuthRoute'
import Question from './components/Question';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';

// const composedEnhancer = compose(applyMiddleware(thunk) , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(
  reducer,
  // composedEnhancer
  applyMiddleware(thunk)
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

          <Route exact path='/home'>
            <LoadingBar />
            <Navbar />
            <Home />
          </Route>

          <Route path='/questions/:id'>
            <Navbar />
            <Question />
          </Route>
        
          <Route path='/add'>
            <Navbar />
            <NewQuestion />
          </Route>

          <Route path='/leaderboard'>
            <Navbar />
            <LeaderBoard />
          </Route>

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
