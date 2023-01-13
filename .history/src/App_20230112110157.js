import React from 'react'

function App() {
  return (
    <>
      <h2 align="center">게시vks</h2>

      <div className="post-view-wrapper">
            <>
              <div className="post-view-row">
                <label>게시글 번호</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>      
              </div>
              <div className="post-view-row">
                <label>작성일</label>            
              </div>
              <div className="post-view-row">
                <label>내용</label>
              </div>
            </>

        
        <button className="post-view-go-list-btn">글쓰기</button>
      </div>
    </>
  )
}

export default App