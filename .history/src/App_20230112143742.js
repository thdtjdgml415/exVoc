import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import PostMain from './Page/PostMain';
import PostView from './Page/PostView';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/postView/:no' element={<PostView/>}/>
        <Route path='/' element= {<PostMain/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;