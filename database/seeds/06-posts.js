
exports.seed = function(knex) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        //USER 1:
        {title: 'Day One in Downtown', date: '2015-08-21', created_at: '', trip_id: 1},
        {title: 'The Perfect Acai', date: '2017-04-02', created_at: '', trip_id: 2, content: 'I finally learned it\'s pronounced ah-sa-EE.', image: 'https://images.unsplash.com/photo-1525125445665-5c8f38151ba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'},

        //USER 2:
        {title: 'German Auto Confress', date: '2017-04-02', created_at: '', trip_id: 3, content: 'First day of the auto show started with...'},
        {title: 'Hyundai Auto Confress', date: '2017-05-15', created_at: '', trip_id: 4, content: 'Everything is sleek, clean and modern.'},
        {title: '4x4 Testing Mountain', date: '2017-06-30', created_at: '', trip_id: 5, content: 'We start at the base of the mountain, five different trucks.'},
        {title: '4x4 Testing Mountain', date: '2017-06-30', created_at: '', trip_id: 5, content: 'The second day we were faced with 3ft deep ruts, and the snow was coming down harder.'},

        //USER 3:
        {title: 'So many beaches', date: '2017-04-02', created_at: '', trip_id: 6, content: 'There is a reminiscent feeling of antiquity as I gaze upong the beaches and cliffs and retro sunglasses...'},
        {title: 'Folk Art', date: '', created_at: '', trip_id: 7, content: 'Oh my gosh, fresh bread and coffee is the BEST thing in the WOLRD.', image: 'https://images.unsplash.com/photo-1565252556328-92ee4a9a0983?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'},
        {title: 'Folk Art', date: '2017-04-02', created_at: '', trip_id: 8, content: 'So down this little alley we came to a huge plaza of artists and vendors. Vibrant colors everywhere!'},

      ]);
    });
};
