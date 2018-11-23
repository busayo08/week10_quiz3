$('#add').click(
function(){
    if (textfield.value == ""){
    return false;           
    } else {
    var value = $('#textfield').val();
    $('#list').append('<li>'+value+'</li>');
    }
}
)
