var slidepics = ["https://github.com/gillianglynn/gillianglynn.github.io/blob/master/Assets/Carousel/wesite%20welcome.jpg?raw=true",
"https://github.com/gillianglynn/gillianglynn.github.io/blob/master/Assets/Carousel/backpack-front.jpg?raw=true",
"https://github.com/gillianglynn/gillianglynn.github.io/blob/master/Assets/Carousel/pin-ata-front.jpg?raw=true"]
var slideLinks=["",
"https://society6.com/thekawiimon/s?q=popular+backpacks",
"https://www.etsy.com/listing/565117996/pinata-enamel-pin?ref=shop_home_active_14"]
var slideTargets=["","_blank","_blank"]
$(document).ready(function(){
  console.log("test")
i=0
myTimer=setInterval(function(){
    $("#picslides img").attr("src", slidepics[i])
    $("#picslides a").attr("href", slideLinks[i])
    $("#picslides a").attr("target", slideTargets[i])
    i=(i+1)%3
  }
, 5000)
})
