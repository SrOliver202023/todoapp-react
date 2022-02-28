import React from 'react';
import './style.css';
import { FiTrash } from 'react-icons/fi';
import { useEffect, useState } from 'react';

interface IListItems {
  id: number,
  nameTask: string,
  Iscomplet: Boolean;
}

export default function ListItems() {

  const [tasks, setTasks] = useState("");
  const [todoList, setTodoList] = useState<IListItems[]>([]);

  function addTask(): void {
    const idRandom = (num: number) => Math.floor(Math.random() * num);
    const newTask = { id: idRandom(9999999), nameTask: tasks };

    const newList = [...todoList, newTask] as IListItems[];
    setTodoList(newList);
  }

  function deleteTask({ id, event }: { id: number, event: React.MouseEvent; }): void {
    event.preventDefault();

    const listTaskBeforeDropTask = todoList.filter((task) => task.id !== id);

    const newList = [...listTaskBeforeDropTask];

    setTodoList(newList);
  }

  useEffect(() => {}, [todoList]);

  return (
    <div className="flex justify-center relative ">
      <div className="block p-6 rounded-lg shadow-lg bg-white  h-96 w-2/3 fixed top-20 ">

        <div className=" flex justify-between items-center">
          <h2>Minhas Estack</h2>
          <div className="flex">
            <input
              type="text"
              className="
                form-control
                block
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
              id="exampleFormControlInput1"
              placeholder="Digite a sua Tarefa"
              onChange={(event) => setTasks(event.target.value)}
              value={tasks}
            />
            <button onClick={addTask} type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Adcionar</button>
          </div>
        </div>
        {

          todoList.map((tasks, key) => (
            <div key={tasks.id} className="m-5">
              <ul className="list-disc list-none flex justify-between items-center">
                <li><input type="checkbox" /></li>
                <li>{tasks.nameTask}</li>
                <a href="" onClick={event => deleteTask({ id: tasks.id, event })}  >
                  <FiTrash size={16} color="blue" />
                </a>
              </ul>
              <hr />
            </div>
          ))

        }
      </div>
    </div>
  );
}
