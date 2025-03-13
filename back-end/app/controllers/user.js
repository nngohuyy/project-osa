const UserModel = require('../models/user');

exports.create = async (request, response) => {
  try {
    const {
      username,
      name,
      email,
      password,
      role
    } = request.body;

    if (!username || !name || !email || !password) {
      return response.status(400).send({ message: "User content cannot be empty." });
    }

    const user = new UserModel({
      username,
      name,
      email,
      password,
      role,
    });

    const data = await user.save();
    response.status(201).send({
      message: "User created successfully.",
      data,
    });

  } catch (error) {
    response.status(500).send({
      message: error.message || "Some error occurred while creating the user.",
    });
  }
}