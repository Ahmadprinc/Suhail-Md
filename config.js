const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_54_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDk1LFxuICAgICAgICA1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDUwLFxuICAgICAgICA5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDg5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDc5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NCxcbiAgICAgICAgODYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAwLFxuICAgICAgICAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcxLFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg2LFxuICAgICAgICA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInUvVEpMd2dhcmozZjhoOTZaMWVnUlZMM0lMdllmT3lZUlRYV3VrWnFIVW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRfNVhMazJmUXNLU3dISkNjelg2ZndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTdlNjg3OTEtODE3My00OTA3LWFjNzgtZmI4YzUxOTAwNGZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDIzNSxcbiAgICAgIDYzLFxuICAgICAgNzcsXG4gICAgICAxNzksXG4gICAgICAxNzMsXG4gICAgICAxODQsXG4gICAgICAyNCxcbiAgICAgIDI0MSxcbiAgICAgIDExOCxcbiAgICAgIDY3LFxuICAgICAgMTExLFxuICAgICAgMTQ1LFxuICAgICAgNTEsXG4gICAgICA0MCxcbiAgICAgIDE4MSxcbiAgICAgIDI0NyxcbiAgICAgIDI0OCxcbiAgICAgIDM2LFxuICAgICAgMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDQsXG4gICAgICA3LFxuICAgICAgMjYsXG4gICAgICAxNDYsXG4gICAgICAzOCxcbiAgICAgIDE2LFxuICAgICAgMTQsXG4gICAgICA2LFxuICAgICAgOCxcbiAgICAgIDQ2LFxuICAgICAgMTYwLFxuICAgICAgNjcsXG4gICAgICAzNSxcbiAgICAgIDg2LFxuICAgICAgMTQwLFxuICAgICAgMTk5LFxuICAgICAgMjQ2LFxuICAgICAgMjA1LFxuICAgICAgNDMsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1k3RVBaUU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI1ODUzMTk3MDo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE0MDI3MzA0ODgyMzU5OjQ2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BpQXpZb0NFT0NQOExRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNkFHMVFGU0RFSG54cGNBbE5HVC93TFlBeTEwL1h3QkU2T0F0Ty9OMERYST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiQndKTmhVVnVhdXZtTEFhdXpzYW1LcmlPbjE1OUlRZ0R4UXpUazNCR3d1WEF2ak40eGtWSjhpWXNteU9BQ0c1VTRJV2w3L2xEUUJkZ2NacSt0LzRBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1WldCV0hWRXAxaVV1MXp5L2wvczF0MWl5eFFTZ0M4UzA2N3pyREgzbUswS2Zqckg0WXFvK2xjb28wUnA0VHhXQ09BNkRTdjBCOEVyYkNjbCtqMjhqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNTg1MzE5NzA6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1MDE2NjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPRHhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9EeC5qc29uIjogIntcImtleURhdGFcIjpcImcrLy9BQm1mU0pycjRNQzkyVUxia0pOc3EyMjdPYjh0VzN1QnVrVjFrNW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTU5MTA0MTIwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0MTU2ODIwODlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
