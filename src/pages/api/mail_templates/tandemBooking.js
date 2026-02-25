
const htmlTandemTemplate = (name, tel, email, Meddelande, TandemDate, AltDate, AntalPass, skysportUpISO, skistarUpISO, Bookingtimestamp) => {
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
    <title>Tandem Bokning hos Skysport i Åre</title>
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

              <h2 style="font-size: 20px; line-height: 24px; font-family: 'Helvetica', Arial, sans-serif; font-weight: 600; text-decoration: none; color: #000000;">Hej!
Tack för din bokning. </h2>
  <h3>Detta är en automatisk bokningsbekräftelse på ditt önskade tandemflyg.</h3>

              <span style="color: #ff0000;"><em>This message is repeated in English following the Swedish version.</em></span>


<h3><strong>Vänligen läs hela meddelandet.</strong></h3>

<h4>Vi flyger vanligen mellan 9.00-16.00.</h4>
<h4>
<strong>Vi hör av oss dagen innan din önskade dag för tid för samling, om vädret är OK, eller om flygdagen ställs in på grund av vädret. Om du inte har fått något samtal från oss, så har du ingen samlingstid.
</strong></h4>
<h4>Om du bokat ditt flyg efter 18.00 dagen innan så har du ingen tid.
Då måste du ringa: 070 211 38 42.</h4>
<h4>Du har bokat med följande information:</h4>

  <h5>
  Bokad datum: <b>${TandemDate}</b><br>
  Alternativ flyg datum: <b>${AltDate}</b><br>
  Antal passagerare: <b>${AntalPass}</b><br>
  Namn: <i>${name}</i><br>
  Tel: <i>${tel}</i><br>
  Email: <i>${email}</i><br>
  Meddelande: <i>${Meddelande}</i>
  </h5>


<p class="p2">skickade: ${Bookingtimestamp}</p>
<h4><strong>INFORMATION INFÖR FLYGNINGEN</strong></h4>
<h5><strong>Samlingsplats:</strong></h5>

<h5 style="text-wrap: balance;">
Skysport/Lake Lodge vid landningsplatsen Draklanda.<br>
Adress: Årevägen 173B.<br>
Årevägen är den nedre vägen i Åre, som går längs Åresjön. Det är skyltat från bilvägen.
Det går bra att köra bil ända fram till vår reception. Här finns också plats om medföljande/anhöriga vill vänta under tiden flygningen genomförs. Landning sker precis vid receptionen.
</h5>
<h5></h5><strong>Samlingstid: </strong></h5>
<h5 style="text-wrap: balance;">
Vi kontaktar er dagen innan flygning, någon gång mellan 14.00-20.00. Då kommer vi meddela om vädret är bra för flygning och vilken tid  er flygning kommer att genomföras.

Har ni lång väg att åka är det viktigt att kontrollera väderprognosen innan. Annars kan det bli en resa till Åre utan att flygningen går att genomföra. Är ni osäkra, stäm av med oss på telefon.
Säger väderprognosen för dåligt väder blir flygningen inställd och du behöver då boka om till en dag när vädret är bättre.
</h5>
<h5><strong>Kläder:</strong></h5>
<h5 style="text-wrap: balance;">
Vi flyger i 40 km/h så det blir en del köldeffekt, därför rekommenderas vindtäta kläder. Vi vill gärna att ni ska ha handskar och ett par stabila skor/kängor. En tunn mössa kan vara skönt att ha innanför hjälmen.
</h5>
<h5><strong>Väder information:</strong></h5>
<h5 style="text-wrap: balance;">
Flygningen är väderkänslig och kan bli inställd pga stark vind eller regn. Vinden får inte vara starkare än 8 m/s på startplatsen. Vi måste också ha fri sikt från startplatsen till landningsplatsen. Vinden får inte heller vara alltför byig (max 5 m/s i variation på 5 min),
för då blir flygningen väldigt turbulent, vilket inte är trevligt för varken pilot eller passagerare. En vindmätare som uppdateras var 5:e min finns på startplatsen på Åreskutan  <a href="http://meac.se/sub_2/hummeln/wind.asp">http://meac.se/sub_2/hummeln/wind.asp</a>
</h5>

<h5><strong>Väderprognos:</strong></h5>
<h5 style="text-wrap: balance;">

Här finner du en 10 dygns prognos för Åre

<a href="https://www.smhi.se/q/M%C3%B6rvikshummeln/%C3%85re/2691141" target="_blank" rel="noopener">Väder</a>

För att flygvädret skall vara bra ska prognosen visa SÅ LITE VIND SOM MÖJLIGT. Och inte nederbörd med regn eller snö. Om nederbörden kommer och går kan det dock vara möjligt att flyga före eller efter.
Vindriktningen har också en viss betydelse. Mest gynnsamt är ostlig, sydlig eller västlig vind. Nordlig vind går att flyga på, men den startplatsen ligger väldigt nära Åreskutans topp, och är ganska utsatt för dålig sikt och stark vind.

</h5>

<h5><strong>Betalning:</strong></h5>
<h5 style="text-wrap: balance;">
Sker på plats efter flyget med swish eller kort. Vi tar även kontanter.
Har du presentkort måste du ta med det. En bild på presentkortet, där koder och datum finns med, fungerar också.
</h5>
<h5><strong>Transport till startplatsen: </strong></h5>
<h5 style="text-wrap: balance;">
Om flygningen sker från Åreskutans topp, sker upptransport med VM8:an och Gondolen. Om flygningen sker från den lägre startplatsen, Hummeln, sker upptransport med VM6:an och Hummelliften. Priset för liftkortet är ${skistarUpISO}. Under tider på dagen/året, när liftarna inte är öppna, sker transport upp med Skysports minibuss. Biltransporten kostar ${skysportUpISO}.
</h5>
<h5><strong>Boende:</strong></h5>
<h5 style="text-wrap: balance;">
Varför inte ta en eller ett par nätters övernattning i Åre? I nybyggda Lake Lodge finns lägenheter med 4 el 6 bäddar. Kök, wc, dusch, bastu, tv, wifi, parkering. Ligger precis vid Åresjöns strand och landningsplatsen Draklanda

Ta gärna en titt på hemsidan; <a href="http://lakelodgeare.com">http://lakelodgeare.com</a>
Kan bokas i förväg eller i mån av plats, på kort varsel.

</h5>

Vi hoppas att vädret blir bra, och vi lovar att göra allt vi kan för att din flygning ska bli så lyckad som möjligt!
<br>

<em>Hälsningar</em>

Skysport Åre

<em> </em>Telefon: 070-211 38 42

<a href="https://skysport.se"><em>https://skysport.se</em></a>

<a href="http://lakelodgeare.com"><em>http://lakelodgeare.com</em></a>


<h4>Hello,  We hereby confirm the booking of tandem flights on the details below. </h4>
<h5 style="text-wrap: pretty;">
 Tentativ meeting time is 9.00, <strong><span id="result_box" class="" lang="en"><span class="">We will contact you the night before flight, sometime approx between 18.30-20.30.</span> <span class="">Then we will announce whether the weather is good for flight and what time flight will be carried out.</span></span></strong> We meet at the landing Draklanda. (the reason for the early collection is that the wind usually is weakest  in the morning, ensuring that the flight will be off)

The flight is weather sensitive and may be cancelled due to strong wind or rain.  You can find a forecast for Åre here:

<a href="https://www.smhi.se/q/M%C3%B6rvikshummeln/%C3%85re/2691141">https://www.smhi.se/q/M%C3%B6rvikshummeln/%C3%85re/2691141</a>

We'll be on the phone, and agree when it's the right weather promised the weather forecast.  If you want to contact us please do so at the following numbers.

PAYMENT; takes place after the flight by card or cash, we are happy to take cash (no prepayment). If you have gift cards that have been paid in advance to take with it.

We also offer accommodation in the new built Lake Lodge, which is located right on the lake and our landing site. Please take a look at the website; http://lakelodgeare.com

Phone: +4670-2113842

Best Regards, Skysport Åre

https://skysport.se
https://lakelodgeare.com
</h5>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- End single column section -->

      

   

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
    htmlTandemTemplate
}
