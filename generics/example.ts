interface IPerson {
  id: number;
  name: string;
  age: number;
}

class Field<T, K extends keyof T> {
  name: K;
  label: string;
  defaultValue: T[K];
}

const nameField: Field<IPerson, "name"> = new Field();
nameField.label = "Name";
nameField.defaultValue = "Casp";
console.log(nameField);