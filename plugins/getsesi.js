import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('Waiting For Respone System . . .')
    let sesi = await fs.readFileSync('./session.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'session.json' }, { quoted: m })
}
handler.help = ['getsesi']
handler.tags = ['owner']
handler.command = /^(getsesi)$/i

handler.owner = false

export default handler