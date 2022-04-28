const authRoute = require("./user.route.");
const inforRoute = require("./infomation.route");
const profile_user = require("./profile.route");

module.exports = (app) => {
  app.get("/", function (req, res) {
    res.send({
      message: "Our first endpoint",
    });
  });

  app.use("/auth", authRoute);
  app.use("/information", inforRoute);
  app.use("/profile", profile_user);
};
