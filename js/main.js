let albums = {
  "1": "MOTS7",
  "2": "MOTSP",
  "3": "LYA",
  "4": "LYT",
  "5": "LYH",
  "6": "YNWA",
  "7": "Wings",
  "8": "YoungForever",
  "9": "HYYH2",
  "10": "HYYH1",
  "11": "DNW",
  "12": "SLA",
  "13": "ORUL8",
  "14": "2C4S"


}


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

  var img = {
    "1": `../designs/${albums[1]}/${albums[1]} 1.png`,
    "2": `../designs/${albums[1]}/${albums[1]} 2.png`,
    "3": `../designs/${albums[1]}/${albums[1]} 3.png`,
    "4": `../designs/${albums[1]}/${albums[1]} 4.png`,
    "5": `../designs/${albums[1]}/${albums[1]} 5.png`,
    "6": `../designs/${albums[1]}/${albums[1]} 6.png`,
    "7": `../designs/${albums[1]}/${albums[1]} 7.png`,
    "8": `../designs/${albums[1]}/${albums[1]} 8.png`,
    "9": `../designs/${albums[1]}/${albums[1]} 9.png`,
    "0": `../designs/${albums[1]}/${albums[1]} 0.png`,
    ":": `../designs/${albums[1]}/${albums[1]} colon.png`
  }
  



  function stringToImage(s) {
    //create a temporary blank variable to hold HTML images
    var temp = ""
    for (var i = 0; i < s.length; i++) {
      temp = temp + "<img src='" + img[s[i]] + "'  width='200px' height='260px'/>"
    }
    return temp
  }



  function albumControll(num) {
    img = {
      "1": `../designs/${albums[num]}/${albums[num]} 1.png`,
      "2": `../designs/${albums[num]}/${albums[num]} 2.png`,
      "3": `../designs/${albums[num]}/${albums[num]} 3.png`,
      "4": `../designs/${albums[num]}/${albums[num]} 4.png`,
      "5": `../designs/${albums[num]}/${albums[num]} 5.png`,
      "6": `../designs/${albums[num]}/${albums[num]} 6.png`,
      "7": `../designs/${albums[num]}/${albums[num]} 7.png`,
      "8": `../designs/${albums[num]}/${albums[num]} 8.png`,
      "9": `../designs/${albums[num]}/${albums[num]} 9.png`,
      "0": `../designs/${albums[num]}/${albums[num]} 0.png`,
      ":": `../designs/${albums[num]}/${albums[num]} colon.png`
    }
    document.body.style.backgroundImage = `url('../designs/${albums[num]}/${albums[num]} Background.png')`;
  }

  


  