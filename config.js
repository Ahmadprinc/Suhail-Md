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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_01_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQxLFxuICAgICAgICA2NixcbiAgICAgICAgNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzksXG4gICAgICAgIDM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTExLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkyLFxuICAgICAgICA1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MyxcbiAgICAgICAgODksXG4gICAgICAgIDE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICA4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxLFxuICAgICAgICA1NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwLFxuICAgICAgICA4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYyLFxuICAgICAgICA4LFxuICAgICAgICA5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDY2LFxuICAgICAgICA5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUzLFxuICAgICAgICA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMkNQT3hHWllHS3NEUFh3TXRtMFJDSUZOc2VqQWVhcVBjcXl4MDhtM2lsOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMGVCclBzSVRRb21WckZNOUt3Z282UVwiLFxuICBcInBob25lSWRcIjogXCIwNzM1NDgyYy03ZWRmLTRjNjgtOTliYS1iYmMwYzU4OTk3YzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICAyMzIsXG4gICAgICAxMjgsXG4gICAgICA4NyxcbiAgICAgIDQxLFxuICAgICAgMTQ1LFxuICAgICAgMjUwLFxuICAgICAgMjAzLFxuICAgICAgMjUxLFxuICAgICAgMixcbiAgICAgIDY1LFxuICAgICAgMTEsXG4gICAgICAxMjIsXG4gICAgICA2MyxcbiAgICAgIDE3MCxcbiAgICAgIDk4LFxuICAgICAgMjksXG4gICAgICAxMTcsXG4gICAgICAxNjIsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMTYxLFxuICAgICAgOSxcbiAgICAgIDEwNSxcbiAgICAgIDEzMCxcbiAgICAgIDE0LFxuICAgICAgMTQ0LFxuICAgICAgMTY0LFxuICAgICAgOTEsXG4gICAgICAxNjUsXG4gICAgICAzMCxcbiAgICAgIDExOCxcbiAgICAgIDIyNixcbiAgICAgIDE5NyxcbiAgICAgIDgxLFxuICAgICAgMTE0LFxuICAgICAgMTUwLFxuICAgICAgMTIsXG4gICAgICAyNCxcbiAgICAgIDI1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaQVdSQ0ZZRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjU4NTMxOTcwOjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTQwMjczMDQ4ODIzNTk6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGlBellvQ0VQZnY2clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2QUcxUUZTREVIbnhwY0FsTkdUL3dMWUF5MTAvWHdCRTZPQXRPL04wRFhJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJQUTNyVUx2dC90dmNOYVdUUGxVTE1Tc2NJNDVqbXNlc3MxbHZOMThvQWRKY0NoWW9jUktTczZuYmNROXRFblpYUmNyUVZRZWJoOFZheDJlNVAzWEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNyREppc3dHQVowczFpdVdFNGpscG9taStpaE9kNGhWMW5tRjZLTDhTZHBCWlVndnoxZUR1ZTl5Rlo1b215OENqM1lDckVhQVdYaTNnZllneWt4OER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI1ODUzMTk3MDo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQxNTY3NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
