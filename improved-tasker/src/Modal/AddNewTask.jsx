/* eslint-disable react/prop-types */
import { useState } from "react";

const AddNewTask = ({ onClose, onSave, editTask }) => {
    const [newTask, setNewTask] = useState(editTask || {
        id: crypto.randomUUID(),
        title: "",
        description: "",
        tags: [],
        priority: "",
        isFavorite: false
    })

    const [isAdd, setIsAdd] = useState(Object.is(editTask, null))

    const handelChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        if (name === 'tags') {
            value = value.split(",");
        }
        setNewTask({
            ...newTask,
            [name]: value
        })
    }

    return (
        <>
            <div className="bg-black bg-opacity-70 h-[100%] w-full z-10 absolute top-0 left-0"></div>
            <form
                className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-[90px]"
            >
                <h2
                    className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]"
                >
                    {`${isAdd ? 'Add New Task' : 'Edit Task'}`}
                </h2>

                <div className="space-y-9 text-white lg:space-y-10">
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="title">Title</label>
                        <input
                            onChange={handelChange}
                            value={newTask.title}
                            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                            type="text"
                            name="title"
                            id="title"
                            required
                        />
                    </div>
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="description">Description</label>
                        <textarea
                            onChange={handelChange}
                            value={newTask.description}
                            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                            type="text"
                            name="description"
                            id="description"
                            required
                        ></textarea>
                    </div>
                    <div
                        className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
                    >
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="tags">Tags</label>
                            <input
                                onChange={handelChange}
                                value={newTask.tags}
                                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                type="text"
                                name="tags"
                                id="tags"
                                required
                            />
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="priority">Priority</label>
                            <select
                                onChange={handelChange}
                                value={newTask.priority}
                                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                                name="priority"
                                id="priority"
                                required
                            >
                                <option value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex justify-between lg:mt-20">
                    <button
                        onClick={() => onClose(event)}
                        className="rounded bg-red-500  px-4 py-2 text-white transition-all hover:opacity-80"
                    >
                        Close
                    </button>
                    <button
                        onClick={() => {
                            if (newTask.title === "" ||
                                newTask.description === "" ||
                                newTask.priority === "" ||
                                newTask.tags.length === 0) {
                                return;
                            }
                            onSave(newTask, isAdd)
                        }}
                        type="submit"
                        className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
                    >
                        Create new Task
                    </button>
                </div>
            </form >
        </>
    );
};

export default AddNewTask;