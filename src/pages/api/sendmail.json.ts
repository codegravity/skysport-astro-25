export const prerender = false;

import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'

//import { htmlTemplate } from './mail_templates/toSkysport.js'
import { htmlTemplateTwo } from './mail_templates/templateTwo.js'

//vercel env
const emailUser = process.env.PUBLIC_EMAIL_USER
const emailToPass = process.env.PUBLIC_EMAIL_PASS
const host = process.env.PUBLIC_EMAIL_HOST
const emailTo = process.env.PUBLIC_EMAIL

export const POST: APIRoute = async ({ request }) => {

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json()
    const name = formData.name
    const email = formData.email
    const tel = formData.tel
    const interests = formData.interests
    const kontaktMeddelande = formData.message
    const kontaktNamn = name
    const kontaktEpost = email
    const kontaktTel = tel
    const tempDate = new Date()
    const kontaktTimestamp = tempDate.toISOString()

    console.log(kontaktTimestamp)

    const output = htmlTemplateTwo(kontaktNamn, kontaktTel, kontaktEpost, kontaktMeddelande, kontaktTimestamp )

    if (!email || !name ) {
      throw new Error("Missing required fields");
    }

    const subject = "Kontakt från Åreskutan.se - sender: " + name
    const message = `${formData.message}

the text email....
    ----------------------------------------------------------------------
    From: ${name}  • email: ${email} • tel: ${tel}

    `
   /*  const html = `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">
                <h2>Angående:&nbsp; ${interests[0]} &nbsp; ${interests[1]}   </h2>
            ${message.replace(
      /[\r\n]/g,
      '<br>'
    )}</div>` */
    //const html = htmlTemplate


    // sendmail
    let mailTransporter = nodemailer.createTransport({
      host,
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailToPass,
      },
    })

    let mailDetails = {
      from: email,
      to: emailTo,
      subject: `${new URL(request.url).hostname}: ${subject}`,
      text: message,
      html: output,
    }

    let mailresult
    try {
      mailresult = await mailTransporter.sendMail(mailDetails)
    } catch (error) {
      console.log('******* Error: ', error)
    }
    console.log('Message sent: %s', mailresult?.messageId)


    // return endpoint response
    return new Response(JSON.stringify(mailDetails), {
      status: 200,

    })
  }
  return new Response(null, { status: 400 }) // if not a json request
}

