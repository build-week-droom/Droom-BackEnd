exports.seed = knex => knex('messages')
  .del()
  .then(() => knex('messages').insert([
    {
      matchId: 1,
      sentBy: 1,
      message:
            'With reference to your recent Job Posting, I want to enquire when the Interview could be?',
    },
    {
      matchId: 1,
      sentBy: 6,
      message: 'Hey, Thanks for contacting us, you can come in anytime',
    },
    {
      matchId: 3,
      sentBy: 10,
      message: 'Hello, what do you think about starting a career wih us?',
    },
    {
      matchId: 3,
      sentBy: 3,
      message: "Wow, I'd love that! We can setup a chat sometime",
    },
    {
      matchId: 6,
      sentBy: 4,
      message:
            'Hello, Can I get more Inform on you job posting for a Delivery Driver. thank you.',
    },
    {
      matchId: 1,
      sentBy: 1,
      message:
            'Thanks for the opportunity, is Monday next week fine by you? ',
    },
  ]));
