"use client";
import { useState } from "react";

const Pila = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const pushTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(""); // Limpiar el campo después de agregar la tarea
    }
  };

  const popTask = () => {
    if (isEmpty()) {
      return "La pila de tareas está vacía";
    }
    const newTasks = [...tasks];
    const task = newTasks.pop();
    setTasks(newTasks);
    return task;
  };

  const isEmpty = () => {
    return tasks.length === 0;
  };

  const renderTasks = () => {
    return tasks.map((task, index) =>
     <div className="mb-5 p-5 w-[18rem] bg-slate-700 border rounded-md overflow-hidden" 
    key={index}>{task}</div>);
  };

  return (
    <div className="container mx-auto">
      <h2 className="m-3 italic">Ejemplo de pila con lista de tareas</h2>

      <div className="flex flex-col justify-center items-center">
        <input
          className="m-5 text-black rounded-xl p-1"
          type="text"
          placeholder="Próxima tarea"
          maxLength={20}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="p-3 m-3 border rounded-xl w-[10rem] bg-teal-700 hover:bg-teal-600"
          onClick={pushTask}
        >
          Agregar Tarea
        </button>
      </div>

      <div className="col-1 md:col-2 container w-[22rem] mx-auto p-5 flex flex-col my-10 border rounded-xl">
        <div>
          <button
            className="p-3 mx-5 mb-5 border rounded-xl w-[10rem] bg-red-700 hover:bg-red-600"
            onClick={() => popTask()}
          >
            Eliminar Tarea
          </button>
        </div>

        <div className="mx-auto flex flex-col-reverse">{renderTasks()}</div>
      </div>
    </div>
  );
};

export default Pila;
