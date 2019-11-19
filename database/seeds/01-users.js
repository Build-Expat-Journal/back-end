
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {
          name: 'user', 
          username: 'user', 
          password: 'user', 
          email: 'user@example.com',
          current_location: 'California', 
          profile_img: 'https://cdn.stocksnap.io/img-thumbs/960w/VZTYVVUYZB.jpg',
          trips: [
            {
              id: 1,
              title: 'Sunny San Diego', 
              from: '2015-05-24', 
              to: '2019-11-16',
              user_id: 1, 
              country_id: 1,
              image: 'https://images.unsplash.com/photo-1475522003475-eb5f96f1f930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
              posts: [
                {
                  id: 1,
                  title: 'SoCal Vibes', 
                  date: '2015-08-21', 
                  trip_id: 1,
                  content: 'The commercials did not lie. I swear everyone DOES surf, do yoga and eat healthy.'
                }, 
                {
                  id: 2,
                  title: 'Oceanside Pier', 
                  date: '2015-08-21', 
                  trip_id: 1,
                  content: 'Rode bikes down to the pier and watched the fishermen there. One caught an octopus!'
                }, 
              ]
            },
          ]
        },


        {
          name: 'Gunter', 
          username: 'gunter', 
          email: 'gunter_auto@gmail.com',
          password: 'gunter', 
          current_location: 'Iceland', 
          profile_img: 'https://cdn.stocksnap.io/img-thumbs/960w/OSICAYZDWA.jpg'
        },
        {
          name: 'Lola', 
          username: 'lola', 
          email: 'lolarose@roseblog.com',
          password: 'lola', 
          current_location: 'Nápoles, Italia', 
          profile_img: 'https://images.unsplash.com/photo-1466838931486-92f3b5ff31a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1187&q=80'
        },
      ]);
    });
};
