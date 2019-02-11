
var flag;
$("ul").on("click","li",function(){
   $(this).toggleClass("comp");
});
$("ul").on("click","span",function(e){
  $(this).parent().fadeOut(500,function()
  {
$(this).remove();
  });
  event.stopPropagation();
});
var todotext;
$("input[type='text']").keypress(function()
{
  if(event.which===13)
  {
  todotext = $(this).val();
  $(this).val("");
 $("ul").append("<li> <span> <i class='fas fa-trash-alt'></i>  </span>  "+ todotext +"</li>");
}
});

$(".fa-plus").click(function()
{
  $("input[type='text'").fadeToggle();
});
function time(){
  var date=new Date();
  var h=date.getHours();
  var m=date.getMinutes();
  var s=date.getSeconds();
  
     if(h==0)
     {
         h=12;
     }
     if(s<10){
      s ="0"+s;
      }
      if(h<12)
      {
        flag=0;
      }
     if(h>=12)
     {
       flag=1;
         h=h-12;
     }
     if(h<10)
     {
         h="0"+h;
     }
    
     if(m<10)
     {
         m="0"+m;
     }
    if(flag==1)
var timex=h+":" +m + ":"  + s+" PM";
if(flag==0)
{
  var timex=h+":" +m + ":"  + s+" AM";
}
document.getElementById("clock").innerText=timex;
document.getElementById("clock").textContent=timex;
   }
   time();
   setInterval(time,1000);
   time();

   var sound = new Howl({
    src: ['qaf.mp3']
  });
  sound.play();

