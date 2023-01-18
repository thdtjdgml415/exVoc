import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {useState, useEffect}
import PostMain from "./Page/PostMain";
import PostView from "./Page/PostView";
import Registration from "./Page/Registration";
import AdminList from "./Page/AdminList";
import AdminView from "./Page/AdminView";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/hello")
      .then((reponse) => Response.tesct())
      .then((message) => {
        setMessage(message);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/postView/:no" element={<PostView />} />
          <Route path="/PostMain" element={<PostMain />} />
          <Route path="/Page/AdminList" element={<AdminList />} />
          <Route path="/AdminView/:no" element={<AdminView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
