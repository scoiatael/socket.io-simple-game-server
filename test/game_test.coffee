'use strict'

assert = require 'assert'
game = require '../lib/game'

describe 'game', ->
  it 'must be awesome', ->
    assert (typeof game), 'function'
