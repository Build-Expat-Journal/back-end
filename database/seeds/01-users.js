
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          first_name: 'user', 
          last_name: 'user', 
          username: 'user', 
          password: 'user', 
          email: 'user@example.com',
          city_id: 1,
          profile_img: 'https://cdn.stocksnap.io/img-thumbs/960w/VZTYVVUYZB.jpg',
        },


        {
          first_name: 'Gunter', 
          last_name: 'Grimwold', 
          username: 'gunter', 
          email: 'gunter_auto@gmail.com',
          password: 'gunter', 
          city_id: 10, 
          profile_img: 'https://cdn.stocksnap.io/img-thumbs/960w/OSICAYZDWA.jpg'
        },
        {
          first_name: 'Lola', 
          last_name: 'Lily', 
          username: 'lola', 
          email: 'lolarose@roseblog.com',
          password: 'lola', 
          city_id: 7, 
          profile_img: 'https://images.unsplash.com/photo-1466838931486-92f3b5ff31a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1187&q=80'
        },
      ]);
    });
};
