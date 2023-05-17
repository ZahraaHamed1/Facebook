
// index.html 

(function () {
  'use strict';
  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation1');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})
  ();
(function () {
  'use strict';
  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation2');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})
  ();

  // email js
function sendMail(){
  var parans = {
    namejs : document.getElementById("validationCustom01").value,
    emailjss : document.getElementById("validationCustom03").value,
  };
  const serviceId = "service_nahdn4d";
  const templateId = "template_u1ybk9a";
  emailjs.send(serviceId, templateId, parans)
  .then(
    res => {
      document.getElementById("validationCustom01").value ="";
      document.getElementById("validationCustom03").value ="";
      console.log(res);
      alert("your message sent successfuly");
    })
    .catch((err) => console.log(err));
}
// email js
// index.html






