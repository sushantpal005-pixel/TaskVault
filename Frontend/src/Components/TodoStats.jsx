import { useSelector } from "react-redux";

const TodoStats = () => {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos)
  const completedTodos = todos.filter((todo) => todo.isCompleted);
  const pendingTodos = todos.filter((todo) => !todo.isCompleted);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-slate-400 text-sm">
              Total Tasks
            </p>

            <h3 className="text-3xl font-bold mt-2">
              {todos.length}
            </h3>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-slate-400 text-sm">
              Completed
            </p>

            <h3 className="text-3xl font-bold mt-2 text-green-400">
              {completedTodos.length}
            </h3>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <p className="text-slate-400 text-sm">
              Pending
            </p>

            <h3 className="text-3xl font-bold mt-2 text-yellow-400">
              {pendingTodos.length}
            </h3>
          </div>

        </div> 
  );
};

export default TodoStats;