$(document).ready(function(){
    console.log("jquery is loaded my guy")

    $(".bitchin-button").click(function() {
        var inputId = $(this).val(); 
        // console.log(inputId);
        $.ajax({
            url: '/api/burgers/' + inputId,
            type: 'PUT',
            success: function(response) {
            location.reload();
            }
         });
    })
})