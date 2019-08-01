const Messages = require('./messagesModel');

async function getMessages(req, res) {
  const { id } = req.params;
  try {
    const messages = await Messages.get(id);
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function sendMessage(req, res) {
  const {
    params,
    authUser,
    body: { message },
  } = req;
  try {
    const [newMessage] = await Messages.add(params.id, authUser.id, message);
    return res.status(201).json(newMessage);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { getMessages, sendMessage };
