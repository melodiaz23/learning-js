import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();
  function closeHandler (){
    navigate('..') // up one level
  }

  return (
    <>
      {/* div will be use to render a background (backdrop) */}
      <div className={classes.backdrop} onClick= {closeHandler}/>
      <dialog open className={classes.modal}>
        {children}
      </dialog> {/* open to make sure dialog is visible */}
    </>
  );
}

export default Modal;
