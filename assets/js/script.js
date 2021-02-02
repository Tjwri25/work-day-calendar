// display the current date and time in jumbotron
var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    //   event listener for save button to save to local storage 
    $(".saveBtn").on("click", function () {
        //  values for the text area 
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // set item to local storage
        localStorage.setItem(time, text);

        
    })
   // funtction for the past,present, future background colors
    function colorCoordinate() {
        // variable for current time 
        var currentHour = moment().hour();

        // each function to run through each time block
        $(".time-block").each(function () {
           
            var timeBlock= parseInt($(this).attr("id"));
            if (timeBlock < 8 ) {
                timeBlock = timeBlock + 12
              }
            
            if (timeBlock < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock > currentHour) {
              
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
            else {
               
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");

            }
        })
    }
  
    // get item to retrieve from local storage and keep in on the page after refresh 
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));
    

    colorCoordinate();
})