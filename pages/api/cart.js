import nodemailer from "nodemailer";
export default async (req, res) => {
  const { name, email, phone, items } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  var content = items.reduce(function (a, b) {
    return (
      a +
      "<tr><td><strong>" +
      b.n +
      "</strong></td><td>" +
      b.c +
      "</td><td> Qty: " +
      b.quantity +
      "</td></tr>"
    );
  }, "");

  console.log(content);

  try {
    const emailSend = await transporter.sendMail({
      from: email,
      to: "pharmaceuticalskosher@gmail.com",
      subject: `Website Enquiry from ${name}`,
      html: `<div>
      <div style="margin-bottom:10px">
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone ${phone}</p>
      </div>
      ${content}</div>`,
    });
    console.log("Message Sent", emailSend.messageId);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(req.body);
};
