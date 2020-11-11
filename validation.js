$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName:
                {
                    required: true
                },
            grade:
                {
                    required: true,
                    digits: true,
                    min: 5,
                    max: 8
                }
        };

    // Object containing the error messages
    var myMessages =
        {
            firstName:
                {
                    required: "Please enter a first name"
                },
            grade:
                {
                    required: "Please enter a grade",
                    digits: "Please enter a valid grade",
                    min: "This is only for grades 5-8",
                    max: "This is only for grades 5-8"
                }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages,
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        var firstName = $("#firstName").val();
        var grade = $("#grade").val();
        $("#message").text(`${firstName} has been successfully registered for grade ${grade} camp!`)
    }



});