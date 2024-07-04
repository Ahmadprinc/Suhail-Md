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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_25_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY4LFxuICAgICAgICA1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMixcbiAgICAgICAgMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMzLFxuICAgICAgICA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNixcbiAgICAgICAgMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMixcbiAgICAgICAgNjksXG4gICAgICAgIDY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU3LFxuICAgICAgICA0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICA3NSxcbiAgICAgICAgODcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcyLFxuICAgICAgICA4NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA0LFxuICAgICAgICA4NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0Zktpc2hQOWtmb1NXRzhaem5vRVJtdCt3dWdTc3JTOW83OG5QU0tiVlhvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5aXBKOU5saVJ4ZVg2UjlfVnBOX0FnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhkNzJhMWJiLWQxMTQtNDBlOC05YmM3LTEzY2QxYzhlMjA1NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAwLFxuICAgICAgMTQ2LFxuICAgICAgMjM0LFxuICAgICAgMyxcbiAgICAgIDIzLFxuICAgICAgMTc1LFxuICAgICAgMTk3LFxuICAgICAgMTM5LFxuICAgICAgMjQ2LFxuICAgICAgMTQ0LFxuICAgICAgNzIsXG4gICAgICA2OCxcbiAgICAgIDE2OCxcbiAgICAgIDIzMCxcbiAgICAgIDEzLFxuICAgICAgMTAyLFxuICAgICAgMTAsXG4gICAgICAxMDYsXG4gICAgICAyMDEsXG4gICAgICAyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDExLFxuICAgICAgMTQyLFxuICAgICAgMjUxLFxuICAgICAgMTYzLFxuICAgICAgMTU2LFxuICAgICAgODgsXG4gICAgICAxOTEsXG4gICAgICAxODQsXG4gICAgICAxOTMsXG4gICAgICA2MSxcbiAgICAgIDQ4LFxuICAgICAgOTEsXG4gICAgICAyMTgsXG4gICAgICAyMDUsXG4gICAgICA1NSxcbiAgICAgIDE5NixcbiAgICAgIDI1NCxcbiAgICAgIDExOCxcbiAgICAgIDIwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGWEZTTUpONFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjU4NTMxOTcwOjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTQwMjczMDQ4ODIzNTk6MzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFgraEY4UW5MYWJ0QVlZQnlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuc08yelBZZHFpQU1zVWUyOHRRelFWRHh3SVpYSEp2YWR2L2lWczJsNVNJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJQZ01VSUdzMW5GVWIxL1NqWSsxUTUxMHJuSGd5N0xUbG53RWF2bk9ibzZiZU9EZm5rczVPQU1iVFZ2MUtrT0E2OG4ycUdQYktOdFQvVHZHdmN2NkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJFbldVZ3hLdDV5SVdWV1FwR0FPT3Yvc2FsZGNvbWVKQzU4SVY2TE41SmNxYTFQcW91akhUeXNmWmxIUGd3N3NQKytoTWxTVy9EU0RsVks3WGNiV2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI1ODUzMTk3MDozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxMTM5NTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUJBQUFCaEVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQkFBQUJoRS5qc29uIjogIntcImtleURhdGFcIjpcInk5Uk0zdStyYjdqZTdlTG5VSXFYanVqOG5uaWN4Q013NUNNYktneHl1aHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk5MzExMTU1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxNl19LFwidGltZXN0YW1wXCI6XCIxNzE2MzY4ODIxMTYyXCJ9Igp9"  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
