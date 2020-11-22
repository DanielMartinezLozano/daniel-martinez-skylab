const { Router } = require('express');
const githubController = require('../controllers/githubController');

function githubRouter() {
  const router = Router();
  const github = githubController();

  router.route('/')
    .all(github.allMiddleware)
    .get(github.getGithubMethod);

  return router;
}

module.exports = githubRouter;
