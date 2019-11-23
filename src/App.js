import React, { useEffect } from 'react';
import './App.scss';

import Container from './component/app-container/AppContainer'
import Footer from './component/footer/Footer'
import Header from './component/header/header'
import ErrorBoundary from './component/error/ErrorBoundary'
import { getToken, setToken } from './APIModule/APIReqest'

function App() {
  useEffect(() => {
    getToken().then(data => {
      setToken(data.token)
    }).catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Container />
      </ErrorBoundary>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
