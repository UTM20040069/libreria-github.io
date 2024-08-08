const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})

//notificacion

        // Se crea una variable para contener como objeto nuestro botón y se agrega el evento click al botón
    


        /////////////////////////////////////////
        //var libros = document.getElementById("libros");

      //  libros.addEventListener('click',notify(), function(){
            
        //})

        //function notify(){

           // if (!("Notificacion" in window)) {

               // alert("Tu navegador no soporta notificaciones");

           // }else if (Notification.permission === "granted"){

               // var notification = Notification("Mi primer notificacion");

            
           // }else if(Notification.permission !== "denied"){

               // Notification.requestPermission(function(permission){
                    
                   // if(Notification.permission === "granted"){

                //        var notification = new Notification("Hola Mumdo");
                //    }

                
            //  });

        //} 
    //}    