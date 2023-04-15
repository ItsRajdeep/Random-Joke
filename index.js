const joke=["My wife told me to stop impersonating a flamingo. I had to put my foot down.","I went to buy some camo pants but could not find any.","I failed math so many times at school, I can not even count.","I used to have a handle on life, but then it broke."," I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.","I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels.","I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car.","When life gives you melons, you might be dyslexic.","Do not you hate it when someone answers their own questions? I do.","It takes a lot of balls to golf the way I do"]

function ran(){
    document.getElementById("joke").innerHTML= "' "+joke[Math.floor(Math.random()*10)]+"'";
    var msg = new SpeechSynthesisUtterance();
    msg.text = document.getElementById("joke").innerHTML + "ha ha ha"
    window.speechSynthesis.speak(msg);
    document.getElementById("joke").innerHTML.style.color= brown;

}