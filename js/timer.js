 var goTimer = 0;
 var nowTime = 0;
 document.getElementById("btn-start").addEventListener("click", controlTimer);
 document.getElementById("btn-clear").addEventListener("click", clearTimer);
  
function controlTimer () {
  var startElement = document.querySelector('input');
  var flag = startElement.value;
  if (flag == "start") {
  	flag = "pause";
  	startElement.value = flag;
    startElement.style.backgroundColor = '#790808';
    nowTime = (new Date).getTime();
    startTimer();
    } else  if (flag == "pause") {
    	flag = "go on";
    	startElement.value = flag;
      startElement.style.backgroundColor = '#1C2377';
      clearTimeout (goTimer);
     } else {
    	flag = "pause";
    	startElement.value = flag;
      startElement.style.backgroundColor = '#790808';
      nowTime = (new Date).getTime();
      startTimer();
      }
 } 

function startTimer() {
  var timerElement = document.body.querySelector('span');
  var timerArr = timerElement.innerHTML;
  var arr = timerArr.split(":", 4);
  var hoursTimer = +arr[0];
  var minTimer = +arr[1];
  var secTimer = +arr[2];
  var milsecTimer = +arr[3];

  nowTime = (new Date).getTime() - nowTime;
  milsecTimer = milsecTimer + nowTime; 
   
  if (milsecTimer == 999) {
      secTimer = secTimer + 1;
      milsecTimer = 0;
       } else if (milsecTimer > 999) {
         milsecTimer = milsecTimer - 999;
         secTimer = secTimer + 1;
         } 
  if (secTimer == 59) {
	         minTimer++;
	         secTimer = 0;
	} 
	if (hoursTimer == 99) {
		 hoursTimer = 0;
	}    
	  var secElement = viewTime (secTimer);
    var minElement = viewTime (minTimer);
    var hoursElement = viewTime (hoursTimer);
      
    if (milsecTimer < 10) {
	  milsecTimer = "00" + milsecTimer;
	  } else if (milsecTimer < 100) {
		milsecTimer = "0" + milsecTimer;
		 }	
	var milsecElement = milsecTimer;
		  
	timerArr = hoursElement + ':' + minElement + ':' + secElement + ':' + milsecElement;	
	timerElement = document.body.querySelector('span');
	timerElement.innerHTML = timerArr;
  nowTime = (new Date).getTime();
	goTimer = setTimeout(startTimer, 10);

}

function viewTime (elementTimer) {
		if (elementTimer < 10) {
			var elementTimer = "0" + elementTimer;
		} 
		return (elementTimer);
}

function clearTimer () {
  var timerElement = document.body.querySelector('span');
  timerElement.innerHTML = "00:00:00:000";
  clearInterval(goTimer);
  }