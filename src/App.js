import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import './component/styles.css';
import Home from './component/Home';
import Portfolio from './component/Portfolio';
import Experience from './component/Experience';
import Navbar from './component/Navbar';
import Footer from './component/Footer';






// import Nbar from './components/Navbar';
// import Hheader from './components/HomeHeader';


function App() {
  return (
    <>
    <div className="main_div">
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Portfolio" component={Portfolio}/>
      <Route exact path="/Experience" component={Experience}/>
      <Redirect to="/"/>
      
    </Switch>
    <Footer/>
</div>


    
    {/* <div className="main_div">
    <Nbar/>
    <Hheader/>
    </div> */}
    </>
  );
}

export default App;
