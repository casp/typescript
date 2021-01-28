class Product {
   name: string;
   private _unitPrice: number;

   get unitPrice(): number {
      return this._unitPrice || 0;
   }
   set unitPrice(value: number) {
      if (value < 0) {
          value = 0;
      }
      this._unitPrice = value;
   }
}

const obj = new Product();
obj.name = "Car";
console.log(obj.unitPrice);
obj.unitPrice = -10;
console.log(obj.unitPrice);
