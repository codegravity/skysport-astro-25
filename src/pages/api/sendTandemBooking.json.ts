export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

//import { htmlTemplate } from './mail_templates/toSkysport.js'
import { htmlTandemTemplate } from './mail_templates/tandemBooking.js'

import { htmlTandemSkyTemplate } from './mail_templates/tandemSkyBooking.js'



//const emailUser = import.meta.env.PUBLIC_EMAIL_USER
//const emailTo1 = import.meta.env.PUBLIC_EMAIL
//const emailToPass = import.meta.env.PUBLIC_EMAIL_PASS
//const host = import.meta.env.PUBLIC_EMAIL_HOST

// local testing
/*
const host = "email-smtp.eu-north-1.amazonaws.com"
const emailTo1 = "astro@codegravity.net"
const emailUser ="AKIAQPMQAGARF7NITJYL"
const emailToPass = "BKCrVn+E5GS0NTghRrMvgnmpyGeJ+nKMScbsXhHYzjyY"
*/
//EMAIL_PORT = 587

//const emailTo = emailTo1 + ', brett@skysport.se'
//vercel env
const emailUser = process.env.PUBLIC_EMAIL_USER
const emailToPass = process.env.PUBLIC_EMAIL_PASS
const host = process.env.PUBLIC_EMAIL_HOST
const emailTo1 = process.env.PUBLIC_EMAIL

const emailTo = emailTo1 + ', brett@skysport.se'

export const POST: APIRoute = async ({ request }) => {

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json()
    const name = formData.name
    const email = formData.email
    const tel = formData.tel
    const TandemDate = formData.Tdate
    const AltDate = formData.altTdate
    const AntalPass = formData.TnrPass
    const Tsubject = formData.subject
    const Meddelande = formData.message
    const kontaktNamn = name
    const kontaktEpost = email
    const kontaktTel = tel
    const tempDate = new Date()
    const onlydate =  (tempDate.getFullYear()) + '-' + (tempDate.getMonth()) + '-' + (tempDate.getDate())
    const BookingTimestamp = tempDate.toISOString()
    const Ksubject = Tsubject + ' bekräftelse från Skysport i Åre'

    const output = htmlTandemTemplate(name, tel, email, Meddelande, TandemDate, AltDate, AntalPass, Tsubject, BookingTimestamp )
    const outputSky = htmlTandemSkyTemplate(name, tel, email, Meddelande, TandemDate, AltDate, AntalPass, BookingTimestamp )

    if (!email || !name ) {
      throw new Error("Missing required fields");
    }

    const Skysubject = "Tandem Bokning : " + name + ' : ' + onlydate
    const Skymessage = `
    Tandembokning: ${TandemDate}   • alternativ datum:${AltDate}

    antal passanger: ${AntalPass}
    ----------------------------------------------------------------------
    From: ${name}  • email: ${email} • tel: ${tel}
    Meddelande: ${formData.message}

    Skickade: ${BookingTimestamp}
     
    `

    const Kmessage = `
    Tandembokning: ${TandemDate}   • alternativ datum:${AltDate}

    antal passanger: ${AntalPass}
    ----------------------------------------------------------------------
    From: ${name}  • email: ${email} • tel: ${tel}
    Meddelande: ${formData.message}

    Skickade: ${BookingTimestamp}
     Eftersom du fik våran förenklade bekräftelse, be vi ät du här av sej till oss om hur din tandemflyg ska genomförs.

    `
   
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
// skicka till kund
    let mailDetails = {
      from: emailTo,
      to: email,
      subject:  Ksubject,
    //  subject: `${new URL(request.url).hostname}: ${subject}`,
      text: Kmessage,
      html: output,
    }

    // skicka till Skysport
    let mailDetailsSky = {
      from: emailTo,
      to: `brett@codegravity.se`,
      subject:  Skysubject,
    //  subject: `${new URL(request.url).hostname}: ${subject}`,
      text: Skymessage,
      html: outputSky,
    }

    let mailresult
    try {
      mailresult = await mailTransporter.sendMail(mailDetails)
    } catch (error) {
      console.log('******* Error: ', error)
    }
      console.log('Message sent: %s', mailresult?.messageId)

    let mailresultSky
    try {
      mailresultSky = await mailTransporter.sendMail(mailDetailsSky)
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

