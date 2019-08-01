const messagesRouter = require('express').Router();

const { getMessages, sendMessage } = require('./messagesController');
const validate = require('../../helpers/validate');
const messageSchema = require('./messageSchema');
const { checkIfMatch } = require('./messagesMiddleware');

messagesRouter.get('/:id', checkIfMatch, getMessages);
messagesRouter.post('/:id', checkIfMatch, validate(messageSchema), sendMessage);

module.exports = messagesRouter;
