const options = ['r', 's', 'p']
const wins = ['rs', 'pr', 'sp']
const losses = ['sr', 'rp', 'ps']

function round (me, cpu) {
  if (wins.indexOf(`${me}${cpu}`) !== -1) {
    return 1
  }
  if (losses.indexOf(`${me}${cpu}`) !== -1) {
    return -1
  }

  return 0
}

function cpuRandom () {
  return options[Math.round(Math.random() * 2)]
}

module.exports = {
  round,
  cpuRandom
}