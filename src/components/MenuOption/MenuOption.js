import React from "react";
import { MdClose } from "react-icons/md";
import style from "./MenuOption.module.css";
import KgLbs from "C:/code/drugDoses/drugprices/src/components/KgLbs/KgLbs.js";

const elements = {
  settings: "settings",
  legal: "legal",
  about: "about",
  legend: "legend",
};

const Settings = () => (
  <div className={style.content}>
    <h2 className={style.heading}>Settings</h2>
    <p className={style.body}>Settings content</p>
  <KgLbs />
  </div>
);

const Legal = () => (
  <div className={style.content}>
    <h2 className={style.heading}>Legal</h2>
    <p className={style.body}>Legal content </p>
  </div>
);

const About = () => (
  <div className={style.content}>
    <h2 className={style.heading}>About</h2>
    <p className={style.body}>About content</p>
  </div>
);

const Legend = () => (
  <div className={style.content}>
    <h2 className={style.heading}>Legend</h2>
    <p className={style.body}>Legend content</p>
  </div>
);

const ModalContent = ({ openedOption }) => {
  let content;

  switch (openedOption) {
    case elements.settings:
      content = Settings();
      break;
    case elements.legal:
      content = Legal();
      break;
    case elements.about:
      content = About();
      break;
    case elements.legend:
      content = Legend();
      break;
    default:
      content = null;
  }
  return content;
};

const CloseButton = ({ handleClose }) => {
  const handleClick = () => {
    handleClose(false);
  };
  return (
    <button className={style.closeButton} onClick={handleClick}>
      <MdClose className={style.icon} />
    </button>
  );
};

const MenuOption = ({ openedOption, handleClose }) => {
  return (
    <div className={style.modalWrapper}>
      <CloseButton handleClose={handleClose} />
      <ModalContent openedOption={openedOption} />
    </div>
  );
};

export default MenuOption;
