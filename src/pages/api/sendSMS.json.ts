
export const prerender = false;

import type { APIRoute } from 'astro';
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const smsIDKey = process.env.AWS_SNS_KEY
const smsHemligKey = process.env.AWS_SNS_HEMLIG
const smsSenderID = process.env.SMS_SENDER_ID 
const awsRegion = process.env.AWS_REGION
const snsCGMobilNummer = process.env.AWS_SNS_NUMBER
const snsSkysportNummer = process.env.AWS_SNS_SKY_NUMBER



const snsClient = new SNSClient({
  region: awsRegion,
  credentials: {
    accessKeyId: smsIDKey,
    secretAccessKey: smsHemligKey,
  },
});

console.log('SNS Client initialized with region:', awsRegion);

export const POST: APIRoute = async ({ request }) => {

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json()
    const name = formData.name
    const email = formData.email
    const tel = formData.tel
    const TandemDate = formData.Tdate
    const Meddelande = formData.message
    const smsMobilNummer = snsCGMobilNummer
    const smsMessage = 'Tandembokning: ' + TandemDate + '\n' + 'Namn: ' + name + '\n' + 'Epost: ' + email + '\n' + 'Telefon: ' + tel + '\n'  + 'Meddelande: ' + Meddelande;

    const response = await snsClient.send(
      new PublishCommand({
        Message: smsMessage,
        PhoneNumber: smsMobilNummer,
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': smsSenderID
            }
        }
      }),
    );
    console.log(response);
      
    return new Response(JSON.stringify(smsMessage), {
      status: 200,

    })  
 }
return new Response(null, { status: 400 }) 
}
