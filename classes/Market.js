var Market = /** @class */ (function () {
    function Market(id, name, alias) {
        this.id = id;
        this.name = name;
        this.alias = alias;
    }
    Market.prototype.MarketInformation = function () {
        return "Name: " + this.name + " Alias: " + this.alias;
    };
    return Market;
}());
//const market = new Market(1, "Houston", "HOU");
var market = "This is not a market object";
if (market instanceof Market) {
    console.log(market.MarketInformation());
}
