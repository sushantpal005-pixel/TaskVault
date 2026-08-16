

import { useState } from "react";
import Navbar from "../Components/Navbar";
import TodoStats from "../Components/TodoStats";
import TodoCard from "../Components/TodoCard";
import AddTodoModal from "../Components/AddTodoModal";
import EditTodoModal from "../Components/EditTodoModal";

const Dashboard = () => {
  const [todos] = useState([]);
  const [isAddTodoModal, setIsAddTodoModal] = useState(false)
  const [isEditTodoModal, setIsEditTodoModal] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState(null)


  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

          {/* Title */}
          <div className="shrink-0">
            <h2 className="text-3xl font-bold">
              My Tasks
            </h2>

            <p className="text-slate-400 mt-1">
              Manage your tasks and stay productive.
            </p>
          </div>

          {/* Search + Filter + Add */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

            {/* Search */}
            <div className="relative w-full sm:w-64">

              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
              />

            </div>

            {/* Filter */}
            <select
              defaultValue="all"
              className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-300 outline-none focus:border-indigo-500 cursor-pointer"
            >
              <option value="all">All Tasks</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>

            {/* Add Task */}
            <button
              type="button"
              onClick={() => setIsAddTodoModal(true)}
              className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 rounded-lg text-sm font-medium transition whitespace-nowrap"
            >
              + Add Task
            </button>
            

          </div>

        </div>

        {/* Stats */}
        <div className="mb-8">
          <TodoStats />
        </div>

        {/* Todo List */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">

          <div className="p-5 border-b border-slate-800">
            <h3 className="text-lg font-semibold">
              Your Tasks
            </h3>
          </div>

          <div className="divide-y divide-slate-800">
            {todos.map((todo) => (
              <TodoCard 
              key={todo.id} 
              todo={todo} 
              onEdit={() => {
                setSelectedTodo(todo); 
                setIsEditTodoModal(true)
              }} />
            ))}
          </div>

        </div>

      </main>

      {isAddTodoModal && (
        <AddTodoModal
          onClose={() => setIsAddTodoModal(false)}
        />
      )}

      {/* Edit Todo Modal */}
      {isEditTodoModal && (
        <EditTodoModal
          todo={selectedTodo}
          onClose={() => setIsEditTodoModal(false)}
        />
      )}
    
    </div>
  );
};

export default Dashboard;