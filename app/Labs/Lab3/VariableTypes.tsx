export default function VariableTypes() {
  //fixing the errors below
  // Error: 'numberVariable' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'floatingPointNumber' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'stringVariable' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'booleanVariable' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'isNumber' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'isString' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'isBoolean' is never reassigned. Use 'const' instead.  prefer-const

  // let numberVariable = 123;
  // let floatingPointNumber = 234.345;
  // let stringVariable = "Hello World!";
  // let booleanVariable = true;
  // let isNumber = typeof numberVariable;
  // let isString = typeof stringVariable;
  // let isBoolean = typeof booleanVariable;

  const numberVariable = 123;
  const floatingPointNumber = 234.345;
  const stringVariable = "Hello World!";
  const booleanVariable = true;
  const isNumber = typeof numberVariable;
  const isString = typeof stringVariable;
  const isBoolean = typeof booleanVariable;

  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <hr />
    </div>
  );
}
