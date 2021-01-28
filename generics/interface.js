function showType(args) {
    console.log(args);
}
showType({ id: 1, name: "test" });
// Output: {id: 1, name: "test"}
function showTypeTwo(args) {
    console.log(args);
}
showTypeTwo({ id: "001", name: ["This", "is", "a", "Test"] });
