const daysTime = document.getElementById("days")
const hoursTime = document.getElementById("hours")
const minuteTime = document.getElementById("minute")
const secondsTime = document.getElementById("seconds")


const newYear = "1/1/2024"
function timeCountDown(){
    const presentDate = new Date ()
    const newYearDate = new Date(newYear)
    const totalSeconds = (newYearDate - presentDate) /1000;


    const days =Math.floor(totalSeconds/60/60/24);  
    const hours = Math.floor(totalSeconds/60/60)% 24;
    const minute = Math.floor (totalSeconds /60)%60;
    const seconds = Math.floor(totalSeconds)%60;
    
    daysTime.textContent= formatTime(days)
    hoursTime.textContent = formatTime(hours) 
    minuteTime.textContent =formatTime(minute) 
    secondsTime.textContent= formatTime(seconds) 
}
function formatTime (time){
      if( time < 10){
        return  (`0${time}`)
      }else{
        return time;
      }
      
     
        
    
}


timeCountDown()
setInterval(timeCountDown,1000)







