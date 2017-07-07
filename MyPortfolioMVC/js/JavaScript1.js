$(document).ready(function () {

    $('#fbcode').hide();

    $('#btnfbcode').click(function () {
        $('#fbcode').toggle();
    });
    
   $('#palindromeCode').hide();

    $('#factorialCode').hide();

    $('#numbersCode').hide();

    $('[data-toggle="popover"]').popover()

    //sure. This is the file in MVC when i clicked on that view code in mvc and it dose not work like the html page =, sir
    +//Ok. I am going to just take a look around

    $('#btnPalindrome').click(function () {
        $('#palindromeCode').toggle();
    })

    $('#btnFactorial').click(function () {
        $('#factorialCode').toggle();
    })

    $('#btnNumbers').click(function () {
        $('#numbersCode').toggle();
    })
});

