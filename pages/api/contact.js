import nodemailer from "nodemailer";
export default async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  try {
    const emailSend = await transporter.sendMail({
      from: email,
      to: "pharmaceuticalskosher@gmail.com",
      subject: `Site Feedback form ${name}`,
      html: `<p>${message}</p>`,
    });
    console.log("Message Sent", emailSend.messageId);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(req.body);
};
