// jQuery animation for brand name and logo
$(document).ready(function(){
    $("#brandname").animate({ // brand name sliding right to its position
      right: '0px',
    },700);
    $("#logoimg").fadeIn(1800);
  });

//Load Facebook SDK for JavaScript
window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v9.0'
    });
  };
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(function () {
//WhatsApp plug-in
    var whatsapp_settings ={
        phone: '+201115696686', //WhatsApp Business phone number
        headerTitle: 'أرسل لنا رسالة على الواتس اب', //Popup Title
        popupMessage: 'مرحبا كيف يمكننا مساعدتك ؟', //Popup Message
        showPopup: true, //Enables popup display
        buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
        position: "right" //Position: left | right
    }
    if ($(window).width()<576){ // if window size is extra small
      /*adjusting whatsapp button for small screens, making its position absolute instead of fixed
      so that FB prompt doesn't cover it*/
      var pageURL = $(location).attr("href");
      if (pageURL=="https://eklil-oils.com/products.html"){ //adjusting settings based on page
        $('#WAButton').floatingWhatsApp(whatsapp_settings);
        $('#WAButton').css({"top":"325px","left":"46%", "position":"absolute"}); //adjusting position of button
        $('.floating-wpp-button').css({"height":"35px","width":"35px"});
      }
      else{
        whatsapp_settings.position="left"; // for pop-up window to show correctly
        $('#WAButton').floatingWhatsApp(whatsapp_settings);
        $('#WAButton').css({"bottom":"77px","left":"40px", "position":"absolute"}); //adjusting position of button
        $('.floating-wpp-button').css({"height":"45px","width":"45px"});
      }
    }
    else{ //if window size is not extra small
      $('#WAButton').floatingWhatsApp(whatsapp_settings);
      $('#WAButton').css({"bottom":"24px","right":"100px","left":"auto","z-index":"1"});
      $('.floating-wpp-button').css({"height":"60px","width":"60px"}); //decreased size to match FB button
    } //end of whatsapp plugin code

    //animating clicking functionality for nav buttons on small devices
    if ($(window).width()<576){ // if window size is extra small
      //unbinds the hover event for navigaton buttons so that a button doesn't get stuck hovered on phones
      $('.nav-item').unbind("mouseenter mouseleave");
      $('.nav-item').click(function(){ //animates the button clicking
          $(this).animate({backgroundColor:"white",color:"#ffb836"},50).delay(150).animate({backgroundColor:"#ffb836",color:"white"},100);
      })
    }
});