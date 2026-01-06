
const htmlFortSkyTemplate = (kursName, kursDate, kursVeckan, kursPrice, boendeType,boendePriceISO, apartmentRequest, summa,totalFlyingHours,flyingHoursThisYear,totalFlights,flightsThisYear,bergsflyg,hangflyg,termikflyg,bogserflyg,ovrigflyg,name, tel, telday, email, Meddelande, weight, licNr, birthyr, adress, postnr, city, country, newsletter,checkboxOK, BookingTimestamp) => {
    return ` 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<style>
</style>

</head>
    <body style="background-color:grey">
        <table align="center" border="0" cellpadding="0" cellspacing="0"
            width="550" bgcolor="white" style="border:2px solid black">
            <tbody>
                <tr>
                    <td align="center">
                        <table align="center" border="0" cellpadding="0"
                            cellspacing="0" class="col-550" width="550">
                            <tbody>
                                <tr>
                                    <td align="center" style="background-color: #3457C1;
                                            height: 50px;">

                                        <a href="#" style="text-decoration: none;">
                                            <p style="color:white;
                                                    font-weight:bold;">
                                            ${kursName} kursbokning
                                            </p>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr style="height: 300px;">
                    <td align="left" style="border: none;
                            border-bottom: 2px solid #4cb96b;
                            padding-right: 20px;padding-left:20px">
                        <p style="font-weight: bolder; font-size: 24px; letter-spacing: 0.025em; color:black;">
                        <p class="p1">
  Fortsättningskurs: <b>${kursName}</b><br>
  Bokad datum: <b>${kursDate}</b><br>
  Veckan: <b>${kursVeckan}</b><br>
  Kurs pris: <b>${kursPrice}</b><br>
  Boende: <b>${boendeType}</b> <br>
  Boendepris: <b>${boendePriceISO}</b><br>
  Lägenhetsförfrågan: <b>${apartmentRequest}</b><br>
  Summa kurs och boende: <b>${summa}</b><br><br>

  Antal flygtimmer: <b>${totalFlyingHours}</b>&nbsp;&nbsp;  Antal timmer i år: <b>${flyingHoursThisYear}</b><br>
  Antal flyg: <b>${totalFlights}</b>&nbsp;&nbsp; Antal flyg i år: <b>${flightsThisYear}</b><br>
  Flygbehörighet: <br>
  &nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="berg" disabled  ${bergsflyg}> &nbsp;Bergsbehörighet${bergsflyg}<br>
  &nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="berg" disabled  ${hangflyg}> &nbsp;Hangbehörighet${hangflyg}<br>
  &nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="berg" disabled  ${termikflyg}> &nbsp;Termikbehörighet ${termikflyg}<br>
  &nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="berg" disabled  ${bogserflyg}> &nbsp;Bogserbehörighet${bogserflyg}<br><br>
  Övrig flygerfarenhet: <i>${ovrigflyg}</i><br><br>
  



                         Namn:  ${name}
                          </p>
                        <p style="font-weight: bolder; font-size: 18px; letter-spacing: 0.025em; color:black;">
                         Tel:  ${tel} &nbsp;&nbsp;Tel dagtid:  ${telday}
                        </p>
                        <p style="font-weight: bolder; font-size: 18px; letter-spacing: 0.025em; color:black;">
                         Email:  ${email}
                        </p>
                        <p style="font-weight: bolder; font-size: 18px; letter-spacing: 0.025em; color:black;">
                         Adress:  ${adress} , ${postnr},  ${city},  ${country}
                        </p>
                        <p style="font-weight: bolder; font-size: 18px; letter-spacing: 0.025em; color:black;">
                         Meddelande:  ${Meddelande}
                        </p>
                        <p style="font-weight: bolder; font-size: 18px; letter-spacing: 0.025em; color:black;">
                         Gå med nyhetsbrev:  ${newsletter}
                        </p>
                        <p style="font-weight: bolder; font-size: 18px; letter-spacing: 0.025em; color:black;">
                            Godkänner integritietspolicy(GDPR): <i>${checkboxOK}</i>
                         </p>
                        <p style="font-weight: bolder; font-size: 18px; letter-spacing: 0.025em; color:black;">
                         Vikt:  ${weight} <br>  SSFF licnr. : ${licNr}  <br> Födelseår: ${birthyr}
                        </p>

                    </td>
                </tr>

                <tr style="display: inline-block;">
                    <td style="min-height: 150px; padding: 6px 20px; border: none; border-bottom: 2px solid #361B0E; background-color: white;">
                        <h2 style="text-align: left; align-items: center;">${kursName} kursdate: ${kursDate}</h2>
                        <p class="data" style="text-align: justify-all;  align-items: center;  font-size: 18px;  padding-bottom: 6px;">
                            Kurspris: ${kursPrice}
                       </p>
                       <p class="data" style="text-align: justify-all;  align-items: center;  font-size: 18px;  padding-bottom: 6px;">
                            Boende val: ${boendeType} 
                       </p>
                       <p class="data" style="text-align: justify-all;  align-items: center;  font-size: 18px;  padding-bottom: 6px;">
                        Boende pris: ${boendePriceISO}
                       </p>
                       <p style="font-weight: bolder; font-size: 18px; letter-spacing: 0.025em; color:black;">
                         Lägenhetsförfrågan:  ${apartmentRequest}
                        </p>
                       <p style="font-weight: bolder; font-size: 18px; letter-spacing: 0.025em; color:black;">
                         Summa kurs och boende:  ${summa}
                        </p>
                       <p class="data" style="text-align: justify-all;  align-items: center;  font-size: 15px;  padding-bottom: 12px;">
                            Skickade: ${BookingTimestamp}
                       </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>`
}

export  {
    htmlFortSkyTemplate
}
