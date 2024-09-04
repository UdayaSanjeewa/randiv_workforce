import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(request: any) {
  const body = await request.json();
  

  const message = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inquiry</title>
    </head>
    <body>
        <h4><b>Name        : </b>${body.name}</h4>
        <h4><b>Gender      : </b>${body.gender}</h4>
        <h4><b>Phone number: </b>${body.phoneNumber}</h4>
        <h4><b>Experience  : </b>${body.experience}</h4>
        <h4><b>Message     : </b></h4><p>${body.message}</p>
    </body>
    </html>
    `;

  const mailServer = createTransport({
    service: "gmail",
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  mailServer.sendMail(
    {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "inquiry",
      html: message,
    },
    (err: any, info: any) => {
      if (err) {
        console.log("Cannot send the Email");
      } else {
        console.log("Email sent succesfully");
      }
    }
  );
  return NextResponse.json({ message: true });
}
