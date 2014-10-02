"use strict"

port = 4000

express = require 'express.io'
app = express()
app.http().io()

app.use express.logger 'dev'

app.io.route 'ready', (req) ->
  req.io.respond {
    success: 'ready - ok'
  }

app.use '/', express.static ('./socket.io-simple-game-client/dist')

app.use app.router

module.exports = ->
  app.listen port
  console.log 'Started..'
  console.log "Listening on port #{port}"
