import React, { useEffect } from "react";
import { ReactChild, ReactNode } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, showModal }: any) => {
  //@ts-ignore
  return showModal ? ReactDOM.createPortal(children, document.getElementById("test")) : null;
};

export default Modal;
