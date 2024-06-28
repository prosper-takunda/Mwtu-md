const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ngoyaibraah@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/ibrahimaitech/BLACK-PANTHER-MD/tree/main";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaamqHTJP212NuXUc40F";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaamqHTJP212NuXUc40F" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f7734019049f6985d41ef.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "26312125221" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "26312125221";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "*https://telegra.ph/file/5f106289f3017ec491934.jpg" // BLACKPANTHER Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "25471077266";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254710772666";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254716490732";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://a-af3e38f6851a.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZ6aGpzRlFKcWpZMTNmanZPa3NLOTVlc3FidUVEMVJzK09BUmVOS1dYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVFnaDFyZ3lJOXFjSVBsSEFQK29CeFgzWVFkL1RJOGJ6SXpWRTVucEQwOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSERDQ0lyMXE4QWE2U3RjU1VsZStETktqNW03WDFLeTMvTThDQW1qWWxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSmVsZ1RqVnB0S3Y2WXBUUUp1YzA3SmxEdUZqM2xjNVk0S3BlRmRtdVY0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndOTzdFZk1zTldIU2lXMzc4NGMxTU9BZ2xlNGtqZGZrUWV6VmcxWkIzRlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9ja0ZKeTlwRU12VW5DWlZQNEplRUxObkxzK2hZeW9vNjRKYlFJQzMwV0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVBaYzl6Zkp4NnBRcFhrbXFpY2NvQ2NRT1MyUlFsVUZWMCt4UUFyNE5Gaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzRuaWdCZFMrUDhhZVhzLzZKaTRVQ2gzUUQ5SGRGUGtWbGxyZ20zVWh5dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9kK3d1L2VaQ1U2SHppcjhUNmtmbU8vZnBaZUNCdkE3VSszNlBvN0ZqcUpNdEg1b1hYRXJlaVVvdy9uTlU4TmpqaW5HaldNeEtXdTB1YmZ4U250SmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiIwYmx4bHFGUGpFdG13VFRsRlhvNDI5SDl0NktIa0FBSTBPb2VQcmFlYVZRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxMjEyNTIyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFQzFCQUVDNzExNzVBNzY1QURERjU5NkFGNDJEQjc4OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NTM4NDE2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyR0tJZkVLa1Q2T0prSFFNOWl2S3pRIiwicGhvbmVJZCI6IjU5NWEzMDJjLWMzYTUtNDRiOC04NWExLTNjMDljMTM0ZDA5NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyL3QxWTEwMTA0a3Q3LzRyYzcvV00xdzJadTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmFBOWVHdVBxdVl5b1ZnL1Vtc05oYjhVQ3RvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpGTkpQUE1aIiwibWUiOnsiaWQiOiIyNjM3MTIxMjUyMjE6MTBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tPRjM4MEdFT0tsK0xNR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZSYnZad0Nkc3pKTmcvVHAyRUZBL1dTdkRRWXhwUU5Pb2t2bTllNnhKa3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlRVTTVFSHc1UEpYdmIvTks3RnpLWlNXdklteEs2emY2TkJhYTNXc0lSeFVxa1dDMDJucGVLL3FheS9aZzYwL0dWUHppNHRZb1F4N003dHZLU3hLbEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5ci9HSDZFbkMzMkJTckp6SHBxWnVGL1pLc1Y4OW93YUVyejBRVldYY2xCRERBWkFrc2QzanRuK2dMZ0s2ZDQvaXVMa255c3lrTFNGUlA0K3N1dUFqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxMjEyNTIyMToxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSVVc3MmNBbmJNeVRZUDA2ZGhCUVAxa3J3MEdNYVVEVHFKTDV2WHVzU1pNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5NTM4NDEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVGZiJ9" ;


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "MWTU-MD✅" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Mr MWTU",
  packname: process.env.PACK_NAME || "🐯",
  botname : process.env.BOT_NAME  || "〽️🅰️N T🅰️KU-MD",
  ownername:process.env.OWNER_NAME|| "〽️🅰️N T🅰️KU",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "hunger",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ADAM"  ).toUpperCase(),



};

























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
