const AddTodoModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-xl font-semibold text-white">
              Add New Task
            </h2>

            <p className="text-sm text-slate-400 mt-1">
              Create a new task for your list.
            </p>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            ✕
          </button>

        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Title
            </label>

            <input
              id="title"
              type="text"
              placeholder="Enter task title"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Description
            </label>

            <textarea
              id="description"
              rows="4"
              placeholder="Enter task description"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none resize-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
            >
              Create Task
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default AddTodoModal;