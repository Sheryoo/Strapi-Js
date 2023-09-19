import { request } from "@strapi/helper-plugin";

const userReqs = {
  getAllUsers: async () => {
    return await request("/usernames/find", {
      method: "GET",
    });
  },

  addUser: async (data) => {
    return await request("/usernames/create", {
      method: "POST",
      body: { data: data },
    });
  },

  deleteUser: async (id) => {
    return await request(`/usernames/delete/${id}`, {
      method: "Delete",
    });
  },
};
export default userReqs;
