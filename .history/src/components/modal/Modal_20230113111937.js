import React from "react";
import "../modal/modal.css";

const Modal = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <main>{props.children}</main>
          <footer>
            <button className="ok">
             <a href="/" style={{color: 'white', textDecoration: 'none'}}>확인</a> 
            </button>
            <button className="close" onClick={close}>
              취소
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
