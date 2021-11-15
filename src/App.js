import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import './components/Header/Header.css';
import SliderImages from './components/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premier from './components/Premier';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
// import AllMovies from './components/AllMovies';
// import SingleMovie from './components/SingleMovie';
import AllMoviesFetch from './components/AllMoviesFetch';
import SingleMovieFetch from './components/SingleMovieFetch';
import Register from './components/register';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/router">
            <SliderImages src1="./images/first.jpeg" src2="./images/second.jpg" src3="./images/third.jpg"  />
          </Route>
          <Route exact path="/">
            <Header/>
            <SliderImages src1="./images/first.jpeg" src2="./images/second.jpg" src3="./images/third.jpg"  />
            <CardsSlider/>
            <Premier/>
            <Footer/>
          </Route>
          <Route exact path="/movies">
            <Header/>
            <AddMovie/>
            <AllMoviesFetch/>
          </Route>
          {/* <Route exact path="/movies/:movid">
            <Header/>
            <SingleMovie/>
          </Route> */}
          <Route exact path="/movies/:movid">
            <Header/>
            <SingleMovieFetch/>
          </Route>
          <Route exact path="/register">
            <Header/>
            <Register/>
            <Footer/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
