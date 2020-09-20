// Declare variables//

let timeNow = moment().format('dddd, MMMM Do YYYY');
let currentTime = moment().hour();
let clock = moment().format('hh:mm')
const appointments = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

//initialize application by pulling items from local storage//
function init() {
    $(document).ready(function(){
        for (var j = 9; j < 18; j++){
            $(".content").eq(j-9).val(localStorage.getItem(appointments[j-9]));
        }
    });
}

init();

//save function to save items to local storage//
$(".save").click(function(){
  var appointment = $(this).siblings(".content").val();
  var timeSlot = $(this).siblings(".timeValue").attr("id");

  localStorage.setItem(timeSlot, appointment);
});

//displays current date and time at top of page//
$('#currentDay').append(timeNow);
$('#currentTime').append(clock)


//Color coding to reflect whether the time slot is in the past, the present or the future//

for (var i = 9; i < 18; i++) {
  if (currentTime > i){
      $(".content").eq(i-9).css("background-color", "lightgrey");
  }
  if (currentTime === i){
      $(".content").eq(i-9).css("background-color", "pink");
  }
  if (currentTime < i){
      $(".content").eq(i-9).css("background-color", "green");
  }
}
