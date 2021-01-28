class Market {
  private id: number;
  private name: string;
  private description?: string;
  private alias: string;

  constructor(id: number, name: string, alias: string) {
    this.id = id; 
    this.name = name;
    this.alias = alias;
  }

  MarketInformation() : string {
    return `Name: ${this.name} Alias: ${this.alias}`;
  }
}

//const market = new Market(1, "Houston", "HOU");
const market: any = "This is not a market object";
if ( market instanceof Market) {
  console.log(market.MarketInformation());
}