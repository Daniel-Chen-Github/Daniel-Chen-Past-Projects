var pic = 1;
setInterval(function () {
  document.getElementById('openingPic' + pic).style.opacity = "0"
  document.getElementById('circle' + pic).style.background = "transparent"
  if (pic == 1) {
    var nextPic = pic + 1;
    pic += 1
  }
  else {
    var nextPic = pic - 1;
    pic -= 1
  }
  document.getElementById('openingPic' + nextPic).style.opacity = "1"
  document.getElementById('circle' + nextPic).style.background = "white"
}, 10000);

//hover function of the gallery
  function appear(x) {
    document.getElementById('blur' + x).style.opacity = "1"
    document.getElementById('arrow' + x).style.opacity = "1"
  }
  function disappear(x) {
    document.getElementById('blur' + x).style.opacity = "0"
    document.getElementById('arrow' + x).style.opacity = "0"
  }

  var n = 1;

  function back() {
    document.getElementById('openingPic' + n).style.opacity = "0"
    document.getElementById('circle' + n).style.backgroundColor = "transparent"
    if (n == 1) {
      n = 3
    }
    else {
      n -= 1
    }
    document.getElementById('openingPic' + n).style.opacity = "1"
    document.getElementById('circle' + n).style.backgroundColor = "white"
  }
  function next() {
    document.getElementById('openingPic' + n).style.opacity = "0"
    document.getElementById('circle' + n).style.backgroundColor = "transparent"
    if (n == 3) {
      n = 1
    }
    else {
      n += 1
    }
    document.getElementById('openingPic' + n).style.opacity = "1"
    document.getElementById('circle' + n).style.backgroundColor = "white"
  }

//grow and shrink of the header underlines
  function grow(x) {
    document.getElementById('big' + x).style.width = "100%"
  }
  function shrink(x) {
    document.getElementById('big' + x).style.width = "0%"
  }

  //appearing and disappearing of the icons
  function swipeUp(x) {
      document.getElementById('icon' + x).style.display = "block";
      document.getElementById('icon' + x).style.opacity = "1";
      document.getElementById('text' + x).style.marginTop = "-6vh";
      document.getElementById('text' + x).style.opacity = "0";
  }
  function swipeDown(x) {
      document.getElementById('text' + x).style.marginTop = "0.5vh";
      document.getElementById('icon' + x).style.marginBottom = "-5vh";
      document.getElementById('text' + x).style.opacity = "1";
      document.getElementById('icon' + x).style.opacity = "0";
  }

  //up and down of learn more from product section
  function up(x) {
    document.getElementById('productOverlay' + x).style.top = "0%"
    document.getElementById('productOverlay' + x).style.opacity = "1"
  }
  function down(x) {
    document.getElementById('productOverlay' + x).style.top = "100%"
    document.getElementById('productOverlay' + x).style.opacity = "0"
  }
  function overlayBig(x) {
    document.getElementById('productImage' + x).style.transform = "scale(1.2, 1.2)"
    for (var i = 1; i <= 6; i++) {
      console.log(i);
      if (i == x) {}
      else {
        document.getElementById('black' + i).style.opacity = "0.5"
      }
    }
  }
  function overlaySmall(x) {
    document.getElementById('productImage' + x).style.transform = "scale(1, 1)"
    for (var i = 1; i <= 6; i++) {
      console.log(i);
      document.getElementById('black' + i).style.opacity = "0"
    }
  }
