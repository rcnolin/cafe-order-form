$(document).ready(function(){
    $('#orderBtn').click(function(){
        let name = $('input[name=customername]').val();
        let coffeeType = $('input[name=coffeeType]:checked').val();
        let extras = [];
        $('input[name=extras]:checked').each(function(){
            extras.push($(this).val());
        });

        // console.log(name);
        // console.log(coffeeType);
        // console.log(extras);
        let total = 0;

        //Add the coffee type cost
        if(coffeeType == "turkish"){
            total += 3;
        }else if(coffeeType == "american"){
            total += 5;
        }else if(coffeeType == "iced_latte"){
            total += 7;
        }

        //Add the extras cost
        for(let i = 0; i < extras.length; i++)
        {
            let extra = extras[i];

            if(extra == "extra_coffee"){
                total += 1.5;
            }else if(extra == "whippedcream"){
                total +=2;
            }else if(extra == "extra_caramel"){
                total += 3;
            }
        }

        //Print report
        let output = `Name: ${name} <br> Total: $${total.toFixed(2)}`;
        //output += `Total: $ ${total}`;

        $('#result').html(output);
    });
})