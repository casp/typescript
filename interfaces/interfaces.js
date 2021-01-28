var table = {
    name: "Table",
    unitPrice: 500
};
var tableOrder = {
    product: table,
    quantity: 1,
    getTotal: function (discount) {
        var priceWithoutDiscount = this.product.unitPrice *
            this.quantity;
        var discountAmount = priceWithoutDiscount * (discount || 0);
        return priceWithoutDiscount - discountAmount;
    }
};
console.log("Nombre: " + table.name + " Precio: " + table.unitPrice + "  Cant. " + tableOrder.quantity + " Total: " + tableOrder.getTotal(0));
