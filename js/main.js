$(function() {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event){
  event.preventDefault();
  $(this).ekkoLightbox();
});

// $('.slider').slick({
//   infinite: true,
//   slideToShow:1,
//   slideToScroll:1
// });


//Contact Page
//
//   $(document).ready(function() {
//   $('#contact-form').submit(function(e) {
//     // e.preventDefault();
//     var name = $('#inputName').val();
//     var email = $('#inputEmail').val();
//     var message = $('#inputMessage').val();
//
//     var data = 'name=' + name + '&email' + email + '&message' + message;
//     console.log(data);
//
//     if (!name) {
//       $('#inputName').addClass('is-invalid');
//       $('#inputName').parent().append('<span class="text-danger">Please enter a name!</span>');
//       $('#inputName').focus(function() {
//         $('#inputName').parent().find('.text-danger').hide();
//         $('#inputEmail').parent().find('.text-danger').hide();
//         $('#inputMessage').parent().find('.text-danger').hide();
//         $('#inputName').removeClass('is-invalid');
//         $('#inputEmail').removeClass('is-invalid');
//         $('#inputMessage').removeClass('is-invalid');
//       });
//
//     }else {
//       $('#inputName').addClass('is-valid');
//     }
//
//     if (!email || !email.length > 5 || !email.includes('@') || !email.includes('.')) {
//       $('#inputEmail').addClass('is-invalid');
//       $('#inputEmail').parent().append('<span class="text-danger">Please enter a valid email!</span>');
//       $('#inputEmail').focus(function() {
//         $('#inputName').parent().find('.text-danger').hide();
//         $('#inputEmail').parent().find('.text-danger').hide();
//         $('#inputMessage').parent().find('.text-danger').hide();
//         $('#inputName').removeClass('is-invalid');
//         $('#inputEmail').removeClass('is-invalid');
//         $('#inputMessage').removeClass('is-invalid');
//       });
//     } else {
//       $('#inputEmail').addClass('is-valid');
//     }
//
//     if (!message) {
//       $('#inputMessage').addClass('is-invalid');
//       $('#inputMessage').parent().append('<span class="text-danger">Please enter a message!</span>');
//       $('#inputMessage').focus(function() {
//         $('#inputName').parent().find('.text-danger').hide();
//         $('#inputEmail').parent().find('.text-danger').hide();
//         $('#inputMessage').parent().find('.text-danger').hide();
//         $('#inputName').removeClass('is-invalid');
//         $('#inputEmail').removeClass('is-invalid');
//         $('#inputMessage').removeClass('is-invalid');
//       });
//     } else if (message.length < 10) {
//       $('#inputMessage').addClass('is-invalid');
//       $('#inputMessage').parent().append('<span class="text-danger">Your message is too short! Please enter more than 10 caracters</span>');
//       $('#inputMessage').focus(function() {
//         $('#inputName').parent().find('.text-danger').hide();
//         $('#inputEmail').parent().find('.text-danger').hide();
//         $('#inputMessage').parent().find('.text-danger').hide();
//         $('#inputName').removeClass('is-invalid');
//         $('#inputEmail').removeClass('is-invalid');
//         $('#inputMessage').removeClass('is-invalid');
//       });
//     } else  {
//       $('#inputMessage').addClass('is-valid');
//     }
//
//     if ($('#inputName').hasClass('is-valid') && $('#inputEmail').hasClass('is-valid') && $('#inputMessage').hasClass('is-valid')){
//
//       $.ajax({
//         type: 'POST',
//         url: $('#contact-form').attr('action'),
//         data: $('#contact-form').serialize(),
//         dataType: 'json',
//         beforeSend: function() {
//           $('#contact-form').find('.button').append('<div class="alert alert-info mt-5 text-center">Sending message…</div>');
//         },
//         success: function() {
//           console.log('success!');
//           $('#contact-form').find('.alert').hide();
//           $('#contact-form').find('.button').append('<div class="mt-5 alert alert-success text-center">Your message was sucessfuly sent!</div>');
//           $("#contact-form").get(0).reset();
//           $('#inputName').removeClass('is-valid');
//           $('#inputEmail').removeClass('is-valid');
//           $('#inputMessage').removeClass('is-valid');
//           $('#contact-form').find('.alert-success').fadeOut(4000, "linear");
//         }
//       });
//     }
//   });
// });

//
//   $(document).ready(function() {
//   $('.submit').click(function(e) {
//     e.preventDefault();
//     var name = $('#inputName').val();
//     var email = $('#inputEmail').val();
//     var message = $('#inputMessage').val();
//
//
//     if (!name) {
//       $('#inputName').addClass('is-invalid');
//       $('#inputName').parent().append('<span class="text-danger">Please enter a name!</span>');
//       $('#inputName').focus(function() {
//         $('#inputName').parent().find('.text-danger').hide();
//         $('#inputEmail').parent().find('.text-danger').hide();
//         $('#inputMessage').parent().find('.text-danger').hide();
//         $('#inputName').removeClass('is-invalid');
//         $('#inputEmail').removeClass('is-invalid');
//         $('#inputMessage').removeClass('is-invalid');
//       });
//
//     }else {
//       $('#inputName').addClass('is-valid');
//     }
//
//     if (!email || !email.length > 5 || !email.includes('@') || !email.includes('.')) {
//       $('#inputEmail').addClass('is-invalid');
//       $('#inputEmail').parent().append('<span class="text-danger">Please enter a valid email!</span>');
//       $('#inputEmail').focus(function() {
//         $('#inputName').parent().find('.text-danger').hide();
//         $('#inputEmail').parent().find('.text-danger').hide();
//         $('#inputMessage').parent().find('.text-danger').hide();
//         $('#inputName').removeClass('is-invalid');
//         $('#inputEmail').removeClass('is-invalid');
//         $('#inputMessage').removeClass('is-invalid');
//       });
//     } else {
//       $('#inputEmail').addClass('is-valid');
//     }
//
//     if (!message) {
//       $('#inputMessage').addClass('is-invalid');
//       $('#inputMessage').parent().append('<span class="text-danger">Please enter a message!</span>');
//       $('#inputMessage').focus(function() {
//         $('#inputName').parent().find('.text-danger').hide();
//         $('#inputEmail').parent().find('.text-danger').hide();
//         $('#inputMessage').parent().find('.text-danger').hide();
//         $('#inputName').removeClass('is-invalid');
//         $('#inputEmail').removeClass('is-invalid');
//         $('#inputMessage').removeClass('is-invalid');
//       });
//     } else if (message.length < 10) {
//       $('#inputMessage').addClass('is-invalid');
//       $('#inputMessage').parent().append('<span class="text-danger">Your message is too short! Please enter more than 10 caracters</span>');
//       $('#inputMessage').focus(function() {
//         $('#inputName').parent().find('.text-danger').hide();
//         $('#inputEmail').parent().find('.text-danger').hide();
//         $('#inputMessage').parent().find('.text-danger').hide();
//         $('#inputName').removeClass('is-invalid');
//         $('#inputEmail').removeClass('is-invalid');
//         $('#inputMessage').removeClass('is-invalid');
//       });
//     } else  {
//       $('#inputMessage').addClass('is-valid');
//     }
//
//     if ($('#inputName').hasClass('is-valid') && $('#inputEmail').hasClass('is-valid') && $('#inputMessage').hasClass('is-valid')){
//         console.log('success!')
//       $.ajax({
//         method: 'POST',
//         url: '//formspree.io/dribeiro.hi@gmail.com',
//         data: $('#contact-form').serialize(),
//         dataType: 'json',
//         beforeSend: function() {
//           $('#contact-form').find('.button').append('<div class="alert alert-info mt-5 text-center">Sending message…</div>');
//         },
//         success: function() {
//           $('#contact-form').find('.alert').hide();
//           $('#contact-form').find('.button').append('<div class="mt-5 alert alert-success text-center">Your message was sucessfuly sent!</div>');
//           $("#contact-form").get(0).reset();
//           $('#inputName').removeClass('is-valid');
//           $('#inputEmail').removeClass('is-valid');
//           $('#inputMessage').removeClass('is-valid');
//           $('#contact-form').find('.alert-success').fadeOut(4000, "linear");
//         }
//       });
//     }
//   });
// });




// SUBMIT YOUR PROJECT FORM


  $(document).on('change', '.checkbox', function() {
      if(this.checked) {
          console.log('checked one option');
          $('#inputBizType').find('.text-danger').hide();
      }
  });

  $(document).on('change', '#rate', function() {
    if($('#rate option:selected').val() === 'select' || $('#rate option:selected').val() === '') {
      console.log('rate is not valid');
    }else {
        console.log('rate is  valid');
        $('#rate').parent().find('.text-danger').hide();
    }
  });


    $(document).ready(function() {
    $('#submit-form').submit(function(e) {
      console.log('clicked');
      e.preventDefault();
      var name = $('#inputNameSubmit').val();
      var email = $('#inputEmailSubmit').val();
      var phone = $('#inputPhone').val();
      var businessType = $('#inputBizType').val();
      var biz_info = $('#biz_info').val();
      var expectations = $('#expectations').val();
      var feedback = $('#feedback').val();

      if (!name) {
        $('#inputNameSubmit').addClass('is-invalid');
        $('#inputNameSubmit').parent().parent().append('<span class="text-danger">Please enter a valid name!</span>');
        $('#inputNameSubmit').focus(function() {
          $('#inputNameSubmit').parent().parent().find('.text-danger').hide();
          $('#inputNameSubmit').removeClass('is-invalid');
        });

      }else {
        $('#inputNameSubmit').addClass('is-valid');
      }

      if (!email || !email.length > 5 || !email.includes('@') || !email.includes('.')) {
        $('#inputEmailSubmit').addClass('is-invalid');
        $('#inputEmailSubmit').parent().parent().append('<span class="text-danger">Please enter a valid email!</span>');
        $('#inputEmailSubmit').focus(function() {
          $('#inputEmailSubmit').parent().parent().find('.text-danger').hide();
          $('#inputEmailSubmit').removeClass('is-invalid');
        });
      } else {
        $('#inputEmailSubmit').addClass('is-valid');
      }

      if (!phone) {
        $('#inputPhone').addClass('is-invalid');
        $('#inputPhone').parent().parent().append('<div class="col-12 pl-0 text-danger">Please enter a valid number!</div>');
        $('#inputPhone').focus(function() {
          $('#inputPhone').parent().parent().find('.text-danger').hide();
          $('#inputPhone').removeClass('is-invalid');
        });

      } else  {
        $('#inputPhone').addClass('is-valid');
      }


      if (($('#inputBizType').find(".checkbox:checked").length) == 0) {
        console.log('nothing was checked');
        $('#inputBizType').append('<div class="col-12 ml-2 mt-2 text-danger">Please select at least one option!</div>');

      } else {
        $('#inputBizType').addClass('is-valid');
        $('#inputBizType').find('.text-danger').hide();
      }

      if (!biz_info) {
        $('#biz_info').addClass('is-invalid');
        $('#biz_info').parent().append('<div class="col-12 pl-0 text-danger">Please fill in the text area above!</div>');
        $('#biz_info').focus(function() {
          $('#biz_info').parent().find('.text-danger').hide();
          $('#biz_info').removeClass('is-invalid');
        });

      } else  {
        $('#biz_info').addClass('is-valid');
      }

      if (!expectations) {
        $('#expectations').addClass('is-invalid');
        $('#expectations').parent().append('<div class="col-12 pl-0 text-danger">Please fill in the text area above!</div>');
        $('#expectations').focus(function() {
          $('#expectations').parent().find('.text-danger').hide();
          $('#expectations').removeClass('is-invalid');
        });

      } else {
        $('#expectations').addClass('is-valid');
      }

      if (!feedback) {
        $('#feedback').addClass('is-invalid');
        $('#feedback').parent().append('<div class="col-12 pl-0 text-danger">Please fill in the text area above!</div>');
        $('#feedback').focus(function() {
          $('#feedback').parent().find('.text-danger').hide();
          $('#feedback').removeClass('is-invalid');
        });

      } else {
        $('#feedback').addClass('is-valid');
      }

      if($('#rate option:selected').val() === 'select' || $('#rate option:selected').val() === '') {
        console.log('nothing was selected')
        $('#rate').parent().append('<div class="col-12 pl-0 text-danger">Please select a number above!</div>');

      } else {
        $('#rate').addClass('is-valid');
      }


      if (
        $('#inputNameSubmit').hasClass('is-valid')
        &&
        $('#inputEmailSubmit').hasClass('is-valid')
        &&
        $('#inputPhone').hasClass('is-valid')
        &&
        $('#inputBizType').hasClass('is-valid')
        &&
        $('#biz_info').hasClass('is-valid')
        &&
        $('#expectations').hasClass('is-valid')
        &&
        $('#feedback').hasClass('is-valid')
        &&
        $('#rate').hasClass('is-valid')
      ) {
          console.log('success!')
          // $.post('https://formspree.io/dribeiro.hi@gmail.com', {name: name, email: email})


      //   $.post('https://formspree.io/dribeiro.hi@gmail.com',
      //   {
      //     name: name,
      //     email: email,
      //     phone: phone,
      //     businessType: businessType,
      //     biz_info: biz_info,
      //     expectations: expectations,
      //     feedback: feedback
      //   },
      //   function(data){
      //     console.log(data);
      //   }
      // )

      $.ajax({
           method: 'POST', // define the type of HTTP verb we want to use (POST for our form)
           url: $('#submit-form').attr('action'),
           data: $('#submit-form').serialize(),
           dataType: 'json'
       })
           // using the done promise callback
           .done(function(data) {

               // log data to the console so we can see
               console.log(data);

               // here we will handle errors and validation messages
           });



        // jqxhr.done(function() {
        //     $('#submit-form').find('.button').append('<div class="alert alert-info mt-5 text-center">Sending message…</div>');
        //   });
        //
        //   jqxhr.always(function() {
        //     $('#submit-form').find('.alert').hide();
        //     $('#submit-form').find('.button').append('<div class="mt-5 alert alert-success text-center">Your form was sucessfuly submited!</div>');
        //     $("#submit-form").get(0).reset();
        //     $('#inputNameSubmit').removeClass('is-valid');
        //     $('#inputEmailSubmit').removeClass('is-valid');
        //     $('#inputPhone').removeClass('is-valid');
        //     $('#inputBizType').removeClass('is-valid');
        //     $('#biz_info').removeClass('is-valid');
        //     $('#expectations').removeClass('is-valid');
        //     $('#feedback').removeClass('is-valid');
        //     $('#rate').removeClass('is-valid');
        //     $('#submit-form').find('.alert-success').fadeOut(4000, "linear");
        //
        //   });
        //   //
        //   // jqxhr.fail(function() {
        //   //
        //   // })
        //
        //
        // $.ajax({
        //   method: 'POST',
        //   url: '//formspree.io/dribeiro.hi@gmail.com',
        //   data: $('#submit-form').serialize(),
        //   dataType: 'json',
        //   beforeSend: function() {
        //     $('#submit-form').find('.button').append('<div class="alert alert-info mt-5 text-center">Sending message…</div>');
        //   },
        //   success: function() {
        //     $('#submit-form').find('.alert').hide();
        //     $('#submit-form').find('.button').append('<div class="mt-5 alert alert-success text-center">Your form was sucessfuly submited!</div>');
        //     $("#submit-form").get(0).reset();
        //     $('#inputNameSubmit').removeClass('is-valid');
        //     $('#inputEmailSubmit').removeClass('is-valid');
        //     $('#inputPhone').removeClass('is-valid');
        //     $('#inputBizType').removeClass('is-valid');
        //     $('#biz_info').removeClass('is-valid');
        //     $('#expectations').removeClass('is-valid');
        //     $('#feedback').removeClass('is-valid');
        //     $('#rate').removeClass('is-valid');
        //     $('#submit-form').find('.alert-success').fadeOut(4000, "linear");
        //   }
        // });
      } else {
          $('.first-field').before('<div class="container mb-3"><div class="row"> <span class="col alert alert-warning mx-2 mx-lg-5">Please review fields in red!</span> </div></div>');
          $('html,body').animate({scrollTop: $('#submit-form').parent().offset().top},'slow');
      }
    });
  });
