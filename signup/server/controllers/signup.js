const signup = require("../models/Schemas");

const savesignup = (app) => {
  app.post("/signup", async (req, res) => {
    try {
      let { name, surname, password} = req.body;
      let signup = new signup({
        name,
        surname,
        password,
     
      });

      const signupSave = await signup.save();
      res.send({
        message: "Successfully Saved",
        signupSave,
      });
    } catch (error) {
      console.error(error);
      res.status(404).send({ message: 'Error saving user details' });
    }
  });

  app.get("/signup", async (req, res) => {
    try {
      const findsignup= await signup.find();
      res.send(findsignup);
    } catch (error) {
      console.error(error);
     
    }
  });

  app.get("/users/:id", async (req, res) => {
    try {
      const findsignup = await signup.findById(req.body.id);
      res.send(findsignup);
    } catch (error) {
      console.log({ message: "Get Error" });
    }
  });

}

module.exports = savesignup;