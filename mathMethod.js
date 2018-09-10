// <!DOCTYPE html>
// <html>
// <head>
// </head>    
// <body>
//     <p>'The following webpage contains a script that has a function that uses Math.round, Math.sqrt and Math.floor to round a floating-point number to the nearest integer, calculate the square root of a floating-point number and round it to an integer, round a floating-point number to the nearest tenths position, round a floating-point number to the nearest hunderdths position, and round a floating-point number to the nearest thousandths position.'</p><br>
//         <form style="text-align: right;"> 
//             <table>
//             <tr><td>Enter a floating-point number: <input type="number" id="float" step=""></td></tr>
//             <tr><td>Floating-point number entered: <input type="number" id="floatEnter" readonly></td></tr>
//             <tr><td>Rounded to the nearest integer: <input type="number" id="floatRounded" readonly></td></tr>
//             <tr><td>Square root rounded to an integer: <input type="number" id="floatSquared" readonly></td></tr>
//             <tr><td>Rounded to the nearest tenth: <input type="number" id="floatRoundedTenth" readonly></td></tr>
//             <tr><td>Rounded to the nearest hundredth: <input type="number" id="floatRoundedHundredth" readonly></td></tr>
//             <tr><td>Rounded to the nearest thousandth: <input type="number" id="floatRoundedThousandth" readonly></td></tr>
//             <tr><td><button type="button" onclick="math()">Submit</button><button type="reset">Reset</button><br><br><br></td></tr>
            <script>
                function math(){
                    let float = document.getElementById("float").value;
                    var parsefloat = parseFloat(Number(float));
                    var floatRoundedTenth = Number(float).toFixed(1);
                    var floatRoundedHundredth = Number(float).toFixed(2);
                    var floatRoundedThousandth = Number(float).toFixed(3);
                    var floatMax = Number(float).toFixed(4);
                    if(!(float > 0)){
                        alert("Enter a floating-point number greater than 0");
                        let float = document.getElementById("float").value = " ";
                        let floatEnter = document.getElementById("floatEnter").value = " ";
                        let floatRounded = document.getElementById("floatRounded").value = " ";
                        let floatSquared = document.getElementById("floatSquared").value= " "; 
                        let floatRoundedTenth = document.getElementById("floatRoundedTenth").value = " ";
                        let floatRoundedHundredth = document.getElementById("floatRoundedHundredth").value = " ";
                        let floatRoundedThousandth = document.getElementById("floatRoundedThousandth").value = " ";
                    }else if(float < floatMax){
                        alert("Enter a floating-point number with at least 4 decimal places."); 
                        let float = document.getElementById("float").value = " ";
                        let floatEnter = document.getElementById("floatEnter").value = " ";
                        let floatRounded = document.getElementById("floatRounded").value = " ";
                        let floatSquared = document.getElementById("floatSquared").value= " "; 
                        let floatRoundedTenth = document.getElementById("floatRoundedTenth").value = " ";
                        let floatRoundedHundredth = document.getElementById("floatRoundedHundredth").value = " ";
                        let floatRoundedThousandth = document.getElementById("floatRoundedThousandth").value = " ";
                    }else if(float == ""){
                        alert("Enter a floating-point number greater than 0");
                        let float = document.getElementById("float").value = " ";
                    }else{
                    document.getElementById("floatEnter").value = parsefloat;
                    document.getElementById("floatRounded").value = Math.round(parsefloat);
                    document.getElementById("floatSquared").value= Math.round(Math.sqrt(parsefloat)); 
                    document.getElementById("floatRoundedTenth").value = floatRoundedTenth;
                    document.getElementById("floatRoundedHundredth").value = floatRoundedHundredth;
                    document.getElementById("floatRoundedThousandth").value = floatRoundedThousandth;
                    }    
                }
            </script>
//         </table> 
//     </form>
// </body> 
// </html>    
