import React from "react";
import "../modal/modal.css";

const CheckModal = (props) => {
  const { open, close } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <main>{props.children}</main>
          <footer>
            <button className="ok"><a href="/" style={{color: 'white' textDecoration:'none'}}>인증</a></button>
            <button className="close" onClick={close}>
              취소
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default CheckModal;
