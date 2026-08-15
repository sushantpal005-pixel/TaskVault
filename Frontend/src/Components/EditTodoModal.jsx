const EditTodoModal = ({todo, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl">

        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800">

          <div>
            <h2 className="text-xl font-semibold text-white">
              Edit Task
            </h2>

            <p className="text-sm text-slate-400 mt-1">
              Update your task details.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            ✕
          </button>

        </div>

        {/* Form */}
        <form className="p-6 space-y-5">

          {/* Title */}
          <div>
            <label
              htmlFor="edit-title"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Task Title
            </label>

            <input
              id="edit-title"
              type="text"
              defaultValue={todo?.title}
              placeholder="Enter task title"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="edit-description"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Description
            </label>

            <textarea
              id="edit-description"
              rows="4"
              defaultValue={todo?.description}
              placeholder="Enter task description"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none resize-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Status */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">

            <p className="text-sm font-medium text-slate-300 mb-3">
              Task Status
            </p>

            <label
              htmlFor="edit-status"
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                id="edit-status"
                type="checkbox"
                defaultChecked={todo?.isCompleted}
                className="w-5 h-5 accent-indigo-600 cursor-pointer"
              />

              <div>
                <p className="text-sm text-white">
                  Mark as completed
                </p>

                <p className="text-xs text-slate-500 mt-0.5">
                  Completed tasks will be moved to your completed list.
                </p>
              </div>
            </label>

          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-1/2 px-5 py-3 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full sm:w-1/2 px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default EditTodoModal;