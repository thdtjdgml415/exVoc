import React, { useState } from "react";
import "../components/modal/common.css";
import "./registration.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Modal from "../components/modal/Modal";
import CheckModal from "../components/modal/CheckModal";
import adminModal from "../components/modal/adminModal.";

const Registration = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkModal, setCheckModal] = useState(false);

  const [adminModal, setAdminModal] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const opencheckModal = () => {
    setCheckModal(true);
  };
  const closeCheckModal = () => {
    setCheckModal(false);
  };

  const openadminModal = () => {
    setCheckModal(true);
  };
  const closeadminModal = () => {
    setCheckModal(false);
  };

  return (
    <>
    <h1>고객 VOC작성페이지</h1>
      <React.Fragment>
        <div className="checkBtn">
          <button onClick={opencheckModal}>문의내역 조회</button>
          <CheckModal open={checkModal} close={closeCheckModal}>
            <p>
              작성자
              <input className="modalInput" />
            </p>
            <p>
              회사명
              <input className="modalInput" />
            </p>
            <p>
              부서명
              <input className="modalInput" />
            </p>
            <p>
              패스워드
              <input type="password" className="modalInput2" />
            </p>
          </CheckModal>
        </div>
      </React.Fragment>
      <React.Fragment>
        <div className="checkBtn">
          <button onClick={opencheckModal}>관리자 페이지</button>
          <adminModal open={checkModal} close={closeCheckModal}>
            <p>
              아이디
              <input className="modalInput" />
            </p>
            <p>
              패스워드
              <input className="modalInput" />
            </p>
          </adminModal>
        </div>
      </React.Fragment>
      <div id="container">
        <div className="content">
          <div className="group">
            <h4 className="title">
              <label className="titleCon">작성자</label>
              <input type="text" className="field" />
            </h4>
          </div>
          <div className="group">
            <h4 className="title">
              <label className="titleCon">회사명</label>
              <input type="text" className="field" />
            </h4>
          </div>
          <div className="group">
            <h4 className="title">
              <label className="titleCon">부서명</label>
              <input type="text" className="field" />
            </h4>
          </div>
          <div className="group">
            <h4 className="title">
              <label className="titleCon2">패스워드</label>
              <input type="password" className="field" />
            </h4>
          </div>
          <div className="group">
            <h4 className="title">
              <label className="titleCon3">제목</label>
              <input type="text" className="field" />
            </h4>
          </div>
          <div className="group">
            <h4 className="title">
              <label>내용</label>
            </h4>
            <CKEditor
              className="conText"
              editor={ClassicEditor}
              config={{
                placeholder: "내용을 입력하세요.",
              }}
              onReady={(editor) => {
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>

          <React.Fragment>
            <div className="btn">
              <button className="registBtn" onClick={openModal}>
                등록
              </button>
              <button className="cancelBtn">취소</button>
              <Modal open={modalOpen} close={closeModal}>
                등록하시겠습니까?
              </Modal>
            </div>
          </React.Fragment>
        </div>
      </div>
    </>
  );
};

export default Registration;
