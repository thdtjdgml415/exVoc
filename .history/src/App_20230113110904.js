import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import PostMain from './Page/PostMain';
import PostView from './Page/PostView';
import Registration from './Page/Registration';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/postView/:no' element={<PostView/>}/>
          <Route path='/' element= {<PostMain/>}/>
          <Route path='/Registration/' element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;