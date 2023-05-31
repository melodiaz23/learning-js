import classes from "./Modal.module.css";

function Modal({ children, onClose }) {
  return (
    <>
      {/* div will be use to render a background (backdrop) */}
      <div className={classes.backdrop} onClick= {onClose}/>
      <dialog open className={classes.modal}>
        {children}
      </dialog> {/* open to make sure dialog is visible */}
    </>
  );
}

export default Modal;
