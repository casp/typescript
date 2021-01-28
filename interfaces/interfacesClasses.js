var OrderDetail = /** @class */ (function () {
    function OrderDetail(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    OrderDetail.prototype.getTotal = function (discount) {
        var priceWithoutDiscount = this.product.unitPrice *
            this.quantity;
        var discountAmount = priceWithoutDiscount * discount;
        return priceWithoutDiscount - discountAmount;
    };
    return OrderDetail;
}());
var product = {
    name: "Table",
    unitPrice: 14.
};
var order = new OrderDetail(product, 1);
console.log("Producto: " + product.name + " Precio: " + product.unitPrice + " Cant. " + order.quantity + " Total: " + order.getTotal(0));
