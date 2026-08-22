const {google} = require("googleapis")

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "275742938562-dduioo7m4sebi84q3k3lff506p034njb.apps.googleusercontent.com"
const GOOGLE_CLIENT_SCRECTS = process.env.GOOGLE_CLIENT_SCRECTS || "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"

exports.oauth2client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,  
    GOOGLE_CLIENT_SCRECTS,
    'postmessage'  
)