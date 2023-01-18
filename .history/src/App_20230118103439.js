import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PostMain from "./Page/PostMain";
import PostView from "./Page/PostView";
import Registration from "./Page/Registration";
import AdminList from "./Page/AdminList";
import AdminView from "./Page/AdminView";

function App() {
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
