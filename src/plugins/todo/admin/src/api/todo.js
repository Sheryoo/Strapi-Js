import { request } from "@strapi/helper-plugin";

const todoReqs = {
  getAllTodos: async () => {
    return await request("/todo/find", {
      method: "GET",
    });
  },

  addTodo: async (data) => {
    return await request("/todo/create", {
      method: "POST",
      body: { data: data },
    });
  },

  toggleTodo: async (id) => {
    return await request(`/todo/toggle/${id}`, {
      method: "PUT",
    });
  },

  editTodo: async (id, data) => {
    return await request(`/todo/update/${id}`, {
      method: "PUT",
      body: { data: data },
    });
  },
  deleteTodo: async (id) => {
    return await request(`/todo/delete/${id}`, {
      method: "Delete",
    });
  },
};
export default todoReqs;
