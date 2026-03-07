const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

app.post("/send-email", async (req, res) => {

  const { name, email, subject, message } = req.body

  try {

    await transporter.sendMail({

      from: `"Website DS Afwerking" <${process.env.SMTP_USER}>`,

      to: process.env.MAIL_TO,

      subject: `Nieuwe aanvraag: ${subject}`,

      html: `
        <h3>Nieuwe aanvraag via website</h3>

        <p><b>Naam:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Onderwerp:</b> ${subject}</p>

        <p><b>Bericht:</b></p>

        <p>${message}</p>
      `
    })

    res.json({
      success: true,
      message: "Email verzonden"
    })

  } catch (err) {

    console.error(err)

    res.status(500).json({
      success: false,
      message: "Email fout"
    })
  }

})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});