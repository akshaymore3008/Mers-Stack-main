const Users = require("../models/users.models");

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, mobileNo, age } = req.body;

    const UsersData = await Users.create({
      name,
      email,
      mobileNo,
      age,
    });

    res.status(201).json({ data: UsersData, message: " created User" });
  } catch (error) {
    console.log(error);
  }
};
const getUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    res.status(201).json({ data: allUsers, message: " Get All Users data" });
  } catch (error) {
    console.log(error);
  }
};
const deletUser = async (req, res) => {
  try {
    const { UserId } = req.query;

    console.log(UserId, "UserId");

    if (!UserId) {
      return res.status(400).json({ message: "User ID is required" });
    }
    // Find the user by ID and delete it

    const UsersData = await Users.findByIdAndDelete(UserId);
    res.status(201).json({ message: "User deleted" });
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async (req, res) => {
  try {
    const { UserId } = req.query;
    const { name, email, mobileNo, age } = req.body;
   await Users.findByIdAndUpdate(UserId,{ name, email, mobileNo, age })
   
     

    res.status(201).json({ message: "User updated" });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createUser, getUsers, deletUser, updateUser };
