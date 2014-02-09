function Alert(){
var body ="I have not reported BackSafe in the allotted time! Please check the BackSafe app for more information."

FB.api('/me/feed', 'post', body, function(response) {
   if (!response || response.error) {
       alert('Error occured');
   } else {
       alert('Post ID: ' + response.id);
   }


});
