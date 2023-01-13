import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import PostMain from './Page/PostMain';
import PostView from './Page/PostView';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/postView/:no' component={PostView}/>
        <Route exact path='/' component={PostMain}/>
      </BrowserRouter>
      <PostMain />
    </div>
  )
}

export default App