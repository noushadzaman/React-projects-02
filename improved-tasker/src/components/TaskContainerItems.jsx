/* eslint-disable react/prop-types */

import { useContext } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../context";

const TaskContainerItems = ({ tasks, dispatch, handleEdit, handleFav }) => {
    const [searchedTasks, setSearchedTasks] = useContext(TaskContext)
    const handleDeleteTask = (taskId) => {
        let con = confirm('Delete the task?');
        if (con) {
            dispatch({
                type: "DELETE",
                taskId
            })
            toast('Task deleted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                    <tr>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchedTasks === null ?
                            tasks.map(task => (
                                <tr
                                    key={task.id}
                                    className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                                    <td><svg
                                        onClick={() => handleFav(task.id)}
                                        xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="24"
                                        height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill={`${task.isFavorite ? "#fdfd26" : "#7c7d7e"}`}
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                    </svg></td>
                                    <td>{task.title}</td>
                                    <td>
                                        <div>
                                            {task.description}
                                        </div>
                                    </td>
                                    <td>
                                        <ul className="flex justify-center gap-1.5 flex-wrap">
                                            {
                                                task.tags.map((tag, idx) => <li
                                                    key={idx}
                                                >
                                                    <span
                                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00B2D9CC] px-2.5 text-sm capitalize text-[#F4F5F6]">{tag}</span>
                                                </li>)
                                            }

                                        </ul>
                                    </td>
                                    <td className="text-center">High</td>
                                    <td>
                                        <div className="flex items-center justify-center space-x-3">
                                            <button
                                                onClick={() => handleDeleteTask(task.id)}
                                                className="text-red-500"
                                            >Delete</button>
                                            <button
                                                onClick={() => handleEdit(task)}
                                                className="text-blue-500"
                                            >Edit</button>
                                        </div>
                                    </td>
                                </tr>
                            )) 
                            : searchedTasks.map(task => (
                                <tr
                                    key={task.id}
                                    className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                                    <td><svg
                                        onClick={() => handleFav(task.id)}
                                        xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="24"
                                        height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill={`${task.isFavorite ? "#fdfd26" : "#7c7d7e"}`}
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                    </svg></td>
                                    <td>{task.title}</td>
                                    <td>
                                        <div>
                                            {task.description}
                                        </div>
                                    </td>
                                    <td>
                                        <ul className="flex justify-center gap-1.5 flex-wrap">
                                            {
                                                task.tags.map((tag, idx) => <li
                                                    key={idx}
                                                >
                                                    <span
                                                        className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00B2D9CC] px-2.5 text-sm capitalize text-[#F4F5F6]">{tag}</span>
                                                </li>)
                                            }

                                        </ul>
                                    </td>
                                    <td className="text-center">High</td>
                                    <td>
                                        <div className="flex items-center justify-center space-x-3">
                                            <button
                                                onClick={() => handleDeleteTask(task.id)}
                                                className="text-red-500"
                                            >Delete</button>
                                            <button
                                                onClick={() => handleEdit(task)}
                                                className="text-blue-500"
                                            >Edit</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TaskContainerItems;