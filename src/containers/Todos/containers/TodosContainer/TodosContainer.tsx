import React, { useState } from "react";
import { Header, Todods, Filters, Footer, ITodo, AddNewTodo } from "@containers/";
import styles from "./styles.module.scss";
import { Modal } from "@shared/";

interface IComponentProps {
  children?: React.ReactNode;
  todos: ITodo[];
}

const TodosContainer = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Modal showModal={showModal}>
        <div style={{ width: "100%", height: "100%", backgroundColor: "grey" }}>
          {" "}
          Very important Message
          <button onClick={handleModal}> close</button>
        </div>
      </Modal>
      <Header />
      <div className={styles.todosContainer}>
        <AddNewTodo />
        <Todods />
        <Filters />
      </div>
      <Footer />
    </div>
  );
};

export default TodosContainer;
