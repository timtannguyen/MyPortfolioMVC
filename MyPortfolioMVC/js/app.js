

    $("#fizzBuzz1").click(function () {
        var num1 = $('#fbNum1').val()
        var num2 = $('#fbNum2').val()
        if (num1 < 1 || num2 < 1 || num1 > 100 || num2 > 100)
        {
            alert("Please enter the number between 1 to 100")
            clear('#fbNum1', '#fbNum2')
        }
        
        else{
            var array = []; arr = [];
            $("#fb input").each(function () {
                array.push(Number($(this).val()));
            })
            for (var i = 1; i <= 100; i++) {
                if (i % array[0] == 0 && i % array[1] == 0) {
                    arr.push("fizzbuzz");
                }

                else if (i % array[0] == 0) {
                    arr.push("fizz");
                }

                else if (i % array[1] == 0) {
                    arr.push("buzz");
                }

                else {
                    arr.push(i);
                }
            }
        }
        //var arr = arr.toString();
        var arr = arr.join(", ");
        $("#answerFizzBuzz").html(arr);
    
    });


    $("#btnClear").click(function () {
        $(".form-horizontal1 input, .form-horizontal1 #answerFizzBuzz").each(function () {
            $(this).val("");
            $(this).empty();
        })
    })

    function clear(num1, num2) {
        $(num1).val("");
        $(num2).val("");
    }


    //Palindrome Function

    $("#submit").click(function () {
        var str = $("#typeWords").val();
        str = str.toLowerCase();
        str = str.replace(/[\W_]/g, "");
        var inputStr1 = str.split("").reverse().join("");

        if (inputStr1 == str) {
            $("#answer").html("Yes, " + str + " IS a palindrome!")
        }
        else {
            $("#answer").html("No, " + str + " IS NOT a palindrome!")
        }

    });

    $("#btnClearPal").click(function () {
        $("#typeWords, #answer ").each(function () {
            $(this).val("");
            $(this).html("");
        })
    })

    //End Palindrome function


    //Start off factorialFunc

    $("#result").click(function () {
        var num = parseInt($("#inputNumber").val());
        if (num == 0) {
            return document.getElementById("answer1").innerHTML = 1;
        }
        else if (/\./.test(num)) {
            $("#answer1").html("Please enter an integer number");
        }
        else if (num > 150) {
            $("#answer1").html("The number you have entered is too large. Please keep it between 1 and 150.");
        }
        else {
            var number = 1;
            for (var i = num; i > 0; i--) {
                number *= i;
            }
        }
        $("#answer1").html("The factorial number is: " + number);
    });

    $("#cls").click(function () {
        $("#inputNumber, #answer1").each(function () {
            $(this).val("");
            $(this).empty();
        })
    })

    //End of Factorial function

    //Start of function Number App

    $("#linkOfCal").click(function () {
        var numArray = [], total = 0, i = 0; product = 1;
        $("#wholeNumber input").each(function () {
            i++;

            numArray.push($(this).val());
            total += parseInt($(this).val());
            mean = total / i;
            product *= (parseInt($(this).val()));
        })
        var resultMax = Math.max.apply(Math, numArray)
        var resultMin = Math.min.apply(Math, numArray)
        $("#output1").html("The maximum number is: " + resultMax);
        $("#output2").html("The minimum number is: " + resultMin);
        $("#output3").html("The summation is: " + total);
        $("#output4").html("The mean is: " + mean)
        $("#output5").html("So product of all numbers: " + product);
    });

    $("#clr1").click(function () {
        $("#wholeNumber input, #manyOutputs p").each(function () {
            $(this).val("");
            $(this).empty();
        })
    });


    //End of function Number App
