const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@Ramdaniofficial/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))

require('./index.js')
nocache('./index.js', module => console.log(`${module} telah di update!`))

const starts = async (Ramdani = new WAConnection()) => {
    Ramdani.logger.level = 'warn'
    Ramdani.version = [2,2143,3]
    Ramdani.browserDescription = ['Yandex','Yandex', '3.0']
    console.log(banner)
    Ramdani.on('qr', () => {
        console.log(color('[!]','red'), color('SCAN OM/TANTE, EXPIRED DALAM 20 DETIK'))
    })
    Ramdani.on('credentials-updated', () => {
		fs.writeFileSync('./run/session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
      const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await Ramdani.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    Ramdani.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./session.json') && Ramdani.loadAuthInfo('./session.json')
    Ramdani.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    Ramdani.on('open', () => {
        success('2', 'Terhubung')
    })
    await Ramdani.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(Ramdani.base64EncodedAuthInfo(), null, '\t'))

    Ramdani.on('chat-update', async (message) => {
        require('./index.js')(Ramdani, message)
    })
Ramdani.on("group-participants-update", async (anu) => {
    try {
      groupMet = await Ramdani.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await Ramdani.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await Ramdani.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(Ramdani.user.jid)) {
        Ramdani.sendMessage(anu.jid, "Halo Bang", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(Ramdani.user.jid)) {
             const mdata = await Ramdani.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await Ramdani.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await Ramdani.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = Ramdani.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Jakarta').format("hh:mm")
                teks = `ʜᴇʟʟᴏ @${num.split('@')[0]}, \nᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴍʏ ɢʀᴜᴘ ${mdata.subject}\nɪɴᴛʀᴏ ɴᴇᴡ ᴍᴇᴍ\n┌ > ɴᴀᴍᴀ : \n┌ > ᴀsᴀʟ ᴋᴏᴛᴀ : \n┌ > ᴜsɪᴀ : \n┌ > ɢᴇɴᴅᴇʀ : \n┌ > sᴛᴀᴛᴜs :\nᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sᴜʙsᴄʀɪʙᴇ ʏᴛ ʀᴀᴍᴅᴀɴɪ ᴏғғɪᴄɪᴀʟ\n*https://youtube.com/channel/UCB157jomCne961WzYHpG4ghttps://youtube.com/channel/UCB157jomCne961WzYHpG4gg*`
                tekss = `${time_wel} -  ${time_welc}`
                welcomeBut = [{buttonId:`#`,buttonText:{displayText:'Welcome'},type:1}]
                welcomeButt = { contentText: `${teks} `, footerText: `${tekss}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                Ramdani.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(Ramdani.user.jid)) {
                const mdata = await Ramdani.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await Ramdani.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = Ramdani.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*Byee* 👋 @${num.split('@')[0]}\n*kok out si dex? kena mental?*`
                goodbyeBut = [{buttonId:` `,buttonText:{displayText:'Selamat Tinggal Beban'}, type:1}]
                goodbyeButt = { contentText: `${out}`, footerText: `${time_wel} -  ${time_welc}`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                Ramdani.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                  }
        } catch (e) {
            console.log('Error :', e)
        }
    })
}


/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Sc ini di awasi oleh Ramdani Official')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
