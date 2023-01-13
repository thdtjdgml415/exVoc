import { BrowserRouter,  Route } from 'react-router-dom';
import PostMain from './Page/PostMain';
import PostView from './Page/PostView';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/postView/:no' element={<PostView/>}/>
        <Route path='/' element= {<PostMain/>}/>
      </BrowserRouter>
    </div>
  )
}

export default App;