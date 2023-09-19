module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      policies: [],
    },
  },

  {
    method: "GET",
    path: "/find",
    handler: "users.find",
    config: {
      policies: [],
    },
  },

  {
    method: "POST",
    path: "/create",
    handler: "users.create",
    config: {
      policies: [],
    },
  },

  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "users.delete",
    config: {
      policies: [],
    },
  },
];
