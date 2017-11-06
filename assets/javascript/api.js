



$('#done').on('click',function(){
    var input = document.getElementById('box').value;

    var buttons = $('<button>  </button>'); 
    // buttons.attr('id','thisbutton')
    buttons.attr('carModels',input);

   
    buttons.html(input)
    console.log(buttons)
    console.log(input);
    $('.buttons').append(buttons);
    
})
$('button').on('click',function(){
    var cars = $(this).attr('carModels');
    
    var search= 'https://api.giphy.com/v1/gifs/search?q='+ cars +
    '&api_key=ropdsAGp3DkXzD5Kb4qmGD3oRmUz716T&limit=10';

$.ajax({
    url:search,
    method: "GET"
})
.done(function(response){
    var re = response.data;
    console.log(response.data);
    for(i=0;i < re.length; i++) {
    var results = response.data[i].images.fixed_height.url;
   
var img = $('<img>');
img.attr('src',results)
    $('#gif').prepend(img)
    
    }

    console.log(results);
});
});
