var image = [ "img2.jpg",
		               "img3.jpg",
		              "img4.jpg",
		              "img5.jpg"];
		            
                   
var i =0;

function slides(){
document.getElementById("slideimage").src = image[i];
if (i<(image.length-1))//0<3
{
  i++;
  }
  else 

  	i=0;
}

setInterval(slides,2000)

$(document).ready(function()
{
    $("#f2").hover(function(){
        $("#f2").animate({width:"400px"},500)
    },
    function()
    {
        $("#f2").animate({width:"300px"},500)
    })


    $("#f3").hover(function(){
        $("#f3").animate({width:"400px"},500)
    },
    function()
    {
        $("#f3").animate({width:"300px"},500)
    })


    $("#f4").hover(function(){
        $("#f4").animate({width:"400px"},500)
    },
    function()
    {
        $("#f4").animate({width:"300px"},500)
    })

})