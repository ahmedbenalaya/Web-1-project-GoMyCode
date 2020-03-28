$(document).ready(function(){

    $('.form-control').focus(function(){
        $(this).css('background-color', 'LightGoldenRodYellow');

    });
    $('.form-control').blur(function(){
        $(this).css('background-color', 'LightGray');

    });
});
$(function(){
    $('.open').click(function(){
            $('.box').toggle();
                });

    $('.open0').click(function(){
                $('.box0').toggle();
                    });

    $('.open1').click(function(){
                    $('.box1').toggle();
                        });
 
   $('.open2').click(function(){
                    $('.box2').toggle();
                            });
});
            /////////////////
              // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBUusIJteFfJb-FEYPCFpS7ySWCEuPbQJ4",
    authDomain: "project-web-1-6f6ea.firebaseapp.com",
    databaseURL: "https://project-web-1-6f6ea.firebaseio.com",
    projectId: "project-web-1-6f6ea",
    storageBucket: "project-web-1-6f6ea.appspot.com",
    messagingSenderId: "442773292597",
    appId: "1:442773292597:web:763db220fd00fa85cb537c",
    measurementId: "G-30E85MJNQV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

            var messagesRef = firebase.database().ref('myDatabase');
function submitForm(e){
    e.preventDefault();
    var usr = document.getElementById('usr').value;
    var email = document.getElementById('email').value;
    var Nbr = document.getElementById('Nbr').value;
    var QW = document.getElementById('QW').value;
    saveMessage(usr,email,Nbr,QW);
}
document.getElementById('contactForm').addEventListener('submit', submitForm);
function saveMessage(usr,email,Nbr,QW){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        usr: usr,
        email: email,
        Nbr: Nbr,
        QW: QW
    });
}
$(".open").hover(function(){
    $(this).css("opacity","0.7");
    $(this).css("text-decoration","underline");

},function(){
$(this).css("opacity","1");
$(this).css("text-decoration","none");

});
$(".open0").hover(function(){
    $(this).css("opacity","0.7");
    $(this).css("text-decoration","underline");

},function(){
$(this).css("opacity","1");
$(this).css("text-decoration","none");

});$(".open1").hover(function(){
    $(this).css("opacity","0.7");
    $(this).css("text-decoration","underline");

},function(){
$(this).css("opacity","1");
$(this).css("text-decoration","none");

});$(".open2").hover(function(){
    $(this).css("opacity","0.7");
    $(this).css("text-decoration","underline");

},function(){
$(this).css("opacity","1");
$(this).css("text-decoration","none");

});
