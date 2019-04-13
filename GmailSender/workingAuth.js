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
          //console.log(res);
          console.log(res.credentials.access_token);
      });