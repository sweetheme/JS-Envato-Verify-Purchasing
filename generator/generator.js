/* 

== Settings 

  - Replace Secret_item_Password with password for your this item 
  - Replace encoding_password with password used to get the normal data of the user
  - Replace 1234567 with your item ID
  - Replace API_KEY with your envato Api Key 

*/

$('#container').prepend("<form action='' class='envato-form' method='' name='envato-form'><input class='user' name='user' placeholder='Envato username' type='text' value=''/><input class='code' name='code' placeholder='Verify purchase code' type='text' value=''/><input class='url' name='url' placeholder='Your blog URL' required='url' type='text' value=''/><input class='button' type='button' value='Generate code'/></form><textarea class='byrcode' readonly='readonly' style='display:none'/><div class='welcome' style='display:none'/>");
$('.envato-form').change("input", function() {
    var form_user = $('.envato-form .user').val(),
        form_code = $('.envato-form .code').val(),
        form_url = $('.envato-form .url').val(),
        form_button = $('.envato-form .button');
    $.get('http://marketplace.envato.com/api/edge/sweetheme/API_KEY/verify-purchase:' + form_code + '.xml', function(data) {
            var Item_id = $(data).find("item-id").text();
            var buyer = $(data).find("buyer").text();
            var item_name = $(data).find("item-name").text();
            if (Item_id == 1234567 && buyer == form_user) {
                $('.welcome').text('Congratulations ' + buyer + ' Enjoy ' + item_name);
                var encrypted = CryptoJS.AES.encrypt('[Secret_item_Password][' + form_url + ']','encoding_password');
                $('.byrcode').val(encrypted);
            }
        });
    form_button.on('click', function() {
        $('.byrcode').show();
        $('.welcome').show();
    });
});