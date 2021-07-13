 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBzBQ0O_hQxS03HC2uj_3IZacdH8ejgSuU",
    authDomain: "contactform-23582.firebaseapp.com",
    databaseURL: "https://contactform-23582-default-rtdb.firebaseio.com",
    projectId: "contactform-23582",
    storageBucket: "contactform-23582.appspot.com",
    messagingSenderId: "816182475887",
    appId: "1:816182475887:web:4f1010e5d2e5cc3226219a",
    measurementId: "G-SVZLZGSJPL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const form = document.getElementById('contactForm'); // Obtenemos la referencia al formulario

    if(form){ // Si existe nuestro elemento en memoria este se quedara escuchando al evento submit del formulario
      form.addEventListener('submit', contactForm); // Al momento de enviar el formulario, ejecuta la función "contactform"
    }

    function contactForm(event) {
      event.preventDefault(); // Prevenimos el comportamiento por defecto de un formulario (Enviar por URL los parametros)
      const name = document.getElementById('name'); // Obtenemos la referencia a cada uno de nuestros elementos del formulario
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const message = document.getElementById('message');
      const country = document.getElementById('country');
      const data = {
        'name': name.value,
        'email': email.value,
        'phone': phone.value,
        'message': message.value,
        'country': country.value
      }; // Creamos un objecto con todos los elementos de nuestro formulario.
      saveContactForm(data); // Enviamos la información obtenida por el usuario a la función que se encargara de guardar la información en Firebase
      form.reset(); // borramos todos los campos. 
    }

  function saveContactForm(data) {
    firebase.database().ref('Contactos').push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
      .then(function(){
        
        alert('Tu mensaje ha sido enviado.'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
      })
      .catch(function(){
        alert('Error al enviar su mensaje.'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
      });
  };


  