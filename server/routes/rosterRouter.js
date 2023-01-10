const express = require('express')
const router = express.Router()

const {
  createPlayer,
  getPlayers,
} = require('../controllers/rosterController.js')

// posting and fetching players
router.route('/').post(createPlayer).get(getPlayers)

module.exports = router
