const router = require('express').Router({mergeParams: true})
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/:taskId').get(async (req, res) => {
  const { boardId } = req.params;
  const { taskId } = req.params
  const task = await tasksService.getTask(boardId, taskId);
  res.json(task)
});
router.route('/').post(async (req, res) => {
  const { boardId } = req.params;
  const {body} = req
  const task = await tasksService.createTask(boardId, body);
  res.json(task)
});
router.route('/:taskId').put(async (req, res) => {
  const { boardId } = req.params;
  const { taskId } = req.params
  const {body} = req
  const task = await tasksService.setTask(boardId, taskId, body);
  res.json(task)
});
router.route('/:taskId').delete(async (req, res) => {
  const { boardId } = req.params;
  const { taskId } = req.params
  const task = await tasksService.deleteTask(boardId, taskId);
  res.json(task)
});

module.exports = router;
