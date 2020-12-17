import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { JokeByCategory } from './components/JokeByCategory';

function App() {
  return (
    <div className="main">
      <Header/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/joke/:category" component={JokeByCategory} />
      </Switch>
    </div>
  );
}

export default App;
