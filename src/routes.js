const express = require("express");
const clientModel = require("./models");
const app = express();

app.post("/add_client", async (request, response) => {
  const user = new clientModel(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/delete_client/:id", async (request, response) => {
  const user = await clientModel.find({ client_id: request.params.id });
  try {
    const clients = await clientModel.findByIdAndDelete(user[0]._id);
    response.send(clients);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/update_blockstatus/:id", async (request, response) => {
  const user = await clientModel.findOne({ client_id: request.params.id });

  try {
    console.log("muskan tatus",user.block_status,!user.block_status);
    const clients = await clientModel.findByIdAndUpdate(user._id, {
      block_status: !user.block_status,
    });
    response.send(clients);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/clients", async (request, response) => {
  const clients = await clientModel.find({});
  try {
    response.send(clients);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
