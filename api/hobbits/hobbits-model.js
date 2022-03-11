const db = require('../../data/dbConfig.js')

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
}

function getAll() {
  return db('hobbits')
}

function getById(id) {
  return db('hobbits').where('id', id).first()
}

async function insert(hobbit) {
  return db('hobbits').insert(hobbit).then(([id]) => {
    return getById(id)
  })
}

async function update(id, changes) { //eslint-disable-line
  return null
}

function remove(id) { //eslint-disable-line
  return null
}
