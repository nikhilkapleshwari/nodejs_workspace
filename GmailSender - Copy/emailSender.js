const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    "40154925202-vero9p9mielkucr8h41f8d87l412aet3.apps.googleusercontent.com", // ClientID
    "f2WAmJp-tIm0fixOL1CJFUhL", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);


oauth2Client.setCredentials({
    refresh_token: "1/7BWsBL4FN2v6la9U2AAaXcy2Mxo0_hwVdFu7OhiSz01la81ctOmU_rFdlhw3Xnwd"
});
    
const accessToken = oauth2Client.getRequestHeaders()
    .then(res => res.credentials.access_token);

    //const tokens = await oauth2Client.refreshAccessToken()
//const accessToken = tokens.credentials.access_token;

    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
             type: "OAuth2",
             user: "nikhil1632@gmail.com", 
             clientId: "40154925202-vero9p9mielkucr8h41f8d87l412aet3.apps.googleusercontent.com",
             clientSecret: "f2WAmJp-tIm0fixOL1CJFUhL",
             refreshToken: "1/7BWsBL4FN2v6la9U2AAaXcy2Mxo0_hwVdFu7OhiSz01la81ctOmU_rFdlhw3Xnwd",
             accessToken: accessToken
        }
   });


   const mailOptions = {
    from: "nikhil1632@gmail.com",
    to: "nikhil3216@gmail.com",
    subject: "Greetings from EasyTorrent.",
    generateTextFromHTML: true,
    html: "<b>Welcome Nikhil!</b>"
};


smtpTransport.sendMail(mailOptions, (error, response) => {
    error ? console.log(error) : console.log(response);
    smtpTransport.close();
});

