
const htmlNewsSkyTemplate = ( email, BookingTimestamp) => {
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
                                          Nyhetsbrev Anmälning
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
                       
                        <p style="font-weight: bolder; font-size: 18px; letter-spacing: 0.025em; color:black;">
                         Email:  ${email}
                        </p>
                    

                    </td>
                </tr>

                <tr style="display: inline-block;">
                    <td style="min-height: 150px; padding: 6px 20px; border: none; border-bottom: 2px solid #361B0E; background-color: white;">
                       
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
    htmlNewsSkyTemplate
}
