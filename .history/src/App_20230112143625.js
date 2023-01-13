import { BrowserRouter,  Routes } from 'react-router-dom';
import PostMain from './Page/PostMain';
import PostView from './Page/PostView';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes path='/postView/:no' element={<PostView/>}/>
        <Routes path='/' element= {<PostMain/>}/>
      </BrowserRouter>
    </div>
  )
}

export default App;