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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254102251360";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_07_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjExLFxuICAgICAgICA3NixcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQzLFxuICAgICAgICA0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc1LFxuICAgICAgICA2MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1LFxuICAgICAgICA4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICA0MixcbiAgICAgICAgNDksXG4gICAgICAgIDkzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNSxcbiAgICAgICAgODksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MixcbiAgICAgICAgMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgODMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOSxcbiAgICAgICAgOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9CZk5VNEcxaXF1Nnk2U0FJVTdjN2cvaEdDdHNoQ0F1WXRXZ2wwVnJ2U3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0MTAyMjUxMzYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBODBBMjg0QTlCOTAyNjUxQjc4QjlFNjBDN0NDN0Y2QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI4OTIwMzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQxMDIyNTEzNjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNBMjA1RjBDNDU1NEMwNTdGNjVDMjE4N0ZFMTBCQjU5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjg5MjAzOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDEwMjI1MTM2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUE1RjNFMUJBNDEzODE1Nzg4QURGQzZCMTFCRDMwQTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODkyMDQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0MTAyMjUxMzYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNTI2MUYyNEExQjRCM0U2QkY0MUJGQUUwMTcwREE0Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI4OTIwNDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiemJHSWlDSFBUU09JdmtCSDhEelJTZ1wiLFxuICBcInBob25lSWRcIjogXCJkMGU2ZTZlNy04ZjVjLTQxNjItOWUyMS0wMGYxNmZkMjc1YjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAyMDMsXG4gICAgICA5MSxcbiAgICAgIDE0NyxcbiAgICAgIDI1MixcbiAgICAgIDExMSxcbiAgICAgIDMwLFxuICAgICAgMTIxLFxuICAgICAgNSxcbiAgICAgIDI2LFxuICAgICAgMjIxLFxuICAgICAgMTEzLFxuICAgICAgMjEyLFxuICAgICAgNSxcbiAgICAgIDE1LFxuICAgICAgMTIsXG4gICAgICAyNDYsXG4gICAgICAxNDQsXG4gICAgICAyMjIsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICAxOTUsXG4gICAgICA1NCxcbiAgICAgIDE4NyxcbiAgICAgIDM3LFxuICAgICAgODYsXG4gICAgICAxNjYsXG4gICAgICAxNDgsXG4gICAgICAxNTIsXG4gICAgICAxNDMsXG4gICAgICAyMjEsXG4gICAgICA1NSxcbiAgICAgIDU1LFxuICAgICAgMTkzLFxuICAgICAgMTUsXG4gICAgICAxNjgsXG4gICAgICAxMjMsXG4gICAgICAyMTcsXG4gICAgICAxMTcsXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLWEtFSkdTUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTAyMjUxMzYwOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc4NTAzOTE1NTg1NzMwOjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU3RpYW5p8J+YjvCfmI7wn5iOXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWpxNEdVUWdQN0V0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTZkF3TXhramgvZjdmTXZkUEdYQTJFb0VJQ0pEVkd3UFVpNkhydUZGdDBzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhMa1ZrVXVHem5iL1d3cnNXSlVlOGxQRkxnd01aVSt2OElLRHI0SlVkbEkycFlnTDc5Ymg5VHBhdFQzM1NXbkM1eFFUQ29tL1R1aFdVckxLMUR1aERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFDRUdPdWJSTjJHbmdFUkJ5VVNEdFQxUWIwQW5yM0VlS2ZVN2hwV2ZEek1yR3VHSUJHMUJTMWtQVmNKUlBjbmdLd29tOFREMjNoczI1Q3U0Qmt1MUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDEwMjI1MTM2MDozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODkyMDM2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnBDXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGcEMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjK2UxVnZ3djVUTFM4cjd4TkRHaXlTalFLbGNvdWFFWDlVZXJodzlvbVQ4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMzM5ODg1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyODkyMDM3NTQ5XCJ9Igp9"  // PUT your SESSION_ID 


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
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
