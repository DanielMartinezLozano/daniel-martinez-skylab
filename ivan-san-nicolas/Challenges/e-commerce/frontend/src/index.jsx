import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import SabersList from './components/SabersList/SabersList';
import SaberDetail from './components/SaberDetail/SaberDetail';
import reportWebVitals from './reportWebVitals';
import './index.css';

const store = configureStore({ sabersReducer: { sabersArray: [] } });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/sabers" exact component={SabersList}/>
          <Route path="/sabers/:saberName" exact component={SaberDetail}/>
        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
