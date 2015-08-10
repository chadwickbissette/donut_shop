

var Shop = function(storeLocation, minCustHr, maxCustHr, avgDonutHr, hoursOpen) {
  this.storeLocation = storeLocation;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgDonutHr = avgDonutHr;
  this.hoursOpen = hoursOpen;
  this.totalSales = 0;
  this.salesArray = [];
}

Shop.prototype.generateRandom = function(min, max){
  return Math.floor(Math.random()*(max - min + 1)) + min;
}

Shop.prototype.calcSales = function(){
  for (i = 0; i < this.hoursOpen; i++) {
    this.salesArray[i] = Math.ceil(this.generateRandom(this.minCustHr, this.maxCustHr)*this.avgDonutHr);
    this.totalSales += this.salesArray[i];
  }
}

Shop.prototype.renderShop = function(){
  var rowNode = document.createElement('tr');
  rowNode.innerHTML = this.storeLocation;

  for (i = 0; i < this.hoursOpen; i++) {
    var elNode = document.createElement('td');
    var elText = document.createTextNode(this.salesArray[i]);
    elNode.appendChild(elText);
    rowNode.appendChild(elNode);
  }

  var storeTotal = document.createElement('td');
  storeTotal.innerHTML = this.totalSales;
  rowNode.appendChild(storeTotal);

  var table = document.getElementById('idOne');
  table.appendChild(rowNode);
}

Shop.prototype.start = function(){
  this.calcSales();
  this.renderShop();
}


var shopDowntown = new Shop('Downtown', 8, 43, 4.5, 11);
var shopCapHill = new Shop('Captiol Hill', 4, 37, 2, 11);
var shopSLU = new Shop('South Lake Union', 9, 23, 6.33, 11);
var shopWedgewood = new Shop('Wedgewood', 2, 28, 1.25, 11);
var shopBallard = new Shop('Ballard', 8, 58, 3.75, 11);

shopDowntown.start();
shopCapHill.start();
shopSLU.start();
shopWedgewood.start();
shopBallard.start();

console.dir(shopDowntown);
console.log(shopDowntown.salesArray);
console.log(shopDowntown.totalSales);











  // rowTitle = document.createElement('td');
  // rowTitleText = document.createTextNode(this.storeLocation);
  // rowTitle.appendChild(rowTitleText);
  // rowNode.appendChild(rowTitle);
