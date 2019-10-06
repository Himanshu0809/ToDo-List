// $("li").click(function () {        click only add listeners for existing elements
$("ul").on("click", "li", function () {     //on() adds listeners for potential future elements
                                            //we want to run the cde wehn li is clicked inside a ul
    $(this).toggleClass("completed")
});

$("ul").on("click", "span" ,function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text'").keypress(function(event){
    if(event.which===13){
        var todoText=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + todoText + "</li>");
    }
});

$(".fa-plus").click(function()
{
    $("input[type='text'").fadeToggle();
})