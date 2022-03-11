exports.seed = function(knex, Promise) { //eslint-disable-line
  // Deletes ALL existing entries and resets ids
  return knex('hobbits')
    .truncate()
    .then(function() {
      return knex('hobbits').insert([
        { name: 'sam' },
        { name: 'frodo' },
        { name: 'pippin' },
        { name: 'merry' },
      ]);
    });
};
