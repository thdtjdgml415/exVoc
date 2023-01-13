import React from 'react'
import { BrowserRouter,  Routes } from 'react-router-dom';
import PostMain from './Page/PostMain';
import PostView from './Page/PostView';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes exact path='/postView/:no' component={PostView}/>
        <Routes exact path='/' component={PostMain}/>
      </BrowserRouter>
    </div>
  )
}

export default App