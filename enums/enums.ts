enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}

//Referencia por key o valor

const okNumber = StatusCodes.OK;
console.log(`okNumber ${okNumber}`);
const okNumberIndex = StatusCodes["OK"];
console.log(`okNumber ${okNumberIndex}`);
const stringBadRequest = StatusCodes[400];
console.log(`okNumber ${stringBadRequest}`);
console.log(StatusCodes.Unauthorized);
console.log(StatusCodes.NotFound);

//Asignar string a enums
enum MimeTypes {
  JPEG = 'image/jpeg',
  PNG = 'image/png',
  PDF = 'application/pdf', 
}

console.log(MimeTypes.JPEG);
