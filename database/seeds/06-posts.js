
exports.seed = function(knex) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        //USER 1:
        {
          title: 'SD Downtown', 
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
        {
          title: 'The Perfect Acai', 
          date: '2017-04-02', 
          trip_id: 2, 
          content: 'I finally learned it\'s pronounced ah-sa-EE.', 
          image: 'https://images.unsplash.com/photo-1525125445665-5c8f38151ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },

        // USER 2:
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
        {
          title: 'Hyundai Auto Confress', 
          date: '2017-05-15', 
          trip_id: 4, 
          content: 'Everything is sleek, clean and modern in design. Highly sophisticated and stoic.'
        },
        {
          title: '4x4 Mountain Test: Day 1', 
          date: '2017-06-30', 
          trip_id: 5, 
          content: 'We start at the base of the mountain, five different trucks.'
        },
        {
          title: '4x4 Mountain Test: Day 2', 
          date: '2017-06-30', 
          trip_id: 5, 
          content: 'The second day we were faced with 3ft deep ruts, and the snow was coming down harder.',
          image: 'https://images.unsplash.com/photo-1546998557-f4da4a981c78?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        //USER 3:
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
        {
          title: '', 
          date: '2018-11-17', 
          trip_id: 7, 
          content: 'Oh my gosh, fresh bread and coffee is the BEST thing in the WOLRD.', 
          image: 'https://images.unsplash.com/photo-1565252556328-92ee4a9a0983?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        },
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

      ]);
    });
};
