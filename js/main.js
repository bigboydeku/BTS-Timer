function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    
    var string = h + ":" + m + ":" + s;
   
    var img = stringToImage(string);
    
    document.getElementById('txt').innerHTML =
      "<br>" + img;
    //every 1000 milliseconds (1 second)
    var t = setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    } 
    return i;
  }
  

  function stringToImage(s) {
    //create a temporary blank variable to hold HTML images
    var temp = ""
    for (var i = 0; i < s.length; i++) {
      temp = temp + "<img src='" + img[s[i]] + "'  width='200px' height='260px'/>"
    }
    return temp
  }
  
  
  var img = {
    "1": "../numbers/MOTS 1.png",
    "2": "../numbers/MOTS 2.png",
    "3": "../numbers/MOTS 3.png",
    "4": "../numbers/MOTS 4.png",
    "5": "../numbers/MOTS 5.png",
    "6": "../numbers/MOTS 6.png",
    "7": "../numbers/MOTS 7.png",
    "8": "../numbers/MOTS 8.png",
    "9": "../numbers/MOTS 9.png",
    "0": "../numbers/MOTS 0.png",
    ":": "../numbers/MOTS colon.png"
  }