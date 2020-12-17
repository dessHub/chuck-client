import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App';
import { client } from './graphql/apolloClient';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
    </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

