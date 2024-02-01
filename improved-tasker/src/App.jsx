import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import TaskContainer from "./components/TaskContainer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TaskContext } from "./context";
import { useState } from "react";

function App() {
  const [searchedTasks, setSearchedTasks] = useState(null);

  return (
    <div className="bg-[#191D26] font-[Inter] text-white flex flex-col items-center">
      <Navbar />
      <Hero />
      <TaskContext.Provider value={[searchedTasks, setSearchedTasks]}>
        <TaskContainer />
      </TaskContext.Provider>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
