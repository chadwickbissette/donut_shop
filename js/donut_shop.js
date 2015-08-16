

var Shop = function(storeLocation, minCustHr, maxCustHr, avgDonutCust, hoursOpen) {
  this.storeLocation = storeLocation;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgDonutCust = avgDonutCust;
  this.hoursOpen = hoursOpen;
  this.totalSales = 0;
  this.salesArray = [];
}

Shop.prototype.generateRandom = function(min, max){
  return Math.floor(Math.random()*(max - min + 1)) + min;
}

Shop.prototype.calcSales = function(){
  for (var i = 0; i < this.hoursOpen; i++) {
    this.salesArray[i] = Math.ceil(this.generateRandom(this.minCustHr, this.maxCustHr)*this.avgDonutCust);
    this.totalSales += this.salesArray[i];
  }
  this.salesArray.push(this.totalSales);
}

Shop.prototype.renderShop = function(){
  var rowNode = document.createElement('tr');
  rowNode.id = this.storeLocation;
  rowNode.innerHTML = '<th>' + this.storeLocation + '</th>';

  for (var i = 0; i < this.salesArray.length; i++) {
    var elNode = document.createElement('td');
    var elText = document.createTextNode(this.salesArray[i]);
    elNode.appendChild(elText);
    rowNode.appendChild(elNode);
  }

  var table = document.getElementById('idOne');
  table.appendChild(rowNode);
}

Shop.prototype.start = function(){
  this.calcSales();
  this.renderShop();
}

var numberHoursOpen = 11;
var shopsArr = [];

shopsArr.push(shopDowntown = new Shop('Downtown', 8, 43, 4.5, numberHoursOpen));
shopsArr.push(shopCapHill = new Shop('Capitol Hill', 4, 37, 2, numberHoursOpen));
shopsArr.push(shopSLU = new Shop('South Lake Union', 9, 23, 6.33, numberHoursOpen));
shopsArr.push(shopWedgewood = new Shop('Wedgewood', 2, 28, 1.25, numberHoursOpen));
shopsArr.push(shopBallard = new Shop('Ballard', 8, 58, 3.75, numberHoursOpen));

shopDowntown.start();
shopCapHill.start();
shopSLU.start();
shopWedgewood.start();
shopBallard.start();

var oneIfTrue = 0;
var indexLocation = 0;
var checkExistingStores = function(storeName){
  oneIfTrue = 0;
  var indexLocation = 0;
  for (var i = 0; i < shopsArr.length; i++){
    if (shopsArr[i].storeLocation == storeName){
      oneIfTrue = oneIfTrue + 1;
      indexLocation = i;
    }
  }
return oneIfTrue;
}

// ADD FORM TO OBTAIN NEW INFORMATION FROM USER
var theForm = document.getElementById('shop-form');
var handleShopFormSubmit = function(){
  event.preventDefault();
  var storeName = event.target.storeName.value;
  var newShop = new Shop(storeName, event.target.minCustomers.value, event.target.maxCustomers.value, event.target.avgDonuts.value, numberHoursOpen);

  if (checkExistingStores(storeName)) {
    newShop.calcSales();
    shopsArr[indexLocation] = newShop;
    var replacementNodes = document.getElementById(storeName).childNodes;
    for (var i=0; i < newShop.salesArray.length; i++){
      replacementNodes[i+1].innerHTML = newShop.salesArray[i];
    }
  } else {
    shopsArr.push(newShop);
    newShop.start();
    console.log(shopsArr);
  }
}

theForm.addEventListener('submit', handleShopFormSubmit);

//Animate the sprinkle
// $(".sprinkle").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
//   $(this).removeClass("animated")})

// $(".sprinkle").hover(function(){$(this).addClass("animated")})

var firstEgg = document.getElementById('firstEgg');
firstEgg.addEventListener('mouseover', function(){firstEgg.className = "sprinkle animated"});

var secondEgg = document.getElementById('secondEgg');
secondEgg.addEventListener('mouseover', function(){secondEgg.className = "sprinkle animated"});

var thirdEgg = document.getElementById('thirdEgg');
thirdEgg.addEventListener('mouseover', function(){thirdEgg.className = "sprinkle animated"});

var fourthEgg = document.getElementById('fourthEgg');
fourthEgg.addEventListener('mouseover', function(){fourthEgg.className = "sprinkle animated"});

var fairy = document.getElementById('fairy');
fairy.addEventListener('mousedown', function(){firstEgg.className = "sprinkle"; secondEgg.className = "sprinkle"; thirdEgg.className = "sprinkle"; fourthEgg.className = "sprinkle"});
