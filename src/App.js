import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import FavoriteDigimons from './component/FavoriteDigimons';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/favorite'>
              <FavoriteDigimons />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;