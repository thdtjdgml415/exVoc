import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getPostByNo } from '../Data';
import './Post.css'


const PostView = ({ }) => {
  const [ data, setData ] = useState({});
  const navigator = useNavigate();
  const { no } = useParams();
  
  
    useEffect(() => {
      setData(getPostByNo(no));
    }, [ ]);

  return (
    <>
      <h2 align="center">게시글 상세정보</h2>

      <div className="post-view-wrapper">     
            <>
              <div className="post-view-row">
                <label>작성자</label>
                <label>작성자가 나오는 부분입니다.</label>
              </div>
              <div className="post-view-row">
                <label>제목</label>
                <label>제목이 들어갈 부분입니다</label>
              </div>
              <div className="post-view-row">
                <label>회</label>
                <label></label>
              </div>
              <div className="post-view-row">
                <label>내용</label>
                <div>
                </div>
              </div>
            </>
        <button className="post-view-go-list-btn" onClick={() => navigator(-1)}>목록으로 돌아가기</button>
      </div>
    </>
  )
}

export default PostView;