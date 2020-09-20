// Declare variables//

let timeNow = moment().format('dddd, MMMM Do YYYY');
let currentTime = moment().format('hh:mm')
let hourNow = moment().format('h');
let hourNow24= parseInt(moment().format('HH'));
let hourNowInt = parseInt(hourNow);
let Timer;

const hour1 = $('#time1').text();
const hour2 = $('#time2').text();
const hour3 = $('#time3').text();
const hour4 = $('#time4').text();
const hour5 = $('#time5').text();
const hour6 = $('#time6').text();
const hour7 = $('#time7').text();
const hour8 = $('#time8').text();
const hour9 = $('#time9').text();

//Store user input in local Storage//

$(this).click(function() {
  if($('#text1').val()) {
    localStorage.removeItem('text1');
  }

  const hour1String = JSON.stringify(hour1);
  
  localStorage.setItem(hour1, $('#text1').val());

});


$('#save2').click(function() {
  if($('#text2').val()) {
    localStorage.removeItem('text2');
  }

  const hour2String = JSON.stringify(hour2);

  localStorage.setItem(hour2, $('#text2').val());
});

$('#save3').click(function() {
  if($('#text3').val()) {
    localStorage.removeItem('text3');
  }

  const hour3String = JSON.stringify(hour3);

  localStorage.setItem(hour3, $('#text3').val());
});

$('#save4').click(function() {
  if($('#text4').val()) {
    localStorage.removeItem('text4');
  }

  const hour4String = JSON.stringify(hour4);

  localStorage.setItem(hour4, $('#text4').val());
});

$('#save5').click(function() {
  if($('#text5').val()) {
    localStorage.removeItem('text5');
  }

  const hour5String = JSON.stringify(hour5);

  localStorage.setItem(hour5, $('#text5').val());
});

$('#save6').click(function() {
  if($('#text6').val()) {
    localStorage.removeItem('text6');
  }

  const hour6String = JSON.stringify(hour6);

  localStorage.setItem(hour6, $('#text6').val());
});

$('#save7').click(function() {
  if($('#text7').val()) {
    localStorage.removeItem('text7');
  }

  const hour7String = JSON.stringify(hour7);

  localStorage.setItem(hour7, $('#text7').val());
})

$('#save8').click(function() {
  if($('#text8').val()) {
    localStorage.removeItem('text8');
  }

  const hour8String = JSON.stringify(hour8);

  localStorage.setItem(hour8, $('#text8').val());
})

$('#save9').click(function() { 
  if($('#text9').val()) {
    localStorage.removeItem('text9');
  }

  const hour9String = JSON.stringify(hour9);

  localStorage.setItem(hour9, $('#text9').val());
})

//displays local storage items on planner//
document.getElementById("text1").innerHTML = localStorage.getItem(hour1)
document.getElementById("text2").innerHTML = localStorage.getItem(hour2)
document.getElementById("text3").innerHTML = localStorage.getItem(hour3)
document.getElementById("text4").innerHTML = localStorage.getItem(hour4)
document.getElementById("text5").innerHTML = localStorage.getItem(hour5)
document.getElementById("text6").innerHTML = localStorage.getItem(hour6)
document.getElementById("text7").innerHTML = localStorage.getItem(hour7)
document.getElementById("text8").innerHTML = localStorage.getItem(hour8)
document.getElementById("text9").innerHTML = localStorage.getItem(hour9)

// Display the time using moment.js//

$('#currentDay').append(timeNow);
$('#currentTime').append(currentTime)


//Color coding to reflect whether the time slot is in the past, the present or the future, defaults to pink if outside of active work hours//

colorCoding();

function colorCoding() {

  TIMER = setInterval(colorCoding, 1000);
  // Test check: hourNow24 = 20;
  if(hourNow24 >= 9 && hourNow24 <= 17) {

    for (let i =1; i<=9 ; i++) { 
     let hourInInt = parseInt($('#time'+i).text());

      if (hourInInt < 9) {
        hourInInt = hourInInt + 12;
      }
      
      if (hourInInt == hourNow24) {
        $('#text'+i).css('background-color', '#FB8F78');
        continue;
      }
      
      if (hourInInt < hourNow24) {
        $('#text'+i).css('background-color', 'lightgrey');
      } 
      else {
        $('#text'+i).css('background-color', 'lightgreen');
      }
    }

  }
  else {
    clearInterval(TIMER);
    $('textarea').css('background-color', 'pink');
  }
}
