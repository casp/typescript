interface Product {
  name: string;
  unitPrice: number;
}

interface IOrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number;
}

class OrderDetail implements IOrderDetail {
  product: Product;
  quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice *
    this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}

const product : Product = {
  name: "Table",
  unitPrice: 14.
}
const order = new OrderDetail(product, 1);

console.log(`Producto: ${ product.name} Precio: ${product.unitPrice} Cant. ${order.quantity} Total: ${order.getTotal(0)}`);