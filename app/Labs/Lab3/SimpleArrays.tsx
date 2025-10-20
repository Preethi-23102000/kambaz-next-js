export default function SimpleArrays() {
  //fixing below errors
  // Error: Unexpected var, use let or const instead.  no-var
  // Error: 'blockScoped' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'numberArray1' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'stringArray1' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'htmlArray1' is never reassigned. Use 'const' instead.  prefer-const
  // Error: Missing "key" prop for element in array  react/jsx-key
  // Error: Missing "key" prop for element in array  react/jsx-key
  // Error: 'variableArray1' is never reassigned. Use 'const' instead.  prefer-const

  // var functionScoped = 2;
  // let blockScoped = 5;
  // const constant1 = functionScoped - blockScoped;
  // let numberArray1 = [1, 2, 3, 4, 5];
  // let stringArray1 = ["string1", "string2"];
  // let htmlArray1 = [<li>Buy milk</li>, <li>Feed the pets</li>];
  // let variableArray1 = [
  //   functionScoped,
  //   blockScoped,
  //   constant1,
  //   numberArray1,
  //   stringArray1,
  // ];

  const functionScoped = 2;
  const blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  const numberArray1 = [1, 2, 3, 4, 5];
  const stringArray1 = ["string1", "string2"];
  const htmlArray1 = [
    <li key={"1"}>Buy milk</li>,
    <li key={"2"}>Feed the pets</li>,
  ];
  const variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];

  return (
    <div id="wd-simple-arrays">
      <h4>Simple Arrays</h4>
      numberArray1 = {numberArray1}
      stringArray1 = {stringArray1}
      <br />
      <br />
      variableArray1 = {variableArray1} <br />
      Todo list:
      <ol>{htmlArray1}</ol>
      <hr />
    </div>
  );
}
