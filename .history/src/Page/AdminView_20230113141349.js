import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { getPostByNo } from '../Data';
import './Post.css'


const AdminView = ({ }) => {
  const [ data, setData ] = useState({});
  const navigator = useNavigate();
  const { no } = useParams();
  
  const [adminViewModal, setAdminViewModal] = useState(false);

  const openModal = () => {
    setAdminViewModal(true);
  };
  const closeModal = () => {
    setAdminViewModal(false);
  };

    useEffect(() => {
      setData(getPostByNo(no));
    }, [ ]);

  return (
    <>
      <h2 align="left">관리자 게시글 상세페이지</h2>
      <div className="post-view-wrapper">     
          <>
            <div className="post-view-row">
              <label>작성자</label>
              <label>작성자가 나오는 부분입니다.</label>
            </div>
            <div className="post-view-row">
              <label>회사명</label>
              <label>회사명이 나오는 부분입니다.</label>
            </div>
            <div className="post-view-row">
              <label>부서명</label>
              <label>부서명이 나오는 부분입니다.</label>
            </div>
            <div className="post-view-row">
              <label>제목</label>
              <label>제목이 들어갈 부분입니다.</label>
            </div>
            <div className="post-view-row">
              <label>내용</label>
              <label>신고내용이 들어올 내용으로 총 텍스트 에디터가 들어갈 부분입니다. 이미지도 이쪽에 나오도록 설정해놓았습니다</label>
            </div>
          </>
          <React.Fragment>
              <div className="btn">
                <button className="registBtn" onClick={openModal}>
                  등록
                </button>
                <button className="cancelBtn">취소</button>
                <Modal open={adminViewModal} close={closeModal}>
                  등록하시겠습니까?
                </Modal>
              </div>
          </React.Fragment>
        <div className='post-view-btn-wrap'>
          <button className="post-view-go-list-btn" onClick={() => navigator(-1)}>목록으로 돌아가기</button>
        </div>
      </div>
    </>
  )
}

export default AdminView;