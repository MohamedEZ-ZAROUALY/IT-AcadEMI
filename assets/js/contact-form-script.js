/*==============================================================*/
// Evolta Contact Form  JS
/*==============================================================*/
(function ($) {
    "use strict"; // Start of use strict
    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });


    function submitForm(){
        // Initiate Variables With Form Content
        var form_data = new FormData();

        form_data.append("name" , $("#name").val());
        form_data.append("email" , $("#email").val());
        form_data.append("msg_subject" , $("#msg_subject").val());
        form_data.append("phone_number" , $("#phone_number").val());
        form_data.append("message" , $("#message").val());
        
        $(':input[type="submit"]').prop('disabled', true);

        var ajax_request = new XMLHttpRequest();

        ajax_request.open('POST','../../backend.php');
        ajax_request.send(form_data);

        ajax_request.onreadystatechange = function() {
            if (ajax_request.readyState == 4 && ajax_request.status == 200) {
                $(':input[type="submit"]').prop('disabled', false);
                formSuccess();
            }
        }
        
    }

    function formSuccess(){
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError(){
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h4 text-center tada animated text-success";
        } else {
            var msgClasses = "h4 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict