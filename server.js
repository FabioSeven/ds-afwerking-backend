const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("API de envio online");
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Preencha nome, e-mail e mensagem."
      });
    }

    const { error } = await resend.emails.send({
      from: "Forms WebSite <onboarding@resend.dev>",
      to: [process.env.MAIL_TO],
      replyTo: email,
      subject: `Nieuwe aanvraag: ${subject || "Contactformulier"}`,
      html: `
        <h3>Nieuwe aanvraag via website</h3>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Onderwerp:</strong> ${subject || "-"}</p>
        <p><strong>Bericht:</strong></p>
        <p>${String(message).replace(/\n/g, "<br>")}</p>
      `
    });

    if (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Fout bij verzenden."
      });
    }

    return res.json({
      success: true,
      message: "Bericht succesvol verzonden."
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Serverfout."
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
