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
            <button className="ok">인증</button>
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
