var slidepics = ["https://github.com/gillianglynn/gillianglynn.github.io/blob/master/Assets/Carousel/wesite%20welcome.jpg?raw=true",
"https://github.com/gillianglynn/gillianglynn.github.io/blob/master/Assets/Carousel/backpack-front.jpg?raw=true",
"https://github.com/gillianglynn/gillianglynn.github.io/blob/master/Assets/Carousel/pin-ata-front.jpg?raw=true"]
$(document).ready(function(){
  console.log("test")
i=0
myTimer=setInterval(function(){
    $("#picslides img").attr("src", slidepics[i])
    i=(i+1)%3
  }
, 5000)
})
