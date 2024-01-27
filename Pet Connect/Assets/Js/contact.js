/*
    function validateForm() {
        // Fetch form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Check for critical fields
        if (name.trim() === '') {
            alert('Name is required');
            return false;
        }

        if (email.trim() === '') {
            alert('Email is required');
            return false;
        }

        if (message.trim() === '') {
            alert('Message is required');
            return false;
        }
        // The form will submit automatically with the mailto action
        // if all validation passes
        return true;
    }

    // Function to clear initial values on click
    function clearInitialValue(element) {
        if (element.value === element.defaultValue) {
            element.value = '';
        }
    }
    
    function sendEmail() {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "denilsonklaas07@gmail.com",
            Password: "Denilson07",
            To: 'denilsonklaas07@gmail.com',
            From: document.getElementById("email").value, // Corrected from Value to value
            Subject: "New Contact Form Enquiry",
            Body: "Name: " + document.getElementById("name").value +
                "<br> Email: " + document.getElementById("email").value +
                "<br> Phone no: " + document.getElementById("phone").value +
                "<br> Message: " + document.getElementById("message").value
        }).then(
            message => alert("Message Sent Successfully")
        );
    }*/

    function validateForm() {
        // Fetch form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
      
        // Check for critical fields
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
          alert('All fields are required');
          return false;
        }
      
        sendEmail(); // Call sendEmail function if validation passes
        return false; // Prevent the form from submitting (you can also use event.preventDefault())
      }
      
      // Function to clear initial values on click
      function clearInitialValue(element) {
        if (element.value === element.defaultValue) {
          element.value = '';
        }
      }
      
      function sendEmail() {
        // Initialize Email.js
        emailjs.init("service_5d7qma9d");
      
        // Use your own Email.js template ID
        const templateId = "service_5d7qma9";
      
        // Prepare email parameters
        const emailParams = {
          to_name: "Your Name",
          from_name: document.getElementById("name").value,
          from_email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          message: document.getElementById("message").value
        };
      
        // Send email
        emailjs.send("smtp.gmail.com", templateId, emailParams)
          .then(function(response) {
            console.log("Email sent successfully", response);
            alert("Message Sent Successfully");
          }, function(error) {
            console.error("Failed to send email", error);
            alert("Failed to send email");
          });
      }
      