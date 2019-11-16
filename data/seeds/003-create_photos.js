
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        {trip_id: 1, user_id: 1, img_caption: 'the colosseum', img_url: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        {trip_id: 2, user_id: 2, img_caption: 'mountains', img_url: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
        {trip_id: 3, user_id: 3, img_caption: 'vail', img_url: 'https://images.unsplash.com/photo-1564880934908-f0edfbfa975e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'},
        {trip_id: 4, user_id: 4, img_caption: 'miami', img_url: 'https://images.unsplash.com/photo-1520716448897-f1cc6b0241ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
      ]);
    });
};
