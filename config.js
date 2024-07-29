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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94713921729";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_42_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMixcbiAgICAgICAgMjIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMTIxLFxuICAgICAgICA4MyxcbiAgICAgICAgODYsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAwLFxuICAgICAgICAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NSxcbiAgICAgICAgNSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgOCxcbiAgICAgICAgODQsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicWo4SCtSVHIvZVFMbm9qSGJqK2ErNXBqSHNqdmpNN05VWDAyRjRPNENvND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxMzkyMTcyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODg2Qzk3NUY0RjhCOEUxNDc5MEY3OTYwRjAwQzlCNTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMjcxMzU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MTM5MjE3MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBEN0UzNEYyMzZCMDI4QTA3RTE4OEVBMjE4QzI2QjRGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjI3MTM1OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQc05STy1NWlNHdVJsNDRKbmE1NGR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjAzYTFkZGFkLTEyMjYtNDg1ZS1hYmNmLWM5MjE3ZWY1NTM0NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICAxMTgsXG4gICAgICAyNTEsXG4gICAgICAyMjUsXG4gICAgICA5MyxcbiAgICAgIDUyLFxuICAgICAgMTM4LFxuICAgICAgNjksXG4gICAgICA0LFxuICAgICAgMTU5LFxuICAgICAgMTU3LFxuICAgICAgMTMyLFxuICAgICAgMjQ2LFxuICAgICAgNTcsXG4gICAgICAxMzksXG4gICAgICAyMTcsXG4gICAgICAyMjMsXG4gICAgICAxMDMsXG4gICAgICAxMzEsXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxMSxcbiAgICAgIDE0NixcbiAgICAgIDQ2LFxuICAgICAgNjcsXG4gICAgICA4NSxcbiAgICAgIDc5LFxuICAgICAgMTYyLFxuICAgICAgMTIxLFxuICAgICAgMTY2LFxuICAgICAgMTQzLFxuICAgICAgMTI5LFxuICAgICAgMTc3LFxuICAgICAgNDksXG4gICAgICAxOTksXG4gICAgICAxNyxcbiAgICAgIDExNSxcbiAgICAgIDI1NCxcbiAgICAgIDg1LFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUk44MzFITVBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzEzOTIxNzI5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJJa2trXCIsXG4gICAgXCJsaWRcIjogXCI1OTU3MTY5OTc0MDc1MjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lXUWphRUdFUFNNbjdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwick1FdDc2eVI0elRjaGI2UG42VmEzSis4RjI2N3E4ZCtpd0w2dGRtbC9HVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJabnNxNmFXUGJkL2s4K2VoV3NwTnRNdHhnSTh2amszcXRHV1JtRGU2Zm11eEFZYjg1U09NS0Nna0xHd28rTytzcDBnRlpPeHlBMHBlTFQyWStoTndCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLK1hoalZvUFVRcGtWaWEyQndIUE9CQzliT2cyVjEzVkVzSUVqTHE1VHYyekQxL1ArNzh0ei9pT08zM2NNR2pLdXo1Y0VteUIzQTROOExWbm1oWXhEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcxMzkyMTcyOToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjcxMzUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSktNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKS00uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1eHhIM0RsK0F5aDdVMGsxSHFtNm5HNk9SZFhFayt3TVltL1ZTV3Zndk0wPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODAwMzM3OTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjI3MTM1NTMyNVwifSIKfQ=="  // PUT your SESSION_ID 


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
