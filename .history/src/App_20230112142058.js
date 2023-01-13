import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PostMain from './Page/PostMain'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/postView/:no' component={PostView}/>
      </BrowserRouter>
      <PostMain />
    </div>
  )
}

export default App