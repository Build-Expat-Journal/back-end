
exports.seed = function(knex) {
  return knex('trips').truncate()
    .then(function () {
      return knex('trips').insert([

        //USER 1:
        {
          title: 'Sunny San Diego', 
          from: '2015-05-24', 
          to: '2019-11-16',
          user_id: 1, 
          country_id: 1,
          image: 'https://images.unsplash.com/photo-1475522003475-eb5f96f1f930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          posts: [
            {
              title: 'TRIPS.JS', 
              date: '2015-08-21', 
              trip_id: 1,
              content: 'The commercials did not lie. I swear everyone DOES surf, do yoga and eat healthy.'
            }, 
            {
              title: 'Oceanside Pier', 
              date: '2015-08-21', 
              trip_id: 1,
              content: 'Rode bikes down to the pier and watched the fishermen there. One caught an octopus!'
            }, 
          ]
        },
        {
          title: 'Welcome to Brazil', 
          from: '2018-09-02', 
          user_id: 1, 
          country_id: 3,
          image: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          posts: [
            {
              title: 'The Perfect Acai', 
              date: '2017-04-02', 
              trip_id: 2, 
              content: 'I finally learned it\'s pronounced ah-sa-EE.', 
              image: 'https://images.unsplash.com/photo-1525125445665-5c8f38151ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
            }
          ],
        },

        // USER 2:
        {
          title: 'Germany', 
          from: '2015-06-16', 
          user_id: 2, 
          country_id: 7,
          image: 'https://images.unsplash.com/photo-1572811298995-74b11ebea596?ixlib=rb-1.2.1&auto=format&fit=crop&w=1110&q=80',
          posts: [
            {
              title: 'German Auto Confress', 
              date: '2017-04-02', 
              trip_id: 3, 
              content: 'First day of the auto show started with beer.'
            },
            {
              title: '', 
              date: '2017-04-03', 
              trip_id: 3, 
              image: 'https://images.unsplash.com/photo-1548673578-c5ee8bafdaec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1118&q=80'
            },
          ]
        },
        {
          title: 'South Korea', 
          from: '2016-07-25', 
          to: '2016-10-25',
          user_id: 2, 
          country_id: 8,
          image: 'https://images.unsplash.com/photo-1571037697753-e796f324bbd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
          posts: [
            {
              title: 'Hyundai Auto Confress', 
              date: '2017-05-15', 
              trip_id: 4, 
              content: 'Everything is sleek, clean and modern in design. Highly sophisticated and stoic.'
            },
          ]
        },
        {
          title: 'American North', 
          from: '2017-05-20', 
          user_id: 2, 
          country_id: 1,
          image: 'https://images.unsplash.com/photo-1512668023544-749964af467a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          posts: [1, 2]
        },

        //USER 3:
        {
          title: 'Meditteranean Cruise', 
          from: '2019-01-01', 
          user_id: 3, 
          country_id: [5, 6],
          image: 'https://images.unsplash.com/photo-1536506720721-329ebf764c07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80',
          posts: [
            {
              title: 'So many beaches', 
              date: '2017-04-02', 
              trip_id: 6, 
              content: 'There is a reminiscent feeling of antiquity as I gaze upong the beaches and cliffs and retro sunglasses...'
            },
            {
              title: '', 
              date: '2017-04-02', 
              trip_id: 6, 
              image: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80'
            },
          ]
        },
        {
          title: 'City of Love', 
          from: '2018-11-15', 
          to: '2019-09-03',
          user_id: 3, 
          country_id: 11,
          image: 'https://images.unsplash.com/photo-1485199433301-8b7102e86995?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80',
          posts: [
            {
              title: '', 
              date: '2018-11-17', 
              trip_id: 7, 
              content: 'Oh my gosh, fresh bread and coffee is the BEST thing in the WOLRD.', 
              image: 'https://images.unsplash.com/photo-1565252556328-92ee4a9a0983?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
            },
          ]
        },
        {
          title: 'Viva Mexico!', 
          from: '2018-02-09', 
          user_id: 3, 
          country_id: 2,
          image: 'https://images.unsplash.com/photo-1508642054-5e6cade8ff13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1092&q=80',
          posts: [
            {
              title: 'Folk Art', 
              date: '2017-04-02', 
              trip_id: 8, 
              content: 'So down this little alley we came to a huge plaza of artists and vendors. Vibrant colors everywhere!'
            },
            {
              title: '', 
              date: '2017-04-02', 
              trip_id: 8, 
              content: 'https://images.unsplash.com/photo-1536266305399-b367feb671f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
            },
          ]
        },

      ]);
    });
};
