
exports.seed = function(knex) {
  return knex('posts').truncate()
    .then(function () {
      return knex('posts').insert([
        //USER 1:
        {
          title: 'SD Downtown', 
          date: '2015-08-21', 
          user_id: 1,
          city_id: 1,
          country_id: 1,
          content: 'The commercials did not lie. I swear everyone DOES surf, do yoga and eat healthy.',
          image: 'https://images.unsplash.com/photo-1475522003475-eb5f96f1f930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        }, 
        {
          title: 'Oceanside Pier', 
          date: '2015-08-21', 
          user_id: 1,
          city_id: 1,
          country_id: 1,
          content: 'Rode bikes down to the pier and watched the fishermen there. One caught an octopus!'
        }, 
        {
          title: 'The Perfect Acai', 
          date: '2017-04-02', 
          user_id: 1,
          city_id: 7,
          country_id: 3,
          content: 'I finally learned it\'s pronounced ah-sa-EE.', 
          image: 'https://images.unsplash.com/photo-1525125445665-5c8f38151ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
        {
          date: '2017-04-02', 
          user_id: 1,
          city_id: 7,
          country_id: 3,
          image: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
        },

        // USER 2:
        {
          title: 'German Auto Confress', 
          date: '2017-04-02', 
          user_id: 2, 
          city_id: 10,
          country_id: 7,
          content: 'First day of the auto show started with beer.',
          image: 'https://images.unsplash.com/photo-1572811298995-74b11ebea596?ixlib=rb-1.2.1&auto=format&fit=crop&w=1110&q=80'
        },
        {
          date: '2017-04-03', 
          user_id: 2, 
          city_id: 10,
          country_id: 7,
          image: 'https://images.unsplash.com/photo-1548673578-c5ee8bafdaec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80'
        },
        {
          title: 'Hyundai Auto Confress', 
          date: '2017-05-15', 
          user_id: 2, 
          city_id: 11,
          country_id: 8,
          content: 'Everything is sleek, clean and modern in design. Highly sophisticated and stoic.'
        },
        {
          title: '4x4 Mountain Test: Day 1', 
          date: '2017-06-30', 
          user_id: 2, 
          city_id: 2,
          country_id: 1, 
          content: 'We start at the base of the mountain, five different trucks.',
          image: 'https://images.unsplash.com/photo-1512668023544-749964af467a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        },
        {
          title: '4x4 Mountain Test: Day 2', 
          date: '2017-06-30',
          user_id: 2, 
          city_id: 2,
          country_id: 1, 
          content: 'The second day we were faced with 3ft deep ruts, and the snow was coming down harder.',
          image: 'https://images.unsplash.com/photo-1546998557-f4da4a981c78?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },


        //USER 3:
        {
          title: 'So many beaches', 
          date: '2017-04-02', 
          user_id: 3,
          city_id: 8,
          country_id: 5, 
          content: 'There is a reminiscent feeling of antiquity as I gaze upong the beaches and cliffs and retro sunglasses...',
          image: 'https://images.unsplash.com/photo-1536506720721-329ebf764c07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80'
        },
        {
          title: '', 
          date: '2017-04-02', 
          user_id: 3,
          city_id: 9, 
          country_id: 6, 
          image: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80'
        },
        {
          title: 'City of Love', 
          date: '2018-11-17', 
          user_id: 3,
          city_id: 14,
          country_id: 11, 
          content: 'Oh my gosh, fresh bread and coffee is the BEST thing in the WOLRD.', 
          image: 'https://images.unsplash.com/photo-1565252556328-92ee4a9a0983?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
        {
          title: 'Mexican Folk Art', 
          date: '2017-04-02', 
          user_id: 3,
          city_id: 5, 
          country_id: 2,
          content: 'So down this little alley we came to a huge plaza of artists and vendors. Vibrant colors everywhere!',
          image: 'https://images.unsplash.com/photo-1508642054-5e6cade8ff13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1092&q=80'
        },
        {
          title: '', 
          date: '2017-04-02', 
          user_id: 3,
          city_id: 5, 
          country_id: 2, 
          content: 'https://images.unsplash.com/photo-1536266305399-b367feb671f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },

      ]);
    });
};
