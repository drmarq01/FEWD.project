//                  EMAIL ALERT



$('.button').on('click', function(event){
  alert('You sure??');
});


//         RANDOM BACKGROUND COLOR


$('.html').click(function() {
   var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $(this).css('background-color', randomColorChange);
    });
