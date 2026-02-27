export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

import { htmlResKundBookTemplate } from './mail_templates/reskundbooking.js'
import { htmlResSkyTemplate } from './mail_templates/resSkyBooking.js'

//Note: Vercel env is configured in Vercel app, not from an env file!
const emailUser = process.env.PUBLIC_EMAIL_USER
const emailToPass = process.env.PUBLIC_EMAIL_PASS
const host = process.env.PUBLIC_EMAIL_HOST
const emailTo1 = process.env.PUBLIC_EMAIL 

const emailTo = emailTo1 

export const POST: APIRoute = async ({ request }) => {

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json()
    const resa = formData.resa
    const resPriceISO = formData.resPriceISO
    const resCountry = formData.resCountry
    const fname = formData.firstName
    const lname = formData.lastName
    const name = fname + ' ' + lname
    const email = formData.email
    const tel = formData.tel
    const telday = formData.telday
    const birthyr = formData.birthYear
    const adress = formData.adress
    const postnr = formData.postNr
    const city = formData.city
    const country = formData.country
    const vilkor = formData.vilkor
    const newsletter = formData.newsletter
    const checkboxOK = formData.checkboxOK 
    const Tsubject = formData.subject
    const message = formData.message    
    const tempDate = new Date()
    const onlydate =  (tempDate.getFullYear()) + '-' + (tempDate.getMonth()) + '-' + (tempDate.getDate())
    const BookingTimestamp = tempDate.toISOString()
    const Ksubject = Tsubject + ' bekräftelse från Skysport i Åre'

    const output = htmlResKundBookTemplate(name, tel, telday, email, message, resa, resPriceISO, resCountry, birthyr, adress, postnr, city, country, vilkor, newsletter,checkboxOK, BookingTimestamp )
    const outputSky = htmlResSkyTemplate(name, tel, telday, email, message, resa, resPriceISO, resCountry, birthyr, adress, postnr, city, country, vilkor, newsletter, checkboxOK, BookingTimestamp )

  

    const Skysubject = "Res Bokning : " + resa
    const Skymessage = `
    Res bokning: ${resa}   

    
    ----------------------------------------------------------------------
    From: ${name}  • email: ${email} • tel: ${tel}
    Meddelande: ${formData.message}

    Skickade: ${BookingTimestamp}
     
    `

    const Kmessage = `
    Res bokning: ${resa}  
    Land: ${resCountry}

    
    ----------------------------------------------------------------------
    From: ${name}  • email: ${email} • tel: ${tel}
    Meddelande: ${formData.message}

    Skickade: ${BookingTimestamp}
    

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
      to: emailTo,
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

