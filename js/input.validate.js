/* 
File: input.validate.js
HW 4 GUI Assignment: jQuery and Sliders
Steven Ceballos, UMass Lowell Computer Science, steven_ceballos@student.uml.edu
November 28, 2022 at 1:43 PM  
*/
function valid_in()
{
    $.validator.addMethod("larger", function(value, element, param)
    {
        return this.optional(element) || parseInt(value) >= parseInt($(param).val());
    }, 'Invalid value');

    $.validator.addMethod("length", function(value, element, param)
    {
        return this.optional(element) || Math.abs(parseInt(value) - parseInt($(param).val())) < parseInt(101);
    }, 'Invalid value');

    /* The validation will make sure the following rules are being followed:
       1. check if the length from start to end larger 100
       2. check if the input is in range -100 to 100
       3. check if there is a number 
       4. check if the end number is larger or equal than the start number
       5. check if a field empty */

    $("#subForm").validate
    ({
        rules:
        {
            row1:
            {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            row2:
            {
                required: true,
                number: true,
                min: -50,
                max: 50,
                larger: "#row1",
                length: "#row1"
            },
            col1:
            {
                required: true,
                number: true,
                min: -50,
                max: 50
            },
            col2:
            {
                required: true,
                number: true,
                min: -50,
                max: 50,
                larger: "#col1",
                length: "#col1"
            }
        },
        messages:
        {
            row1:
            {
                required: "The field cannot be empty!",
                number: "Please enter a normal number!",
                min: "Number must be greater than -50!",
                max: "Number must be less than 50!"
            },
            row2:
            {
                required: "The field cannot be empty!",
                number: "Please enter a normal number!",
                min: "Number must be greater than -50!",
                max: "Number must be less than 50!",
                larger: "End number must be larger or equal to start number!",
                length: "The range from start to end cannot be greater than 100!"
            },
            col1:
            {
                required: "The field cannot be empty!",
                number: "Please enter a normal number!",
                min: "Number must be greater than -50!",
                max: "Number must be less than 50!"
            },
            col2:
            {
                required: "The field cannot empty!",
                number: "Please enter a normal number!",
                min: "Number must be greater than -50!",
                max: "Number must be less than 50!",
                larger: "End number must be larger or equal to start number!",
                length: "The range from start to end cannot be greater than 100!"
            }
        }
    });
}

function CreateTable()
{

    valid_in();

    if($("#row1").valid() && $("#row2").valid() && $("#col1").valid() && $("#col2").valid())
    {
        TableStart();
    };
}