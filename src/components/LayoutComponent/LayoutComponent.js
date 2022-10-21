import React from "react";

import styles from "./LayoutComponent.module.css";

import HeaderComponent from "../HeaderComponent/HeaderComponent";

const LayoutComponent = ({ children }) => {
  return (
    <div className={styles.layoutcontainer}>
      <HeaderComponent />
      <main>{children}</main>
      <div>Footer</div>
    </div>
  );
};

export default LayoutComponent;
