const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@Ramdaniofficial/baileys")
const fs = require('fs')
const brainly = require('brainly-scraper')
const crypto = require('crypto')
const axios = require('axios')
const request = require('request')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const Exif = require('./lib/exif')
const exif = new Exif() 
const yts = require( 'yt-search')
const hx = require('hxz-api')
const { exec } = require('child_process')
//LIB
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
//DATABASE
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
const _user = JSON.parse(fs.readFileSync('./database/user.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
//FOTO
const imgmenu = fs.readFileSync("./media/foto/menu.jpg"); 
const thumb = fs.readFileSync("./media/foto/thumb.jpg");
const qris = fs.readFileSync("./media/foto/qris.jpg");
//AUDIO
const audiomenu = fs.readFileSync("./media/audio/menu.mp3"); 
const audio = fs.readFileSync("./media/audio/audio.mp3"); 
//VIDEO
const video = fs.readFileSync("./media/video/video.mp4"); 
//STICKER
const sticker = fs.readFileSync("./media/sticker/sticker.webp"); 
//APIKEY
//no apikey dong:v
//TRUE AND FALSE
autoread = true
autorespond = true
public = true
self = false
//SETTINGS
const settings = JSON.parse(fs.readFileSync('./setting.json'))
namabot = settings.BotName
nomorbot = settings.BotNumber
namaowner = settings.OwnerName
nomorowner = settings.OwnerNumber
//CONFIG
const donate = JSON.parse(fs.readFileSync('./donate.json'))
gopay = donate.Gopay
dana = donate.Dana
ovo = donate.Ovo
pulsa = donate.Pulsa
linkqris = donate.Urlqris
saweria = donate.Saweria
linktree = donate.Linktree
//INFO BOT
const { rules } = require('./src/rules')
const { infobot } = require('./src/infobot')
//GRUP BOT
const { grupbot } = require('./src/grupbot')  
//break
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {

  let position = null;
  Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return scommand[position].chats;
  }
};  
const jadiUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _user.push(obj)
            fs.writeFileSync('./database/user.json', JSON.stringify(_user))
        }
        const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const cekUser = (sender) => {
let status = false
Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
status = true
}
})
return status
}

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/// By Ramdani Official 


module.exports = Ramdani = async (Ramdani, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '.' 
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
//Respon
			mess = {
				daftar: `─ 「 *NOT REGISTERED* 」 ─\n\n_*ANDA BELUM TERDAFTAR DI DATABASE BOT KETIK ${prefix}verify UNTUK DAFTAR*_`,
				wait: 'Tunggu sebentar dekks....',
				banned: 'Luh dah di banned awoakawok, chat owner untuk di ruqyah',
				success: 'Nih deks jan lupa subscribe https://youtube.com/channel/UCB157jomCne961WzYHpG4gg',
				error: {
			    stick: 'Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker',
			    link: 'Luh ngasih link apaan tolol'
				},
				only: {
					group: 'FITUR INI HANYA BISA DIGUNAKAN UNTUK GRUP!!! ❌',
					premium: 'LUH BUKAN USER PREMIUM, CHAT OWNER UNTUK DI RUQYAH!!!',
					ownerG: 'FITUR INI HANYA BISA DIGUNAKAN OLEH OWNER GRUP!!! ❌',
					ownerB: 'FITUR INI HANYA BISA DIGUNAKAN OLEH OWNER BOT!!! ❌',
					admin: 'FITUR INI HANYA BISA DIGUNAKAN OLEH ADMIN GRUP!!! ❌',
					Badmin: 'FITUR INI HANYA BISA DIGUNAKAN KETIKA BOT MENJADI ADMIN!!! ❌'
				}
			}
			
			const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
        }

			const botNumber = Ramdani.user.jid
			const ownerNumber = [`${nomorowner}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = Ramdani.contacts[sender] != undefined ? Ramdani.contacts[sender].vname || Ramdani.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await Ramdani.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isUser = cekUser(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        //${jam} ${hari} ${tanggal} ${bulan} ${tahun}
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        //${jam} ${timeWib}
        const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
			Ramdani.sendMessage(from, teks, text, { thumbnail: thumb, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `New Base By Ramdani Official`,body:"© Creator By Ramdani Official",previewType:"PHOTO",thumbnail:thumb,sourceUrl:`https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`}}})
		}
		const reply2 = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
			const sendMess = (hehe, teks) => {
				Ramdani.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Ramdani.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Ramdani.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu terdeteksi mengimkan link group, maaf saya harus ngeluarin anda :(`)
				setTimeout(() => {
				Ramdani.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			   }
			            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;
           
//FAKE TROLI

           const fakedoc = {key: {fromMe: false, participant: `${nomorowner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanFakereply}`, pageCount: 0, fileName: `RamdaniBot`, jpegThumbnail: fs.readFileSync(`./media/foto/thumb.jpg`)}}}
			const ftoko = { key: { fromMe: false, 
			             participant: `0@s.whatsapp.net`, ...(from ? { 
			             remoteJid: 'status@broadcast' } : {}) }, 
			             message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./media/foto/thumb.jpg') }, 'title': `${namabot}\nRp. 10.000`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const ftrol = {key : {fromMe:false, 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `New Base By Ramdani Official \nRp. 999.999.999`, 
                            orderTitle: `© Creator By Ramdani Official`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const fhidetag = {key : {fromMe:false, 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `New Base By Ramdani Official`, 
                            orderTitle: `© Creator By Ramdani Official`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftroli = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: { 
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `New Base By Ramdani Official`, 
                            orderTitle: `© Creator By Ramdani Official`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
			const fakeitem = (teks) => {
           Ramdani.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false, 
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"0-1604595598@g.us" }: {})
                           },message:{"orderMessage":{
                                  "orderId":"4302154426574187",
                                  "thumbnail":fs.readFileSync("./media/foto/thumb.jpg"),
                                  "itemCount":999999999,
                                  "status":"INQUIRY",
                                  "surface":"CATALOG",
                                  "message": `${namabot}\nRp. 999.999.999.999`,
                                  "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}


	Ramdani.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Ramdani.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
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
    Ramdani.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: mek})
  }
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Ramdani.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }  
      
      const sendButVideo = async (id, text1, desc1, gam1, but = [], options = {} ) => {
      kma = gam1;
      mhan = await Ramdani.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted: mek})
    };
        
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               Ramdani.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Ramdani.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
    
    const sendKontak = (from, nomor, nama, org, Ponsel, descBiz = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      Ramdani.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek, caption: nano}
      );
    }; 
    
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = Ramdani.contacts[from] != undefined ? Ramdani.contacts[from].vname || Ramdani.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Bot'; if (!author) author = 'By RamdaniBot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/stickers/${name}.exif`, buffer, (err) => {	
					return `./media/stickers/${name}.exif`	
				})	
	          }
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }       
Ramdani.updatePresence(from, Presence.composing)
if (!public) {
if (!isOwner && !mek.key.fromMe) return
}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night🌃'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon🌉'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon🌆'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon🌇'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night🌃'
 } 
const froxx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `© Creator Ramdani Official`,
                 "title": `© Creator Ramdani Official`,
                 'jpegThumbnail': fs.readFileSync("./media/foto/thumb.jpg"),
                        }
	                  } 
                     }
runi = process.uptime() 
           Ramdani.setStatus(`Ramdani botz Aktif Selama ${(runi)} `).catch((_)=>_);
          settingstatus = new Date() * 1;
const jmn = moment.tz('Asia/Jakarta').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
const fakeText = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: froxx})
}

switch(command) {
	case 'verify':
	case 'daftar':
				const seriTod = bikinSerial(20)
				try {
				ppimg = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				imglu = 'https://mekpa-result.herokuapp.com/bgverify.jpeg' //ubah sesuka kamu, bisa upload di imgbb.com
				veri = sender
				fs.writeFileSync('./database/user.json', JSON.stringify(_user))
				jadiUser(sender, seriTod)
				const kentod = 
`
─── 「 *REGISTERED SUCCESS* 」───
• NAMA : ${pushname}
• NOMOR : ${sender.split('@')[0]}
• SERI : ${seriTod}
• TANGGAL : ${Tanggal}
• PUKUL : ${jam}
`
                let buff = await getBuffer(`${ppimg}`)
                Ramdani.sendMessage(from, buff, MessageType.image, {quoted: mek, caption: kentod, contextInfo: {'mentionedJid': [sender]}})
                break
//TEMPEL FITUR NYA DISINI BWANGG
//BY RAMDANI OFFICIAL
case 'menu':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`• 「 *SILAHKAN PILIH DISINI* 」
• *${prefix}sound >SOUND MENU 1 SAMPAI 60<*
• *${prefix}arrahman*
• *${prefix}sholawat*
• *${prefix}araara*
• *${prefix}baka*
• *${prefix}susu*
• *${prefix}home*
• *${prefix}ngaji*
• *${prefix}ngaji2*
• *${prefix}tilawah*
• *${prefix}yasin*
• *${prefix}ayatkursi2*
• *${prefix}playdate*
• *${prefix}iri*
• *${prefix}pale*
• *${prefix}beautiful*
• *${prefix}menyukaiku*
• *${prefix}hallo*
• *${prefix}magic*
• *${prefix}loosinggame*
• *${prefix}loosinginterest*
• *${prefix}yourskin*
• *${prefix}cutmeoff*
• *${prefix}up*
• *${prefix}wanna*
• *${prefix}sowell*
• *${prefix}lucas*
• *${prefix}allnight*
• *${prefix}aeshtetic*
• *${prefix}aeshtetic2*
• *${prefix}aeshtetic3*
• *${prefix}aeshtetic4*
• *${prefix}sad*
• *${prefix}sad2*
• *${prefix}sad3*
• *${prefix}sad4*
• *${prefix}gettinggold*
• *${prefix}beb*`)
break
                 case 'home':
const home = fs.readFileSync('./media/audio/home.mp3')
Ramdani.sendMessage(from, home, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break  
case 'susu':
const su = fs.readFileSync('./media/audio/susu.mp3')
Ramdani.sendMessage(from, su, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beb':
const beb = fs.readFileSync('./media/audio/syg.mp3')
Ramdani.sendMessage(from, beb, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'gettingold':
const getting = fs.readFileSync('./media/audio/gettingold.mp3')
Ramdani.sendMessage(from, getting, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad':
const sad1 = fs.readFileSync('./media/audio/sad.mp3')
Ramdani.sendMessage(from, sad1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad2':
const sad2 = fs.readFileSync('./media/audio/sad2.mp3')
Ramdani.sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad3':
const sad3 = fs.readFileSync('./media/audio/sad3.mp3')
Ramdani.sendMessage(from, sad3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sad4':
const sad4 = fs.readFileSync('./media/audio/sad4.mp3')
Ramdani.sendMessage(from, sad4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic':
const tetik = fs.readFileSync('./media/audio/aeshtetic.mp3')
Ramdani.sendMessage(from, tetik, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic2':
const tetik2 = fs.readFileSync('./media/audio/aeshtetic2.mp3')
Ramdani.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic3':
const tetik3 = fs.readFileSync('./media/audio/aeshtetic3.mp3')
Ramdani.sendMessage(from, tetik3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'aeshtetic4':
const tetik4 = fs.readFileSync('./media/audio/aeshtetic4.mp3')
Ramdani.sendMessage(from, tetik4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'allnight':
const allnight = fs.readFileSync('./media/audio/allnight.mp3')
Ramdani.sendMessage(from, allnight, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'baka':
const baka = fs.readFileSync('./media/audio/baka.mp3')
Ramdani.sendMessage(from, baka, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'lucas':
const lucas = fs.readFileSync('./media/audio/lucas.mp3')
Ramdani.sendMessage(from, lucas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'araara':
const prii = fs.readFileSync('./media/audio/AraAra.mp3')
Ramdani.sendMessage(from, prii, MessageType.audio, {quoted:mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sowell':
const well = fs.readFileSync('./media/audio/sowell.mp3')
Ramdani.sendMessage(from, well, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'wanna':
const wanna = fs.readFileSync('./media/audio/wanna.mp3')
Ramdani.sendMessage(from, wanna, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'up':
const ups = fs.readFileSync('./media/audio/up.mp3')
Ramdani.sendMessage(from, ups, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yourskin':
const skin = fs.readFileSync('./media/audio/yourskin.mp3')
Ramdani.sendMessage(from, skin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'cutmeoff':
const moff = fs.readFileSync('./media/audio/cutmeoff.mp3')
Ramdani.sendMessage(from, moff, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'beautiful':
const ful = fs.readFileSync('./media/audio/beautiful.mp3')
Ramdani.sendMessage(from, ful, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinggame':
const gam = fs.readFileSync('./media/audio/loosinggame.mp3')
Ramdani.sendMessage(from, gam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'loosinginterest':
const rest = fs.readFileSync('./media/audio/loosinginterest.mp3')
Ramdani.sendMessage(from, rest, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'playdate':
const date = fs.readFileSync('./media/audio/playdate.mp3')
Ramdani.sendMessage(from, date, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'yasin':
yasin = fs.readFileSync('mp3/yasin.mp3')
Ramdani.sendMessage(from, yasin, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'arrahman':
arrahman = fs.readFileSync('mp3/arrahman.mp3')
Ramdani.sendMessage(from, arrahman, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ayatkursi2':
const kursi = fs.readFileSync('./media/audio/ayatkursi2.mp3')
Ramdani.sendMessage(from, kursi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'tilawah':
const tilawah = fs.readFileSync('./media/audio/tilawah.mp3')
Ramdani.sendMessage(from, tilawah, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sholawat':
const nabi = fs.readFileSync('./media/audio/sholawatnabi.mp3')
Ramdani.sendMessage(from, nabi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji':
const ngaji1 = fs.readFileSync('./media/audio/ngaji.mp3')
Ramdani.sendMessage(from, ngaji1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'ngaji2':
const ngaji2 = fs.readFileSync('./media/audio/ngaji2.mp3')
Ramdani.sendMessage(from, ngaji2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'iri':
const irimp3 = fs.readFileSync('./media/audio/iri.mp3');
Ramdani.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pale':
const pa = fs.readFileSync('./media/audio/pale.mp3')
Ramdani.sendMessage(from, pa, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'hallo':
const hallo = fs.readFileSync('./media/audio/hallo.mp3')
Ramdani.sendMessage(from, hallo, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'magic':
const magic = fs.readFileSync('mp3/magic.mp3')
Ramdani.sendMessage(from, magic, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'menyukaiku':
const menyukaiku = fs.readFileSync('mp3/menyukaiku.mp3')
Ramdani.sendMessage(from, menyukaiku, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound':
const soun = fs.readFileSync('./media/audio/sound.mp3')
Ramdani.sendMessage(from, soun, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break 
case 'sound1':
satu = fs.readFileSync('./media/audio/sound1.mp3');
Ramdani.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./media/audio/sound2.mp3');
Ramdani.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./media/audio/sound3.mp3');
Ramdani.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./media/audio/sound4.mp3');
Ramdani.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./media/audio/sound5.mp3');
Ramdani.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./media/audio/sound6.mp3');
Ramdani.sendMessage(from, enam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./media/audio/sound7.mp3');
Ramdani.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break									
case 'sound8':
delapan = fs.readFileSync('./media/audio/sound8.mp3');
Ramdani.sendMessage(from, delapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./media/audio/sound9.mp3');
Ramdani.sendMessage(from, sembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./media/audio/sound10.mp3');
Ramdani.sendMessage(from, sepuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
sebelas = fs.readFileSync('./media/audio/sound11.mp3');
Ramdani.sendMessage(from, sebelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
duabelas = fs.readFileSync('./media/audio/sound12.mp3');
Ramdani.sendMessage(from, duabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
tigabelas = fs.readFileSync('./media/audio/sound13.mp3');
Ramdani.sendMessage(from, tigabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
empatbelas = fs.readFileSync('./media/audio/sound14.mp3');
Ramdani.sendMessage(from, empatbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
limabelas = fs.readFileSync('./media/audio/sound15.mp3');
Ramdani.sendMessage(from, limabelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
enambelas = fs.readFileSync('./media/audio/sound16.mp3');
Ramdani.sendMessage(from, enambelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
tujuhbelas = fs.readFileSync('./media/audio/sound17.mp3');
Ramdani.sendMessage(from, tujuhbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound118':
delapanbelas = fs.readFileSync('./media/audio/sound18.mp3');
Ramdani.sendMessage(from, delapanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
sembilanbelas = fs.readFileSync('./media/audio/sound19.mp3');
Ramdani.sendMessage(from, sembilanbelas, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
duapuluh = fs.readFileSync('./media/audio/sound20.mp3');
Ramdani.sendMessage(from, duapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
duasatu = fs.readFileSync('./media/audio/sound21.mp3');
Ramdani.sendMessage(from, duasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
duadua = fs.readFileSync('./media/audio/sound22.mp3');
Ramdani.sendMessage(from, duadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
duatiga = fs.readFileSync('./media/audio/sound23.mp3');
Ramdani.sendMessage(from, duatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
duaempat = fs.readFileSync('./media/audio/sound24.mp3');
Ramdani.sendMessage(from, duaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
dualima = fs.readFileSync('./media/audio/sound25.mp3');
Ramdani.sendMessage(from, dualima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound26':
duaenam = fs.readFileSync('./media/audio/sound26.mp3');
Ramdani.sendMessage(from, duaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound27':
duatujuh = fs.readFileSync('./media/audio/sound27.mp3');
Ramdani.sendMessage(from, duatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound28':
duadelapan = fs.readFileSync('./media/audio/sound28.mp3');
Ramdani.sendMessage(from, duadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound29':
duasembilan = fs.readFileSync('./media/audio/sound29.mp3');
Ramdani.sendMessage(from, duasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound30':
tigapuluh = fs.readFileSync('./media/audio/sound30.mp3');
Ramdani.sendMessage(from, tigapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound31':
tigasatu = fs.readFileSync('./media/audio/sound31.mp3');
Ramdani.sendMessage(from, tigasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound32':
tigadua = fs.readFileSync('./media/audio/sound32.mp3');
Ramdani.sendMessage(from, tigadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound33':
tigatiga = fs.readFileSync('./media/audio/sound33.mp3');
Ramdani.sendMessage(from, tigatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound34':
tigaempat = fs.readFileSync('./media/audio/sound34.mp3');
Ramdani.sendMessage(from, tigaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./media/audio/sound35.mp3');
Ramdani.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound35':
tigalima = fs.readFileSync('./media/audio/sound35.mp3');
Ramdani.sendMessage(from, tigalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound36':
tigaenam = fs.readFileSync('./media/audio/sound36.mp3');
Ramdani.sendMessage(from, tigaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound37':
tigatujuh = fs.readFileSync('./media/audio/sound37.mp3');
Ramdani.sendMessage(from, tigatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound38':
tigadelapan = fs.readFileSync('./media/audio/sound38.mp3');
Ramdani.sendMessage(from, tigadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound39':
tigasembilan = fs.readFileSync('./media/audio/sound39.mp3');
Ramdani.sendMessage(from, tigasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound40':
empatpuluh = fs.readFileSync('./media/audio/sound40.mp3');
Ramdani.sendMessage(from, empatpuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound41':
empatsatu = fs.readFileSync('./media/audio/sound41.mp3');
Ramdani.sendMessage(from, empatsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound42':
empatdua = fs.readFileSync('./media/audio/sound42.mp3');
Ramdani.sendMessage(from, empatdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound43':
empattiga = fs.readFileSync('./media/audio/sound43.mp3');
Ramdani.sendMessage(from, empattiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound44':
empatempat = fs.readFileSync('./media/audio/sound44.mp3');
Ramdani.sendMessage(from, empatempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound45':
empatlima = fs.readFileSync('./media/audio/sound45.mp3');
Ramdani.sendMessage(from, empatlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound46':
empatenam = fs.readFileSync('./media/audio/sound46.mp3');
Ramdani.sendMessage(from, empatenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound47':
empattujuh = fs.readFileSync('./media/audio/sound47.mp3');
Ramdani.sendMessage(from, empattujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound48':
empatdelapan = fs.readFileSync('./media/audio/sound48.mp3');
Ramdani.sendMessage(from, empatdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound49':
empatsembilan = fs.readFileSync('./media/audio/sound49.mp3');
Ramdani.sendMessage(from, empatsembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound50':
limapuluh = fs.readFileSync('./media/audio/sound50.mp3');
Ramdani.sendMessage(from, limapuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound51':
limasatu = fs.readFileSync('./media/audio/Kecewa.mp3');
Ramdani.sendMessage(from, limasatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound52':
limadua = fs.readFileSync('./media/audio/Jarak.mp3');
Ramdani.sendMessage(from, limadua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound53':
limatiga = fs.readFileSync('./media/audio/Bisa.mp3');
Ramdani.sendMessage(from, limatiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound54':
limaempat = fs.readFileSync('./media/audio/Disini.mp3');
Ramdani.sendMessage(from, limaempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound55':
limalima = fs.readFileSync('./media/audio/Batu.mp3');
Ramdani.sendMessage(from, limalima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'desah':
delapansatu = fs.readFileSync('./media/audio/desahan4.mp3');
Ramdani.sendMessage(from, delapansatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound56':
limaenam = fs.readFileSync('./media/audio/Adanya.mp3');
Ramdani.sendMessage(from, limaenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound57':
limatujuh = fs.readFileSync('./media/audio/Pelangi.mp3');
Ramdani.sendMessage(from, limatujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound58':
limadelapan = fs.readFileSync('./media/audio/sound58.mp3');
Ramdani.sendMessage(from, limadelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound59':
limasembilan = fs.readFileSync('./media/audio/sound59.mp3');
Ramdani.sendMessage(from, limasembilan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound60':
enampuluh = fs.readFileSync('./media/audio/sound60.mp3');
Ramdani.sendMessage(from, enampuluh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound61':
enamsatu = fs.readFileSync('./media/audio/sound61.mp3');
Ramdani.sendMessage(from, enamsatu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound62':
enamdua = fs.readFileSync('./media/audio/sound62.mp3');
Ramdani.sendMessage(from, enamdua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound63':
enamtiga = fs.readFileSync('./media/audio/sound63.mp3');
Ramdani.sendMessage(from, enamtiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound64':
enamempat = fs.readFileSync('./media/audio/sound64.mp3');
Ramdani.sendMessage(from, enamempat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound65':
enamlima = fs.readFileSync('./media/audio/chruch.mp3');
Ramdani.sendMessage(from, enamlima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound66':
enamenam = fs.readFileSync('./media/audio/gemes.mp3');
Ramdani.sendMessage(from, enamenam, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound67':
enamtujuh = fs.readFileSync('./media/audio/hujan.mp3');
Ramdani.sendMessage(from, enamtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'sound68':
enamdelapan = fs.readFileSync('./media/audio/Masih.mp3');
Ramdani.sendMessage(from, enamdelapan, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'donasi':
case 'donate':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`HALLO KAK, MAU DONASI?
• *PAYMENT*
*Gopay:* ${gopay}
*Dana:* ${dana}
*Ovo:* ${ovo}
*Pulsa:* ${pulsa}
*Qris:* ${linkqris}
*Saweria:* ${saweria}
*Linktree:* ${linktree}`)
break
case 'sewabot':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`━━━━━『 *LIST SEWA BOT* 』━━━━━

❏ PERHARI : 1 HARI 2K, 5 HARI 10K 
❏ PERMINGGU : 1MIN. 14K, 2MIN. 28K, 3MIN. 60K,
❏ PERBULAN : 1B. 30K, 2B. 70K, 3B. 140K,
❏ PERTAHUN : 1THN. 350K, 2THN. 700K,
❏ PERMANEN : TIMDAK TERSEDIA!
*minat chat owner*`)
break
case 'buypremium':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`━━━━━『 *LIST PREMIUM* 』━━━━━

❏ PERHARI : 2H. 1K, 5H. 4K, 7H 6K,
❏ PERMINGGU : 1MIN. 6K, 2MIN. 10K, 3MIN. 15K,
❏ PERBULAN : 1B. 18K, 2B. 28K, 3B. 38K,
❏ PERTAHUN : 1THN. 100K
❏ PERMANEN : 150K
*minat chat owner*`)
break
//buysc
case 'buysc':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`_*silahkan hubungi owner jika ingin membeli script bot*_\n_*ketik ${prefix}owner untuk mendapatkan nomor owner*_`)
break
//JADIBOT
case 'jadibot':
case 'jadibotwa':
case 'carajadibot':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`*Jika ingin menjadi bot silahkan kunjungi channel YouTube Ramdani Official*\n*link* : https://youtube.com/channel/UCB157jomCne961WzYHpG4gg`)
break
//SOSMET
//YOUTUBE
case 'youtube':
case 'ytb':
reply(`*nih channel youtube creator, jan lupa subscribe ya*\nhttps://youtube.com/channel/UCB157jomCne961WzYHpG4gg`)
break
//INSTAGRAM
case 'intagram':
case 'ig':
case 'ige':
reply(`*nih Instagram creator, jan lupa follow ya*\nhttps://www.instagram.com/muhammadramdani196453`)
break
//OWNER/CREATOR
//OWNER
case 'owner':
            case 'ownerbot': 
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${nomorowner}:+${nomorowner}\n`  
            + 'END:VCARD'  
  Ramdani.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
titid = 'Hallo kak, itu owner ku, jangan di ganggu ya\nbtw mau tau soal apa tentang owner ku?'
           sendButMessage(from, titid, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}ytb`, buttonText: { displayText: `YOUTUBE`, }, type: 1, },
          {buttonId: `${prefix}ig`, buttonText: { displayText: `INSTAGRAM`, }, type: 1, },
]); 
                 break; 
case 'pembuatbot':
            case 'creator':
            case 'creatorbot':
            case 'powered':
const vcard2 = 'BEGIN:VCARD2\n'  
            + 'VERSION:3.0\n'  
            + `FN: Ramdani Official\n`  
            + `ORG:sibuk;\n` 
            + `TEL;type=CELL;type=VOICE;waid=6289512545999:+6289512545999\n`  
            + 'END:VCARD2'  
  Ramdani.sendMessage(from, {displayname: "Jeff", vcard2: vcard2}, MessageType.contact, { quoted: mek})
titit = 'Hallo kak, itu pembuat ini, jangan di ganggu ya\nbtw mau tau soal apa tentang pembuat bot?'
           sendButMessage(from, titit, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}ytb`, buttonText: { displayText: `YOUTUBE`, }, type: 1, },
          {buttonId: `${prefix}ig`, buttonText: { displayText: `INSTAGRAM`, }, type: 1, },
]); 
                 break
//THANKS TO
case 'thanksto':
case 'tqto':
case 'tqtq':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
reply(`• *BIG THANKS TO*
• RAMDANI OFFICIAL (ME)
• ARUL (MY GURU)
• MHANKBARBAR (MASTAH)
• APRILIA
• ZEEONE OFC
• DIKA ARDNT
• RIMURUBOTZ
• KAHFZXZY
• LEXXY OFFICIAL
• HERMAN CHANNEL
• ABIL BOT
• KURR XD OFFICIAL
• DIKA XD
• SIEGRIN
• KANNABOT
• YANZ BOT`)
break
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fhidetag})
break
//GRUP BOT
case 'grupbot':
case 'groupbot':
case 'gcbot':
case 'kumpulangrupbot':
                Ramdani.sendMessage(from, grupbot(prefix), text)
		        break
//INFO BOT
	case 'rules':
	if (!isUser) return reply(mess.daftar)
    if (isBanned) return reply(mess.banned)
					Ramdani.sendMessage(from, rules(prefix, namabot, namaowner), text)
					break
    case 'infobot':
    if (!isUser) return reply(mess.daftar)
    if (isBanned) return reply(mess.banned)
					Ramdani.sendMessage(from, infobot(prefix, namabot, nomorbot, namaowner, nomorowner), text)
					break
//SELF AND PUBLIC
case 'public':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
public = true
fakeText('[ *PUBLIC MODE* ]')
break
case 'self':
if (!isUser) return reply(mess.daftar)
if (isBanned) return reply(mess.banned)
if (!isOwner) return reply(mess.only.ownerB)
public = false
fakeText('[ *SELF MODE* ]')
break
default:
if (budy.includes(`Assalamualaikum`)) {
Ramdani.sendMessage(from, 'Waalaikumsalam', text, {quoted: fakeitem})
                  }
if (budy.includes(`kontol`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`memek`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`anjg`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`Anjg`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`tai`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`Asu`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`asu`)) {
Ramdani.sendMessage(from, 'woi santay lah', text, {quoted: fakeitem})
                  }
if (budy.includes(`hai`)) {
Ramdani.sendMessage(from, 'Hai Juga', text, {quoted: fakeitem})
                  }
if (budy.includes(`stres`)) {
Ramdani.sendMessage(from, 'Lu Yang Stres', text, {quoted: fakeitem})
                  }
if (budy.includes(`??`)) {
Ramdani.sendMessage(from, 'Larii Cuk Ada Batu!!', text, {quoted: fakeitem})
                  }
if (budy.includes(`Bot`)) {
Ramdani.sendMessage(from, 'iya? Saya Bot, Ada Yang Bisa Saya Bantu?', text, {quoted: fakeitem})
                  }
if (budy.includes(`bot`)) {
Ramdani.sendMessage(from, 'iya? Saya Bot, Ada Yang Bisa Saya Bantu?', text, {quoted: fakeitem})
                  }
if (budy.includes(`Tes`)) {
Ramdani.sendMessage(from, 'Hmmm', text, {quoted: fakeitem})
                  }
}
if (budy.startsWith('x')){
try {
return Ramdani.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'WhatsApp', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}