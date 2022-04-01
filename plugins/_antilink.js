let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat];
  let ValidLink = (m.text.includes('https://') || m.text.includes('http://'))
  if (chat.antiLink && ValidLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = isBotAdmin ? `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}` : 0
    if (m.text.includes(thisGroup) && this Group != 0) throw false //  ذا لم يتم طرد رابط المجموعة نفسه
    await conn.reply(m.chat, `*تم اكتشاف الرابط!*${isBotAdmin ? '': '\n\nلست مشرفًا لذا لا يمكن ترك t_t'} \ n \ n اكتب * .off antilink * لإيقاف هذه الميزة $ {opts ['limits']؟ '': '\ ntype * .on limits * to kick'} "، ''، ''، ''، m)
    if (global.opts['restrict']) {
      if (isBotAdmin) this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler
