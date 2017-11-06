


//this function on click will get whatever the user typed into the input box and put it on the dom 
//as a button with a attribute of carModels='whatever the input is' 

$('#done').on('click',function(){
    //gets the value the user wrote
    var input = document.getElementById('box').value;
//sets up creating a button
 
    var buttons = $('<button>  </button>'); 
    // buttons.attr('id','thisbutton')

    //gives the button tag a attribute of carModels ='input' 
    buttons.attr('carModels',input);

   //adds the input to the button tag as text on the dom
    buttons.html(input)
    console.log(buttons)
    console.log(input);
    $('.buttons').append(buttons);
    
})
//the function uses the giphy api to search through its library of images
$('body').on('click', 'button', function(){
    // lets the click function to know what button to press using the this by finding ones that one have
    // a value for carModels and puts that value into a variable 

    var cars = $(this).attr('carModels');
    //sets the search parameters for the giphy api
    var search= 'https://api.giphy.com/v1/gifs/search?q='+ cars +
    '&api_key=ropdsAGp3DkXzD5Kb4qmGD3oRmUz716T&limit=10';
//calls the api
$.ajax({
    url:search,
    method: "GET"
})
//gets a response from the giphy api
.done(function(response){
    var re = response.data;
    console.log(response.data);
// runs a for loop looks that puts the number of images that are in our search parameters into the dom
    for(i=0;i < re.length; i++) {
    var results = response.data[i].images.fixed_height.url;
   //creats an img tag with the seach from the giphy api and puts it on the dom
var img = $('<img>');
img.attr('src',results)
    $('#gif').prepend(img)
    
    }

    console.log(results);
});
});
