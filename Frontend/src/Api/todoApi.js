import axios from "axios"

export const updateTodoApi = async (id, todoData) => {
    const response = await axios.put(
        `http://localhost:8080/api/v1/todo/update/${id}`,
        todoData,
        {
            withCredentials: true,
        }
    );

    return response.data;
};