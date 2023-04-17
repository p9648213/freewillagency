import { google } from "googleapis";

async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, service, date } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    await sheets.spreadsheets.values
      .append({
        spreadsheetId: process.env.SHEET_ID,
        range: process.env.SHEET_RANGE,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[name, email, phone, service, date]],
        },
      })
      .then((response) => {
        return res
          .status(response.status)
          .json({ message: "Data succesfully sent to google sheet" });
      })
      .catch((err) => {
        return res.status(err.code).json({ message: err.message });
      });
  } else {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
}

export default handler;
