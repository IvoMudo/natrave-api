import Router from '@koa/router'
import * as user from './app/User/index.js';
import * as game from './app/Game/index.js'
import * as guess from './app/Guess/index.js';

export const router = new Router();

router.post('/user', user.create)
router.get('/login', user.login)
// router.get('/user', user.list)

router.get('/matches', game.list)

router.post('/guess', guess.create)
router.get('/:username', user.list)