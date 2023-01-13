import React from 'react'

function App() {
  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">
        {
          data ? (
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
                <label>조회수</label>
              
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>
               
                </div>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        <button className="post-view-go-list-btn" onClick={() => history.goBack()}>목록으로 돌아가기</button>
      </div>
    </>
  )
}

export default App