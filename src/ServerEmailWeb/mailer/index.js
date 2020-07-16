import nodemailer from 'nodemailer'

import config from './config.js'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  port: 465,
  auth: {
    user: config.email,
    pass: config.emailPassword
  }
});

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'lasadas2020@gmail.com',
    subject: `[Alquisfraces 🎭] Tienes una nueva reserva de ${name}`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export default send