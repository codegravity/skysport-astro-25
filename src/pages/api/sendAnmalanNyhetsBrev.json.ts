export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

import { htmlNewsKundTemplate } from './mail_templates/kundnyhetsbrev.js'
import { htmlNewsSkyTemplate } from './mail_templates/skynyhetsbrev.js'

//const emailUser = import.meta.env.PUBLIC_EMAIL_USER
//const emailTo1 = import.meta.env.PUBLIC_EMAIL
//const emailToPass = import.meta.env.PUBLIC_EMAIL_PASS
//const host = import.meta.env.PUBLIC_EMAIL_HOST

// local testing

const host = "email-smtp.eu-north-1.amazonaws.com"
const emailTo1 = "no-reply@skysport.se"
const emailUser ="AKIAQPMQAGARF7NITJYL"
const emailToPass = "BKCrVn+E5GS0NTghRrMvgnmpyGeJ+nKMScbsXhHYzjyY"

//EMAIL_PORT = 587

//Note: Vercel env is configured in Vercel app, not from an env file!
/* const emailUser = process.env.PUBLIC_EMAIL_USER
const emailToPass = process.env.PUBLIC_EMAIL_PASS
const host = process.env.PUBLIC_EMAIL_HOST
const emailTo1 = process.env.PUBLIC_EMAIL */

const emailTo = emailTo1 + ', brett@skysport.se'

export const POST: APIRoute = async ({ request }) => {

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json()
   
    const email = formData.email
    if (!email ) {
    return new Response('Missing required fields', { status: 400 });
  }

    const Tsubject = 'Skysport Nyhetsbrev'
    const tempDate = new Date()
    const onlydate =  (tempDate.getFullYear()) + '-' + (tempDate.getMonth()) + '-' + (tempDate.getDate())
    const BookingTimestamp = tempDate.toISOString()
    const Ksubject = Tsubject + ' bekräftelsee'
    const output = htmlNewsKundTemplate( email, BookingTimestamp )
    const outputSky = htmlNewsSkyTemplate( email, BookingTimestamp )
    const Skysubject = "Nya nyhetsbrev anmäling: "  + onlydate
    const Skymessage = `
    Icke konfirmerad nyhetsbrev anmäling: ${email}   

    Inkommande: ${BookingTimestamp}
    ----------------------------------------------------------------------
     
    `

    const Kmessage = `
    Anmälan Skysport nyhetsbrev: ${onlydate}  

    
    ----------------------------------------------------------------------
    Angående  • email: ${email} • 
    
     Om du här inte anmält sej till nyhetsbrev eller ångra anmäling, mejla Skysport info@skysport.se 
     men ämne "nej till nyhetsbrev".

     mvh
     Skysport

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
      from: emailTo1,
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
      console.log('Message sent Client x: %s', mailresult?.messageId)
    


    let mailresultSky
    try {
      mailresultSky = await mailTransporter.sendMail(mailDetailsSky)
    } catch (error) {
      console.log('******* Error: ', error)
    }
      console.log('Message sent Skysport: %s', mailresult?.messageId)
       

    // return endpoint response
    //console.log('where are we' + mailDetails);
   return new Response(JSON.stringify(mailDetails), {
      status: 200,
      
    })
  }
  return new Response(null, { status: 400 }) // if not a json request
}

