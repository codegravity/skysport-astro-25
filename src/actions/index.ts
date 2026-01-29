import { ActionError, defineAction } from 'astro:actions';
import nodemailer from 'nodemailer';



const host = "email-smtp.eu-north-1.amazonaws.com"
const emailTo1 = "no-reply@skysport.se"
const emailUser ="AKIAQPMQAGARF7NITJYL"
const emailToPass = "BKCrVn+E5GS0NTghRrMvgnmpyGeJ+nKMScbsXhHYzjyY"


 export const  mailTransporter = nodemailer.createTransport({
      host,
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailToPass,
      },
    })

   

