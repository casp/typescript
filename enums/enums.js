var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
//Referencia por key o valor
var okNumber = StatusCodes.OK;
console.log("okNumber " + okNumber);
var okNumberIndex = StatusCodes["OK"];
console.log("okNumber " + okNumberIndex);
var stringBadRequest = StatusCodes[400];
console.log("okNumber " + stringBadRequest);
console.log(StatusCodes.Unauthorized);
console.log(StatusCodes.NotFound);
//Asignar string a enums
var MimeTypes;
(function (MimeTypes) {
    MimeTypes["JPEG"] = "image/jpeg";
    MimeTypes["PNG"] = "image/png";
    MimeTypes["PDF"] = "application/pdf";
})(MimeTypes || (MimeTypes = {}));
console.log(MimeTypes.JPEG);
