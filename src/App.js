import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <h1>React Router Demo</h1>
        <Navigation />
        <Main />
      </div>
    );
  }
}

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
      <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
);

const Home = () => (
  <div className='home'>
    <h1>歡迎來到我的自介網站</h1>
    <p>首頁內容</p>
  </div>
);

const About = () => (
  <div className='about'>
    <h1>關於我</h1>
    <p>自我介紹內容</p>
    
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>聯絡我</h1>
    <p>聯絡資訊</p>
  </div>
);

export default App;