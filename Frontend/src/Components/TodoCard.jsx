import { useState } from "react";
import { updateTodoApi } from "../Api/todoApi";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../Redux/todoSlice";
import axios from "axios";
import { toast } from "sonner";

const TodoCard = ({ todo, onEdit }) => {
  const dispatch = useDispatch()

  const handleToggle = async () => {
    const res = await updateTodoApi(todo._id, {
      title: todo.title,
      description: todo.description,
      isCompleted: !todo.isCompleted
    });
    if (res.success) {
      dispatch(updateTodo(res.updatedTodo))
    }
  }

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/v1/todo/delete/${todo._id}`, {

        withCredentials: true,

      })
      console.log(res)
      if (res.data.success) {
        toast.success("Todo deleted successfully");
        dispatch(deleteTodo(todo._id));
      }
    } catch (error) {
      toast.error("Failed to delete todo")
    }

  }
  return (
    <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-slate-800/40 transition">

      {/* Todo Info */}
      <div className="flex items-start gap-4">

        {/* Checkbox */}
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={handleToggle}
          className="mt-1 w-5 h-5 accent-indigo-600 cursor-pointer"
        />

        {/* Title + Description */}
        <div className="min-w-0">

          <h4
            className={`font-medium break-words ${todo.isCompleted
              ? "line-through text-slate-500"
              : "text-white"
              }`}
          >
            {todo.title}
          </h4>

          <p className="text-sm text-slate-400 mt-1 break-words">
            {todo.description}
          </p>

        </div>

      </div>

      {/* Actions */}
      <div className="flex gap-2 ml-9 sm:ml-0 shrink-0">

        <button
          type="button"
          onClick={onEdit}
          className="px-3 py-2 text-sm border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
        >
          Edit
        </button>

        <button
          type="button"
          onClick={handleDelete}
          className="px-3 py-2 text-sm border border-red-900/50 rounded-lg text-red-400 hover:bg-red-950/40 transition"
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default TodoCard;