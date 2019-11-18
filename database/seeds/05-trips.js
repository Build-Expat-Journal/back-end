
exports.seed = function(knex) {
  return knex('trips').truncate()
    .then(function () {
      return knex('trips').insert([

        //USER 1:
        {
          title: 'Sunny San Diego', 
          from: '2019-11-16', 
          user_id: 1, 
          country_id: 1,
          image: 'https://images.unsplash.com/photo-1475522003475-eb5f96f1f930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        },
        {
          title: 'Welcome to Brazil', 
          from: '2018-09-02', 
          user_id: 1, 
          country_id: 3,
          image: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
        },

        // USER 2:
        {
          title: 'Germany', 
          from: '2015-06-16', 
          user_id: 2, 
          country_id: 7,
          image: 'https://images.unsplash.com/photo-1572811298995-74b11ebea596?ixlib=rb-1.2.1&auto=format&fit=crop&w=1110&q=80'
        },
        {
          title: 'South Korea', 
          from: '2016-07-25', 
          user_id: 2, 
          country_id: 8,
          image: 'https://images.unsplash.com/photo-1571037697753-e796f324bbd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
        },
        {
          title: 'American North', 
          from: '2017-05-20', 
          user_id: 2, 
          country_id: 1,
          image: 'https://images.unsplash.com/photo-1512668023544-749964af467a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        },

        //USER 3:
        {
          title: 'Meditteranean Cruise', 
          from: '2019-01-01', 
          user_id: 3, 
          country_id: [5, 6],
          image: 'https://images.unsplash.com/photo-1536506720721-329ebf764c07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=652&q=80'
        },
        {
          title: 'City of Love', 
          from: '2018-11-15', 
          user_id: 3, 
          country_id: 11,
          image: 'https://images.unsplash.com/photo-1485199433301-8b7102e86995?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1080&q=80'
        },
        {
          title: 'Viva Mexico!', 
          from: '2018-02-09', 
          user_id: 3, 
          country_id: 2,
          image: 'https://images.unsplash.com/photo-1508642054-5e6cade8ff13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1092&q=80'
        },

      ]);
    });
};
