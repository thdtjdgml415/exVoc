import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import PostMain from './Page/PostMain';
import PostView from './Page/PostView';
import Registration from './Page/Registration';
import AdminList from './Page/AdminList';
import AdminView from './Page/AdminView';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/Registration/' element={<Registration/>}/>
          <Route path='/postView/:no' element={<PostView/>}/>
          <Route path='/' element= {<PostMain/>}/>
          <Route path='/Page/AdminList' element= {<AdminList/>}/>
          <Route path='/Page/AdminView' element= {<AdminView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;