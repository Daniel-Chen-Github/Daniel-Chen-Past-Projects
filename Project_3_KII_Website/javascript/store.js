//link functions
var itemNum = 0;
var y = 0;
function link(pos, ref) {
  y += pos;
  document.getElementById('warning').style.transform = "scale(1.3, 1.3)"
  document.getElementById('warning').style.opacity = "1"
  document.getElementById('hello').innerHTML = itemNum
  document.getElementById('storeOverlay').style.display = "block"
  document.body.style.overflowY = "hidden";
  setTimeout(function () {
    document.getElementById('storeOverlay').style.opacity = "0.4"
    document.getElementById('warning').style.transform = "scale(1.2, 1.2)"
  }, 500);
}
function no() {
  document.getElementById('storeOverlay').style.opacity = "0"
  document.getElementById('warning').style.transform = "scale(0, 0)"
  document.getElementById('warning').style.opacity = "0"
  setTimeout(function () {
    document.getElementById('storeOverlay').style.display = "none"
    document.body.style.overflowY = "visible";
  }, 500);
}
function yes() {
  document.getElementById('src' + y).click();
}

//button animation
function show(x) {
  document.getElementById('buttonOverlay' + x).style.width = "100%"
  document.getElementById('button' + x).style.color = "white"
}
function noshow(x) {
  document.getElementById('buttonOverlay' + x).style.width = "0%"
  document.getElementById('button' + x).style.color = "black"
}

//grow and shrink of the header underlines
  function grow(x) {
    document.getElementById('big' + x).style.width = "100%"
  }
  function shrink(x) {
    document.getElementById('big' + x).style.width = "0%"
  }

//inventory functions
  function inventory() {
    document.getElementById('storeOverlay').style.display = "block"
    document.getElementById('inventory').style.right = "0%"
    document.body.style.overflowY = "hidden"
    document.body.style.width = "99%"
    setTimeout(function () {
      document.getElementById('storeOverlay').style.opacity = "0.4"
    }, 10);
  }
  function closeInventory() {
    document.body.style.overflowY = "scroll"
    document.body.style.width = "100%"
    document.getElementById('storeOverlay').style.opacity = "0"
    document.getElementById('inventory').style.right = "-30%"
    setTimeout(function () {
      document.getElementById('storeOverlay').style.display = "none"
    }, 500);
  }

//buy function
  var price = 0;
  var items = [];
  var pos = 1;

  function cart(product, number) {

    console.log(product);
    var value = document.getElementById('choice' + number).value
    if (value == "Quantity") {
      var numero = 1
    }
    else {
      var numero = value
    }
    var image = document.createElement("img");
    var br = document.createElement("br");
    var b = document.createElement("b");
    var p = document.createElement("p");
    var u = document.createElement("u");
    var hr = document.createElement("hr");
    var divBody = document.createElement("div")
    divBody.className = "creationBody";
    divBody.id = "creationBody" + pos;
    var id = document.getElementById('inventoryBody')
    var div = document.createElement("div");

    switch (product) {
      case "classic":
        image.src = "image/canClassic.png"
        p.innerHTML = "Classic Milk Tea 6 x 12oz"
        price += Number(numero) * 32.99
        items.push(numero, "classic")
        break;
      case "mango":
        image.src = "image/canMango.png"
        p.innerHTML = "Mango Milk Tea 6 x 12oz"
        price += Number(numero) * 37.99
        items.push(numero, "mango")
        break;
      case "saitomo":
        image.src = "image/canTaro.png"
        p.innerHTML = "Saitomo Milk Tea 6 x 12oz"
        price += Number(numero) * 41.99
        items.push(numero, "saitomo")
        break;
      case "ichigo":
        image.src = "image/canStrawberry.png"
        p.innerHTML = "Ichigo Milk Tea 6 x 12oz"
        price += Number(numero) * 37.99
        items.push(numero, "ichigo")
        break;
      case "raichi":
        image.src = "image/canLychee.png"
        p.innerHTML = "Raichi Milk Tea 6 x 12oz"
        price += Number(numero) * 37.99
        items.push(numero, "raichi")
        break;
      case "chocolate":
        image.src = "image/canChocolate.png"
        p.innerHTML = "Chokoreto Milk Tea 6 x 12oz"
        price += Number(numero) * 37.99
        items.push(numero, "chokoreto")
        break;
    }
    b.innerHTML = numero
    u.innerHTML = "Remove"
    u.id = "remove" + pos;
    p.id = "text" + pos;
    b.id = "num" + pos;
     console.log(u.id);

    divBody.appendChild(image);
    div.appendChild(p);
    div.appendChild(b);
    div.appendChild(br);
    div.appendChild(u);
    id.appendChild(div);
    console.log(div);


    var container = document.getElementById('inventoryBody')
    divBody.appendChild(div)
    container.appendChild(divBody)
    divBody.appendChild(hr);
    var finalPrice = price.toFixed(2)
    document.getElementById('price').innerHTML = finalPrice + "$"
    console.log(divBody);
    console.log(items);
    document.getElementById('remove' + pos).setAttribute('onclick',"remove("+pos+")");
    pos++;
    itemNum++;
    console.log(pos);
  }

  function remove(x) {
    document.getElementById('creationBody' + x).style.display = "none"
    var minus = 0;
    var src = document.getElementById('text' + x).textContent.split(" ")
    var numero = Number(document.getElementById('num' + x).textContent)
    var item = src[0]
    switch (item) {
      case "Classic":
        price -= numero * 36.99
        break;
      case "Saitomo":
        price -= numero * 41.99
      break;
      default:
      price -= numero * 37.99
    }
    var finalPrice = price.toFixed(2)
    if (price <= 0) {
      document.getElementById('price').innerHTML = "0.00$"
    }
    else {
      document.getElementById('price').innerHTML = finalPrice + "$"
    }
    itemNum--;
    for (var i = 1; i <= 6; i++) {
      document.getElementById('choice' + i).value = "Quantity"
    }
  }

  function checkOut() {
    var val = document.getElementById('inventoryBody').textContent
    console.log(val);
    if (val.trim() == "") {
      alert("Order incomplete, there is nothing in your cart")
    }
    else {
      alert("Order Complete")
      document.getElementById('src1').click()
    }
  }
