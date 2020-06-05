import React from 'react'


import NewStories from "./container/StoriesContainer";
import NavBar from './components/NavBar'

export default function App() {

  return (
    <div className='main'>
        <NavBar />
        <NewStories />
    </div>
    
  );
}


