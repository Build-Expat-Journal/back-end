
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {
          name: 'user', 
          username: 'user', 
          password: 'user', 
          current_location: 'California', 
          profile_img: 'https://cdn.stocksnap.io/img-thumbs/960w/VZTYVVUYZB.jpg'
        },
        {
          name: 'Gunter', 
          username: 'gunter', 
          password: 'gunter', 
          current_location: 'Iceland', 
          profile_img: 'https://cdn.stocksnap.io/img-thumbs/960w/OSICAYZDWA.jpg'
        },
        {
          name: 'Lola', 
          username: 'lola', 
          password: 'lola', 
          current_location: 'Nápoles, Italia', 
          profile_img: 'https://images.unsplash.com/photo-1466838931486-92f3b5ff31a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1187&q=80'
        },
      ]);
    });
};
