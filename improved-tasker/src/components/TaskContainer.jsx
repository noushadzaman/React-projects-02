import { useContext, useReducer, useState } from "react";
import TaskContainerActions from "./TaskContainerActions";
import TaskContainerItems from "./TaskContainerItems";
import AddNewTask from "../Modal/AddNewTask";
import { toast } from "react-toastify";
import taskReducer from "../reducers/CartReducers";
import { TaskContext } from "../context";

const TaskContainer = () => {
    const [showModal, setShowModal] = useState(false);
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [editTask, setEditTask] = useState(null);
    const [searchedTasks, setSearchedTasks] = useContext(TaskContext)

    const handleEdit = (task) => {
        setEditTask(task);
        setShowModal(true);
    }

    function handleAddTask(newTask, isAdd) {
        if (isAdd) {
            dispatch({
                type: "ADDED",
                newTask
            })
            toast('Task added', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            dispatch({
                type: "EDIT",
                newTask
            })
            toast('Task updated', {
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

        setShowModal(false);
        setEditTask(null);
    }

    const handleSearch = (e) => {
        const query = (e.target.value).toLowerCase();
        if (query === '') {
            setSearchedTasks(null);
            return;
        }
        const searchedTasks = tasks.filter(task => task.title.toLowerCase().includes(query));
        let filteredSearchedTasks = [];
        for (let i = 0; i < searchedTasks.length; i++) {
            const filteredSearchedTask = tasks.find(task => task.id === searchedTasks[i].id);
            filteredSearchedTasks.push(filteredSearchedTask);
        }
        setSearchedTasks(filteredSearchedTasks);
    }
    console.log(searchedTasks)

    const handleDeleteAll = () => {
        let con = confirm('Delete all task?');
        if (con) {
            dispatch({
                type: "DELETE_ALL"
            })
            toast('All task deleted', {
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

    const handleFav = (taskId) => {
        dispatch({
            type: "FAV",
            taskId
        })
    }

    return (
        <section className="mb-20" id="tasks">
            <div className="container">
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskContainerActions
                        onAddTask={() => setShowModal(true)}
                        onDeleteAll={handleDeleteAll}
                        handleSearch={handleSearch}
                    />
                    {
                        tasks.length > 0 ? <TaskContainerItems
                            tasks={tasks}
                            dispatch={dispatch}
                            handleEdit={handleEdit}
                            handleFav={handleFav}
                        /> :
                            <h1 className="text-center text-3xl">Task List is empty</h1>
                    }
                    {
                        showModal && <AddNewTask
                            onClose={() => setShowModal(false)}
                            onSave={handleAddTask}
                            editTask={editTask}
                        />
                    }
                </div>
            </div>
        </section>
    );
};

export default TaskContainer;