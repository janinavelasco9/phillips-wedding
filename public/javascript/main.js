$( document ).ready(function() {
    $(function(){
       $("a").each(function(){
           if ($(this).attr("href") == window.location.pathname){
                   $(this).addClass("active");
           }
       });
   });
});
