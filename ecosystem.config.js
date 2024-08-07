module.exports = {
    apps: [
      {
        name: "back-peach",
        script: "./back-end/dist/bin/server.js",
        exec_mode: "cluster",
        instances: 1,
        env: {
          PORT: 3000,
          AWS_ACCESSKEY: "",
          AWS_SECRETKEY: "",
        },
      },
    ],
};