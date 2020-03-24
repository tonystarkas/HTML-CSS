var lang;
var arrLang = {
    'en' : {
    			'home': 'HOME',
    			'products': 'PRODUCTS',
    			'templates': 'TEMPLATES',
    			'pricings': 'PRICING',
    			'about': 'ABOUT',
    			'sign-in': 'SIGN IN',
    			'sign-up': 'SIGN UP',
    			'header': 'Create Stunning Visual Media',
    			'paragraph': 'Super simple tool to create trendy videos and pictures for your ads, social media, blogs and websites. Make your project stand out!',
    			'button': 'Create design ⮕',
    			'email': 'Your email',
    			'b': 'Your password',
    			'c': 'Sign in',
    			'languages': 'Languages',
    			'english': 'English',
    			'lithuanian': 'Lithuanian',
			'username': 'username',
'password':'password',
'Registruotis':'Sign-up',
'your name': 'Your name',
'your email':'Your email',
'your password':'Your password'
    		},
    		'lt' : {
    			'home': 'PAGRINDINIS',
    			'products': 'PRODUKTAI',
    			'templates': 'ŠABLONAI',
    			'pricings': 'KAINORAŠTIS',
    			'about': 'APIE MUS',
    			'sign-in': 'PRISIJUNGTI',
    			'sign-up': 'REGISTRUOTIS',
    			'header': 'Kurkite Pribloškiančią Vizualinę Mediją',
    			'paragraph': 'Paprastas įrankis kurti populiarius video ir paveiksliukus jūsų reklamai, socialiniems tinklams, blogams ir svetainėms. Sukurkite išskirtinį projektą!',
    			'button': 'Kurkite dizainą ⮕',
    			'email': 'Jūsų e-mail',
    			'b': 'Jūsų slaptažodis',
    			'c': 'Prisijungti',
    			'languages': 'Kalbos',
    			'english': 'Anglų',
    			'lithuanian': 'Lietuvių',
'username': 'vardas',
'password':'slaptažodis',
'Registruotis':'Registruotis',
'your name': 'Jūsų vardas',
'your email':'Pašto adresas',
'your password':'Jūsų slaptažodis'
    		}
};
$(function(){
     $('.dropdown-item').click(function(){
        localStorage.setItem(lang, $(this).attr('id'))
        window.location.reload()
    });
    $('.nav-link').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.btn').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.dropdown-item').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.trans').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    $('.modal-content').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
$('.form-control validate').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
$('.modal-footer d-flex justify-content-center').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
$('.md-form mb-5').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
$('.modal-body').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
$('.modal-title').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
$('modal-open').each(function(index, element){
        $(this).text(arrLang[localStorage.getItem(lang)][$(this).attr('key')]);
    });
    
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();