
import React from "react"
import './App.css';
import LazyLoad from 'react-lazy-load';

const styles={
  textAlign:"center"
};

const App =()=>(
  <div style={styles} >
     <LazyLoad height={762}>
      <img src="https://placedog.net/500" />
    </LazyLoad>
    <LazyLoad height={762}>
      <img src="https://placedog.net/501" />
    </LazyLoad>
    <LazyLoad height={762}>
      <img src="https://placedog.net/502" />
    </LazyLoad>
    <LazyLoad height={762}>
      <img src="https://placedog.net/503" />
    </LazyLoad>
    <LazyLoad height={762}>
      <img src="https://placedog.net/504" />
    </LazyLoad>
    <LazyLoad height={762}>
      <img src="https://placedog.net/505" />
    </LazyLoad>
  </div>
);



export default App;
