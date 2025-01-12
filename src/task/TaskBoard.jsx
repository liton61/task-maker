import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description: "I want to learn React",
    tags: ["React", "Javascript", "Python"],
    priority: "Hight",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  return (
    <div>
      <section className="mb-20" id="tasks">
        <div className="container">
          {/* <!-- Search Box --> */}
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>
          {/* <!-- Search Box Ends --> */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskBoard;
