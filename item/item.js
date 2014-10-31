/* 

== Settings 

  - Replace Secret_item_Password with password for your this item that you [same typed in generator.js]
  - Replace encoding_password with password used to get the normal data of the user [same typed in generator.js]

*/

var code_text1 = $('.buyer').text();
var decrypted = CryptoJS.AES.decrypt(code_text1, 'encoding_password');
var plaintext2 = decrypted.toString(CryptoJS.enc.Utf8);
var code_text2 = plaintext2.match(/[^[\]]+(?=])/g);
var secretBlog = code_text2[0];
var urlBlog = code_text2[1];
if (secretBlog == 'Secret_item_Password' && window.location.href.indexOf(urlBlog) > -1) {

    // Item Js codes under this
	
}