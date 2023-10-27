import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['33744080333', 'SUPER MAN', true],
  ['923477099576', 'SUPER MAN', true], 
  [''] 
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['923477099576','33744080333'] 
global.prems = ['923477099576', '33744080333', '919398758484']
global.allowed = ['923477099576', '33744080333', '19152999993']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '[𝐃𝐀𝟐] 𝐊𝐀𝐊𝐀𝐒𝐇𝐈'
global.premium = 'true'
global.packname = '[𝐃𝐀𝟐] 𝐊𝐀𝐊𝐀𝐒𝐇𝐈' 
global.author = 'null' 
global.menuvid = 'https://telegra.ph/file/3a74a960cb572070a76b2.jpg'
global.igfg = '▢ Follow on Instagram\nhttps:' 
global.dygp = 'https://wa.me/+33744080333'
global.fgsc = 'https://github.com' 
global.fgyt = 'https://youtube.com'
global.fgpyp = 'https://youtube.com
global.fglog = 'https://telegra.ph/file/3a74a960cb572070a76b2.jpg' 
global.thumb = fs.readFileSync('https://telegra.ph/file/3a74a960cb572070a76b2.jpg')


global.wait = '*⌛ _Dowlonding..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
