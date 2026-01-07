
const htmlGrundKundBookTemplate = (kursDate, kursVeckan, kursPriceISO, boendeType,boendePriceISO, apartmentRequest, summa,name, tel, telday, email, Meddelande,  weight, birthyr, adress, postnr, city, country, kursvilkor, newsletter,checkboxOK, BookingTimestamp) => {
    return `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->

  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->

    <!-- Your title goes here -->
    <title>Bokningsbekräftelse SIV kurs hos Skysport</title>
    <!-- End title -->

    <!-- Start stylesheet -->
    <style type="text/css">
      a,a[href],a:hover, a:link, a:visited {
        /* This is the link colour */
        text-decoration: none!important;
        color: #0000EE;
      }
      .link {
        text-decoration: underline!important;
      }
      p, p:visited {
        /* Fallback paragraph style */
        font-size:15px;
        line-height:24px;
        font-family:'Helvetica', Arial, sans-serif;
        font-weight:300;
        text-decoration:none;
        color: #000000;
      }
      h1 {
        /* Fallback heading style */
        font-size:22px;
        line-height:24px;
        font-family:'Helvetica', Arial, sans-serif;
        font-weight:normal;
        text-decoration:none;
        color: #000000;
      }
      .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td {line-height: 100%;}
      .ExternalClass {width: 100%;}
    </style>
    <!-- End stylesheet -->

</head>

  <!-- You can change background colour here -->
  <body style="text-align: center; margin: 0; padding-top: 10px; padding-bottom: 10px; padding-left: 0; padding-right: 0; -webkit-text-size-adjust: 100%;background-color: #f2f4f6; color: #000000" align="center">

  <!-- Fallback force center content -->
  <div style="text-align: center;">

    

    <!-- Start container for logo -->
    <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 80%; background-color: #ffffff;" width="600">
      <tbody>
        <tr>
          <td style="width: 596px; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 15px; padding-bottom: 15px;" width="596">

            <!-- Your logo is here -->
            <img style="width: 468px; max-width: 468px; height: 96px; max-height: 96px; text-align: center; color: #ffffff;" alt="Logo" src="https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/Skysport_Logo-01-invert-468.png" align="center" width="468" height="96">

          </td>
        </tr>
      </tbody>
    </table>
    <!-- End container for logo -->

    <!-- Hero image -->
    <img style="width: 600px; max-width: 600px; height: 600px; max-height: 600px; text-align: center;" alt="Hero image" src="https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/tandem/tandem_image.webp" align="center" width="600" height="600">
    <!-- Hero image -->

    <!-- Start single column section -->
    <table align="center" style="text-align: left; vertical-align: top; width: 600px; max-width: 600px; background-color: #ffffff;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 40px;" width="596">

              <h2 style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;">
             Hej ${name}</h2>
             <h4>
Tack att du har bokat SIV hos Skysport.
Du har skickat följande bokningsuppgifter.
Om nånting är fel eller inte stämmer gärna kontakt oss på: bokning@skysport.se
Vi kommer snart att skicka ut mer information till dig inför kursen.
mvh
Skysport AB
</h4>
&nbsp; 
  <p>Detta är en automatisk bokningsbekräftelse SIV kurs hos Skysport</p>

        
<h4>Du här bokad med följande informationen:</h4>

  <p class="p1">
  Grundkurs bokad datum: <b>${kursDate}</b><br>
  Veckan: <b>${kursVeckan}</b><br>
  Grundkurs pris: <b>${kursPriceISO}</b><br>
  Boende: <b>${boendeType}</b> <br>
  Boendepris: ${boendePriceISO}<br>
  Lägenhetsförfrågan: <b>${apartmentRequest}</b><br>
  Summa Grundkurs och boende: <b>${summa}</b><br><br>
  Namn: <i>${name}</i><br>
  Tel: <i>${tel}</i><br>
  Tel dagtid: <i>${telday}</i><br>
  Email: <i>${email}</i><br>
    Adress: <i>${adress} ,&nbsp; ${postnr},&nbsp;  ${city},&nbsp;  ${country}</i><br>
    Vikt: <i>${weight}</i>&nbsp;   Födelseår: <i>${birthyr}</i><br>
  Gå med nyhetsbrev: <i>${newsletter}</i><br>

  Meddelande: <i>${Meddelande}</i>
  </p>
 Godkänna kursvilkor: <i>${kursvilkor}</i><br>
 Gå med nyhetsbrev: <i>${newsletter}</i><br>
<p class="p2">skickade: ${BookingTimestamp}</p>


      

   

      <!-- Start image -->
      <img style="width: 600px; max-width: 600px; height: 342px; max-height: 342px; text-align: center;" alt="Image" src="https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/email-versions/hitta-oss_image.webp" align="center" width="600" height="342">
      <!-- End image -->

      <!-- Start footer -->
      <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px; background-color: #000000;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">

              <!-- Your inverted logo is here -->
              <img style="width: 128px; max-width: 128px; height: 26px; max-height: 26px; text-align: center; color: #ffffff;" alt="Logo" src="https://strapi-cdn-2.s3.eu-north-1.amazonaws.com/skysport25/img/Skysport_Logo-white.png" align="center" width="128" height="26">

              <p style="font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                Skysport AB Årevägen 173, 837 52 Åre Sweden
              </p>
               <p style="font-size: 13px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 400; text-decoration: none; color: #ffffff;">
                © 2025 Skysport AB
              </p>

              

            </td>
          </tr>
        </tbody>
      </table>
      <!-- End footer -->

      <!-- Start unsubscribe section -->
      <table align="center" style="text-align: center; vertical-align: top; width: 600px; max-width: 600px;" width="600">
        <tbody>
          <tr>
            <td style="width: 596px; vertical-align: top; padding-left: 30px; padding-right: 30px; padding-top: 30px; padding-bottom: 30px;" width="596">

              <p style="font-size: 12px; line-height: 12px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; color: #000000;">
                Tel: 0647-51186  Mobil: 070-5699089 Epost: info@skysport.se
              </p>

 

              <p style="font-size: 12px; line-height: 12px; font-family: 'Helvetica', Arial, sans-serif; font-weight: normal; text-decoration: none; color: #919293; margin-top: 30px;">
                Besök hemsidan: <a style="text-decoration: none; color: #919293;" href="https://skysport.se"><u>www.skysport.se</u></a>
              </p>

            </td>
          </tr>
        </tbody>
      </table>
      <!-- End unsubscribe section -->

  </div>

  </body>

</html>`
}

export  {
    htmlGrundKundBookTemplate
}
