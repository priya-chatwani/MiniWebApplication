
// Submit form with id function.
function submit_by_id() {
    var labels = ["cfirstnumber", "csecondnumber", "cthirdnumber"];
    var firstNumber = document.getElementById(labels[0]).value;
    var secondNumber = document.getElementById(labels[1]).value;
    var thirdNumber = document.getElementById(labels[2]).value;
    var nums = [firstNumber, secondNumber, thirdNumber];
    console.log("input", nums);
    // regex checks for +/- numbers including decimal numbers
    var number_regex = /^(-?\d+\.\d+)$|^(-?\d+)$/;

    for (var i = 0; i < nums.length; i++) {
        var sendError = "p" + (i + 1).toString();
        if (!validate(nums[i], number_regex, sendError, labels[i])) {
            return false;
        }
    }
    //document.getElementById("numbers_form").submit(); //form submission
    nums.sort(function(a, b) {return b - a});
    console.log("sorted", nums);
    alert("High: " + nums[0] + " Mid: " + nums[1] + " Low: " + nums[2]);
    var form = document.getElementById("numbers_form");
    form.reset();
}

function validate(num, num_regex, sendError, label) {
    if (num.length == 0) {
        $('#'+sendError).text("* All fields are mandatory *"); // This Segment Displays The Validation Rule For All Fields
        $('#'+label).focus();
        return false;
    }
    // Validating Number Field.
    else if (!num.match(num_regex) || num.length == 0) {
        $('#'+sendError).text("* Please choose a valid number *"); 
        $('#'+label).focus();
        return false;
    }
    return true;
}