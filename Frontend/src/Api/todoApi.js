import axios from "axios"

export const updateTodoApi = async (id, todoData) => {
    const response = await axios.put(
        `https://taskvault-q0fl.onrender.com/api/v1/todo/update/${id}`,
        todoData,
        {
            withCredentials: true,
        }
    );

    return response.data;
};