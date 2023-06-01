function adminsPageViews(req, res) {
    const data = {
        title: 'Админ-панель',
        users: [
          { name: 'Пользователь 1', email: 'user1@example.com' },
          { name: 'Пользователь 2', email: 'user2@example.com' },
          { name: 'Пользователь 3', email: 'user3@example.com' }
        ]
      };
      res.render('test', data);
}

module.exports = {adminsPageViews}