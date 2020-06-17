import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import './App.css';

// router 은 url을 가져가서 component를 불러온다
// url을 비교해서 가지고 온다, /home 과 /home/introduce 라는 라우터가 있다면
// 두개의 라우터를 모두 랜더링 한다.
function App() {
  // Link 를 사용하고 있을때는, <HashRouter> 안에 넣어주어야 한다.
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;