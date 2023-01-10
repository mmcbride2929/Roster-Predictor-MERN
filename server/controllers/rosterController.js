const Player = require('../models/playerModel.js')

const createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body)
    res.status(200).json({ player })
    console.log(`${player} has been added to the roster`)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed, there was an error' })
  }
}

const getPlayers = async (req, res) => {
  try {
    const players = await Player.find()
    res.status(200).send(players)
  } catch (error) {
    res.status(500).json({ msg: 'fetch failed, there was an error' })
  }
}

module.exports = { createPlayer, getPlayers }
