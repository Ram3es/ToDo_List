import React from "react";
import styles from "./styles.module.scss";

const Filters = () => (
  <div className={styles.filters}>
    <div className={styles.selectedItems}> 3 items selected</div>
    <div className={styles.filter}>
      <div>All</div>
      <div>Active</div>
      <div>Completed</div>
    </div>
  </div>
);

export default Filters;
