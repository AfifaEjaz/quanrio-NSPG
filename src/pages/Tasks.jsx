import React, { useState } from "react";
import option_tiles from "../assets/images/option-tiles-icon.png";
import TaskCard from "../components/TaskCard";
import HeaderBar from "../components/HeaderBar";

const Tasks = () => {

 const originalTasks = [
  { title: "Option Titles", icon: option_tiles, url: "/Home/Tasks/OptionTiles" },
  { title: "Value Options", icon: option_tiles, url: "#" },
  { title: "Faucets", icon: option_tiles, url: "#" },
  { title: "Toilets", icon: option_tiles, url: "#" },
  { title: "Sinks", icon: option_tiles, url: "#" },
  { title: "Tub and Shower", icon: option_tiles, url: "#" },
];

const [tasks, setTasks] = useState(originalTasks);

  return (
    <>
      <HeaderBar data={tasks} setData={setTasks} originalData={originalTasks}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[24px] p-[24px]">
        {tasks.map((task, key) => (
          <TaskCard key={key} task={task} />
        ))}
      </div>
    </>
  );
};

export default Tasks;
