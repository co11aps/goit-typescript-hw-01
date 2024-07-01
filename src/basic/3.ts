// Створіть змінну, яка може містити або рядок, або число (union type)?
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).

let stringOrNumber: string | number;
stringOrNumber = 10;
stringOrNumber = "Hello!";

type LiteralVariable = "enable" | "disable";
let switcher: LiteralVariable;
switcher = "disable";
