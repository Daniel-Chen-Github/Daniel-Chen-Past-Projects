  var flavor = ["classic", "mango", "taro", "strawberry", "lychee", "chocolate"]
  var start = 0;
  pos();

  //next function
  function pos() {
    var text = document.getElementById('title1').textContent;
    if (text == "Classic Milk Tea") {}
    if (text == "Mango Milk Tea") {
      start += 1;
    }
    if (text == "Saitomo Milk Tea") {
      start += 2;
    }
    if (text == "Ichigo Milk Tea") {
      start += 3;
    }
    if (text == "Raichi Milk Tea") {
      start += 4;
    }
    if (text == "Choco Milk Tea") {
      start += 5;
    }
  }

  var divNum = 1;
  function forward() {
    document.getElementById('title' + divNum).style.left = "200%"
    document.getElementById('title' + divNum).style.opacity = "0"
    document.getElementById('text' + divNum).style.left = "200%"
    document.getElementById('text' + divNum).style.opacity = "0"
    document.getElementById('can' + start).style.opacity = "0"
    divNum++;
    if (start == 5) {
      start = 0
    }
    else {
      start++;
    }
    var item = flavor[start]
    document.getElementById('can' + start).style.opacity = "1"

    var br = document.createElement ('br')
    var container = document.createElement('div')
    container.className = "description";
    container.id = "container" + divNum;
    var title = document.createElement('div')
    title.id = "title" + divNum
    var text = document.createElement('div')
    text.className = "descriptionText";
    text.id = "text" + divNum
    switch (item) {
      case "classic":
        title.innerHTML = "Classic Milk Tea"
        text.innerHTML = "KII's classic milk tea is a milk tea like no other. It is a milk tea of substance, the most full-flavored of all. Singular and striking. Uniquely satisfying. Brewed from natural high grade tea's from across Asia, KII's milk tea is the most enjoyable and highest of quality alcoholic beverage on the market. Next time you plan a gathering, KII's classic milk tea is a beverage you do not want to exclude. Ingredients: Chai Tea, creamers (milk, half and half, heavy cream), simple syrup. Alcohol percentage = 5%"
        title.className = "descriptionTitle color61";
        text.className = "descriptionText color62";
      break;
      case "mango":
        title.innerHTML = "Mango Milk Tea"
        text.innerHTML = "KII's mango milk tea has the crisp, bright taste of fresh mangoes and high quality milk tea; nothing else. Brewed from natural high grade tea's from across Asia, KII's mango milk tea is the most enjoyable and highest of quality alcoholic beverage on the market. Pure and natural, just as we intended. KII's mango milk tea is the perfect beverage for a gathering with friends. Ingredients: chai tea, natural mango, creamers (milk, half and half, heavy cream), simple syrup. Alcohol percentage = 5%"
        title.className = "descriptionTitle color11";
        text.className = "descriptionText color12";
      break;
      case "taro":
        title.innerHTML = "Saitomo Milk Tea"
        text.innerHTML = "Grown on the islands of malysia, taro is a perfect ingredient within milk tea. KII's saitomo milk tea is smoothest, silkiest and richest taro milk tea on the market. In combination with the taro, KII's milk tea is brewed from natural high grade tea's from across Asia. KII's taro milk tea is the beverage best suited for any night-in with your family. Ingredients: chai tea, natural taro, creamers (milk, half and half, heavy cream), simple syrup. Alcohol percentage = 5%"
        title.className = "descriptionTitle color21";
        text.className = "descriptionText color22";
      break;
      case "strawberry":
        title.innerHTML = "Ichigo Milk Tea"
        text.innerHTML = "Nothing tastes better than a fresh summer straberry beverage and KII's strawberry milk tea is no exception. Brewed with natural high grade tea's from across Asia, KII's strawberry milk tea has an intense strawberry and milky flavor which will give your taste buds a surreal experience. Perfect for mixing with other fruity flavors or livening up a simple cocktail. Ingredients: chai tea, natural strawberry, creamers (milk, half and half, heavy cream), simple syrup. Alcohol percentage = 5%"
        title.className = "descriptionTitle color31";
        text.className = "descriptionText color32";
      break;
      case "lychee":
        title.innerHTML = "Raichi Milk Tea"
        text.innerHTML = "Lychee is a delicatessen fruit, enjoyed for its sweetness and good taste therefore its combination with quality tea's from across Asia creates the perfect drink for any ocassion. KII's lychee milk tea is a refreshing tropical fruit flavor drink which will delight any boba and alcohol lovers. Perfect in large gatherings and social events. Ingredients: chai tea, natural lychee, creamers (milk, half and half, heavy cream), simple syrup. Alcohol percentage = 5%"
        title.className = "descriptionTitle color41";
        text.className = "descriptionText color42";
      break;
      case "chocolate":
        title.innerHTML = "Choco Milk Tea"
        text.innerHTML = "If you’ve ever wanted to feel like you’re drinking pure natural chocolate, then this treat is for you. Expect your taste buds to enjoy the full-bodied and indulging taste of this milk tea's chocolatey goodness. Made from the highest grade chocolate and natural quality tea from across Asia, KII's chocolate milk tea is the perfect beverage for any occasion.  Ingredients: chai tea, chocolate, creamers (milk, half and half, heavy cream), simple syrup. Alcohol percentage = 5%"
        title.className = "descriptionTitle color51";
        text.className = "descriptionText color52";
      break;
    }
    container.appendChild(title)
    container.appendChild(text)
    document.body.appendChild(container)
    console.log(container);
    console.log(divNum);

    setTimeout(function () {
      document.getElementById('container' + divNum).style.left = "18%"
      document.getElementById('container' + divNum).style.width = "35vw"
      document.getElementById('container' + divNum).style.opacity = "1"
      document.getElementById('title' + divNum).style.transform = "translate(-50%, 0%)"
      document.getElementById('text' + divNum).style.transform = "translate(-50%, -50%)"
    }, 100);
  }

  function backward() {
    document.getElementById('title' + divNum).style.left = "-150%"
    document.getElementById('title' + divNum).style.opacity = "0"
    document.getElementById('text' + divNum).style.left = "-150%"
    document.getElementById('text' + divNum).style.opacity = "0"
    document.getElementById('can' + start).style.opacity = "0"
    divNum++;
    if (start == 0) {
      start = 5
    }
    else {
      start--;
    }
    document.getElementById('can' + start).style.opacity = "1"

    var item = flavor[start]
    var container = document.createElement('div')
    container.className = "description2";
    container.id = "container" + divNum;
    var title = document.createElement('div')
    title.id = "title" + divNum
    var text = document.createElement('div')
    text.id = "text" + divNum
    switch (item) {
      case "classic":
        title.innerHTML = "Classic Milk Tea"
        text.innerHTML = "KII's classic milk tea is a milk tea like no other. It is a milk tea of substance, the most full-flavored of all. Singular and striking. Uniquely satisfying. Brewed from natural high grade tea's from across Asia, KII's milk tea is the most enjoyable and highest of quality alcoholic beverage on the market. Next time you plan a gathering, KII's milk tea is a beverage you do not want to exclude. Ingredients: Chai Tea, creamers (milk, half and half, heavy cream), simple syrup. Alcohol percentage = 5%"
        title.className = "descriptionTitle1 color61";
        text.className = "descriptionText1 color62";
      break;
      case "mango":
        title.innerHTML = "Mango Milk Tea"
        text.innerHTML = "KII's mango milk tea has the crisp, bright taste of fresh mangoes and high quality milk tea; nothing else. Brewed from natural high grade tea's from across Asia, KII's milk tea is the most enjoyable and highest of quality alcoholic beverage on the market. Pure and natural, just as we intended. KII's mango milk tea is the perfect beverage for a gathering with friends. Ingredients: Chai Tea, Natural mango, creamers (milk, half and half, heavy cream), simple syrup. Alcohol percentage = 5%"
        title.className = "descriptionTitle1 color11";
        text.className = "descriptionText1 color12";
      break;
      case "taro":
        title.innerHTML = "Saitomo Milk Tea"
        text.innerHTML = "Grown on the islands of malysia, taro is a perfect ingredient withint milk tea. KII's saitomo milk tea is smoothest, silkiest and richest taro milk tea on the market. In combination with the taro, KII's milk tea is brewed from natural high grade tea's from across Asia. KII's taro milk tea is the beverage best suited for any night-in with your family. Ingredients: Chai Tea, Natural taro, creamers (milk, half and half, heavy cream), simple syrup. Alcohol percentage = 5%"
        title.className = "descriptionTitle1 color21";
        text.className = "descriptionText1 color22";
      break;
      case "strawberry":
        title.innerHTML = "Ichigo Milk Tea"
        text.innerHTML = "Nothing tastes better than a fresh summer straberry beverage and KII's strawberry milk tea is no exception. Brewed with natural high grade tea's from acrros Asia, KII's strawberry milk tea has an intense strawberry and milky flavor which will give your taste buds a surreal experience. Perfect for mixing with other fruity flavors or livening up a simple cocktail. Ingredients: Chai Tea, Natural strawberry, creamers (milk, half and half, heavy cream), simple syrup. Alcohol percentage = 5%"
        title.className = "descriptionTitle1 color31";
        text.className = "descriptionText1 color32";
      break;
      case "lychee":
        title.innerHTML = "Raichi Milk Tea"
        text.innerHTML = "Lychee is a delicatessen fruit, enjoyed for its sweetness and good taste therefore its combination with quality tea's from across Asia creates the perfect drink for any ocassion. KII's lychee milk tea is a refreshing tropical fruit flavor drink which will delight any boba and alcohol lovers. Perfect in large gatherings and social events. Ingredients: Chai Tea, Natural strawberry, creamers (milk, half and half, heavy cream), simple syrup. Alcohol percentage = 5%"
        title.className = "descriptionTitle1 color41";
        text.className = "descriptionText1 color42";
      break;
      case "chocolate":
        title.innerHTML = "Choco Milk Tea"
        text.innerHTML = "If you’ve ever wanted to feel like you’re drinking pure natural chocolate, then this treat is for you. Expect your taste buds to enjoy the full-bodied and indulging taste of this milk tea's chocolatey goodness. Made from the highest grade chocolate and natural quality tea from across Asia, KII's milk tea is the perfect beverage for any occasion.  Ingredients: Chai Tea, Chocolate, creamers (milk, half and half, heavy cream), simple syrup. Alcohol percentage = 5%"
        title.className = "descriptionTitle1 color51";
        text.className = "descriptionText1 color52";
      break;
    }
    container.appendChild(title)
    container.appendChild(text)
    document.body.appendChild(container)
    console.log(container);
    console.log(divNum);

    setTimeout(function () {
      document.getElementById('container' + divNum).style.left = "18%"
      document.getElementById('container' + divNum).style.width = "35vw"
      document.getElementById('container' + divNum).style.opacity = "1"
      document.getElementById('title' + divNum).style.transform = "translate(-50%, 0%)"
      document.getElementById('text' + divNum).style.transform = "translate(-50%, -50%)"
    }, 100);
  }


  //grow and shrink of the header underlines
    function grow(x) {
      document.getElementById('big' + x).style.width = "100%"
    }
    function shrink(x) {
      document.getElementById('big' + x).style.width = "0%"
    }

  //button animation
  function show() {
    document.getElementById('buttonOverlay').style.width = "100%"
    document.getElementById('button').style.color = "white"
  }
  function noshow() {
    document.getElementById('buttonOverlay').style.width = "0%"
    document.getElementById('button').style.color = "black"
  }
