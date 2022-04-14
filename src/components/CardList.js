import React, { useContext ,useEffect} from "react";
import { CardListContext } from "../contexts/CardListContext";
import Card from "./Card";

const CardList = (props) => {
  const { tasks,editTask } = useContext(CardListContext);
  
  function onTaskListClick() {
    props.OnTaskEdit();
  }
  
  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map(task => {
            return <Card task={task} key={task.id} onClickTask={onTaskListClick}/>;
          })}
        </ul>
      ) : (
        <div className="no-cards">No Tasks</div>
      )}
    </div>
  );
};

export default CardList;
