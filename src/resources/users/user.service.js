const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const createUser = (data) => usersRepo.createUser(data);
const getUser = (data) => usersRepo.getUser(data);
const setUser = (userId, data) => usersRepo.setUser(userId, data);
const deleteUser = (data) => usersRepo.deleteUser(data);

module.exports = { getAll, createUser, getUser, setUser, deleteUser };
