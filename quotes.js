var quotes = [
    '"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself."<br><small>- Mark Caine</small>',
    '"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."<br><small>- Helen Keller</small>',
    '"Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do."<br><small>- Mark Twain</small>',
    '"A friend is one that knows you as you are, understands where you have been, accepts what you have become, and still, gently allows you to grow."<br><small>- William Shakespeare</small>',
    '"It only ends once. Anything that happens before that is just progress."<br><small>- Jacob <em>(Lost)</em></small>',
    '"Don\'t cry because it\'s over, smile because it happened."<br><small>- Dr. Seuss</small>',
    '"A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty."<br><small>- Winston Churchill</small>',
    '"Choose to be optimistic, it feels better."<br><small>- Dalai Lama XIV</small>',
    '"The basis of optimism is sheer terror."<br><small>- Oscar Wilde</small>',
    '"We are all in the gutter, but some of us are looking at the stars."<br><small>- Oscar Wilde</small>'
]
var day = "";
var today = new Date();
var h = today.getHours();
if (h < 12) {
    day = " morning";
} else if (h > 18) {
    day = " evening";
} else {
    day = " afternoon";
}
var mantras = [
    'Carpe diem.',
    'Seize the day.',
    'Good' + day + '.',
    'How are you doing?',
    'Reach for the stars.',
    'The sky\'s the limit.',
    'What\'s on your mind?'
]
var backgroundImg = [
    'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/06/ultra-wide-mistakes-lead-image.jpg',
    
]
    function startQuote() {
        var rnga = Math.floor(Math.random() * quotes.length);
        document.getElementById('quoteDisplay').innerHTML = quotes[rnga];
    }

    function startMantra() {
        var rngb = Math.floor(Math.random() * mantras.length);
        document.getElementById('mantraDisplay').innerHTML = mantras[rngb];
    }

    function startTime() {
        h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var ampm = "";
        m = checkTime(m);

        if (h > 12) {
            h = h - 12;
            ampm = " PM";
        } else if (h == 12) {
            h = 12;
            ampm = " PM";
        } else if (h < 12) {
            ampm = " AM";
        } else {
            ampm = " PM";
        }

        if (h === 0) {
            h = 12;
        }

        document.getElementById('display').innerHTML = h + ":" + m + ampm;
        var t = setTimeout(function() {
            startTime()
        }, 500);
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        } // add zero in front of numbers < 10
        return i;
    }

    function startDate() {
        var d = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        document.getElementById("date").innerHTML = days[d.getDay()] + " | " + [d.getMonth() + 1] + "/" + d.getDate() + "/" + d.getFullYear();
    }
    // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}