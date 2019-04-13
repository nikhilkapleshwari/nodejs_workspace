const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    "101036591500-sjbn86bf1qdatbhm1bb9ou0a734qe4re.apps.googleusercontent.com", // ClientID
    "3zS2gFMVLNODSoqN1SjEBeFV", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);


oauth2Client.setCredentials({
    refresh_token: "1/b03LUW9kc3uZJkG9TeCaHSFRJFyGa2KVxf4ny8BJFK9ULFLD0l6-B0M0tBGRL4P3"
});

accessToken = oauth2Client.refreshAccessToken()
      .then(res => {
          res.credentials.access_token;
      });
const smtpTransport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                     type: "OAuth2",
                     user: "EasyTapp@gmail.com", 
                     clientId: "101036591500-sjbn86bf1qdatbhm1bb9ou0a734qe4re.apps.googleusercontent.com",
                     clientSecret: "3zS2gFMVLNODSoqN1SjEBeFV",
                     refreshToken: "1/b03LUW9kc3uZJkG9TeCaHSFRJFyGa2KVxf4ny8BJFK9ULFLD0l6-B0M0tBGRL4P3",
                     accessToken: this.accessToken
                }
           });
        
        
           const mailOptions = {
            from: "EasyTapp@gmail.com",
            to: "nikhil1632@gmail.com",
            subject: "Greetings from EasyTapp",
            generateTextFromHTML: true,
            html: "<b>Welcome Nikhil Kapleshwari, Your mail working! </b>"
        };
        
        
        smtpTransport.sendMail(mailOptions, (error, response) => {
            error ? console.log(error) : console.log(response);
            smtpTransport.close();
        });
        
        