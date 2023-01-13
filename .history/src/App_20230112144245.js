import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import PostMain from './Page/PostMain';
import PostView from './Page/PostView';

function App() {
  return (
    <div className='App'>
      <h1>게시판</h1>
      <Routes>
        <Route path='/postView/:no' element={<PostView/>}/>
        <Route path='/' element= {<PostMain/>}/>
      </Routes>
    </div>
  )
}

export default App;