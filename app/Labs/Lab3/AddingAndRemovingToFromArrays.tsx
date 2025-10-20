export default function AddingAndRemovingToFromArrays() {
  // let numberArray1 = [1, 2, 3, 4, 5];
  // let stringArray1 = ["string1", "string2"];
  // let todoArray = [<li>Buy milk</li>, <li>Feed the pets</li>];

  // using const keyword to resolve
  //   2:7  Error: 'numberArray1' is never reassigned. Use 'const' instead.  prefer-const
  // 3:7  Error: 'stringArray1' is never reassigned. Use 'const' instead.  prefer-const
  // 4:7  Error: 'todoArray' is never reassigned. Use 'const' instead.  prefer-const

  //adding key prop to resolve
  //4:20  Error: Missing "key" prop for element in array  react/jsx-key
  //4:39  Error: Missing "key" prop for element in array  react/jsx-key

  const numberArray1 = [1, 2, 3, 4, 5];
  const stringArray1 = ["string1", "string2"];
  const todoArray = [
    <li key={"1"}>Buy milk</li>,
    <li key={"2"}>Feed the pets</li>,
  ];
  numberArray1.push(6); // adding new items
  stringArray1.push("string3");
  todoArray.push(<li>Walk the dogs</li>);
  numberArray1.splice(2, 1); // remove 1 item starting at 2
  stringArray1.splice(1, 1);
  return (
    <div id="wd-adding-removing-from-arrays">
      <h4>Add/remove to/from arrays</h4>
      numberArray1 = {numberArray1} <br /> stringArray1 = {stringArray1} <br />
      Todo list:
      <ol>{todoArray}</ol>
      <hr />
    </div>
  );
}
