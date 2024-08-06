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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254705615631";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_50_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NSxcbiAgICAgICAgOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcyLFxuICAgICAgICA5MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODksXG4gICAgICAgIDExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0LFxuICAgICAgICA0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODksXG4gICAgICAgIDcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTksXG4gICAgICAgIDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODksXG4gICAgICAgIDM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJUeVNMQkFrcVRXU0JOL0YxUStvcUxTdFpVUHQxTWd4d1lyWHdDS1FxMFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzA1NjE1NjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NzhCMDUyOUVFRTBDQjdGNzBCQjQ0QkRDNDQyNkY1MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5MzA1OTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MDU2MTU2MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM2RTBFOUFDQzdFQjdDRUZBODIyQkNDQjEzQjI2M0MyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjkzMDU5N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMeGlIYzRhNVJFaVZWLU84QmZ1bVRRXCIsXG4gIFwicGhvbmVJZFwiOiBcImVmYTJhZjE4LWVmMzUtNDBiZi1iMzQ0LTZhZTE1NTdhNGVhOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDIwNixcbiAgICAgIDE1MyxcbiAgICAgIDEwMSxcbiAgICAgIDIwNSxcbiAgICAgIDEzMCxcbiAgICAgIDIxMyxcbiAgICAgIDI3LFxuICAgICAgMTUyLFxuICAgICAgMjM3LFxuICAgICAgMTcwLFxuICAgICAgNjIsXG4gICAgICAyNDAsXG4gICAgICAxNSxcbiAgICAgIDIxOSxcbiAgICAgIDQ3LFxuICAgICAgMjEzLFxuICAgICAgMjE3LFxuICAgICAgMjIyLFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU0LFxuICAgICAgMjA2LFxuICAgICAgMjAyLFxuICAgICAgMTAzLFxuICAgICAgOTgsXG4gICAgICAxOTMsXG4gICAgICAyMjIsXG4gICAgICA4NCxcbiAgICAgIDE2MSxcbiAgICAgIDEyNCxcbiAgICAgIDIzNixcbiAgICAgIDE1OCxcbiAgICAgIDY4LFxuICAgICAgMTk3LFxuICAgICAgMTI2LFxuICAgICAgMTE0LFxuICAgICAgMjM4LFxuICAgICAgNDYsXG4gICAgICAxNTUsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3UDI5TFJRRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA1NjE1NjMxOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGhlIFN0aWFuXCIsXG4gICAgXCJsaWRcIjogXCIzNDM1NTkxMzE5MTQ5NDoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdkU1cEFHRUoycng3VUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZTRjFCMzcyaXIwcGZNeUJqajJMVHRhUmcyUWxFeG9DUWxkNG4rRmdXRFk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTVNpMXdYcWc5RDdocUxWNXZLYmRnSk1CMjg2a2xlTUY0dkZ3WGxpeFk2ZkJteU85cTd0RVlBNGtRVHMwSkt3cE1zSWFpV1lYSENwZ0FqQ1lNdTBaRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNEJVOGRaMW5qMCtXNFNzK1pWeC9NY0oxRGgva3lHbTRXajgwVmFBcXRGVSsvckg0NTdHSU1wZVBvaFU5RjN1bVROVWhTL2VTR1EwVmdKdktIUlBwaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzA1NjE1NjMxOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5MzA1OTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFdlBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUV2UC5qc29uIjogIntcImtleURhdGFcIjpcIjk0bXFBS0NKd2FrVGZ2QjVOZEdpUlpqd3BpYktURERsZTVXeXhqOWhnNmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY0NTg0NzA5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNzEzMDgzNTQ0XCJ9Igp9"  // PUT your SESSION_ID 


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
