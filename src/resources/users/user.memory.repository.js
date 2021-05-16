const User = require('./user.model');
const tasksRepo = require('../tasks/task.memory.repository');

const USERS = [{
  id: "4cff2d17-a18f-48f7-8975-b1a91db78879",
  name: "string",
  login: "string",
  password: "string",
},
{
  id: "a6ec866c-eb51-48ac-ba59-0224e355e716",
  name: "user",
  login: "user",
  password: "user",
}]

const getAll = async () => USERS;

const createUser = async (data) => {
  const user = new User({
    name: data.name,
    login: data.login,
    password: data.password
  })
  USERS.push(user)
  return user;
};
const getUser = async (data) => USERS.find(i => i.id === data);
const setUser = async (userId, data) => {
  const index = USERS.findIndex(i => i.id===userId)
  USERS[index].name = data.name
  USERS[index].login = data.login
  USERS[index].password = data.password
  return  USERS[index]
};
const deleteUser = async (userId) => {
  const index = USERS.findIndex(i => i.id===userId)
  const user = USERS[index]
  USERS.splice(index,1)
  tasksRepo.userDelete(userId)
  return user
};


module.exports = { getAll, createUser, getUser, setUser, deleteUser };
