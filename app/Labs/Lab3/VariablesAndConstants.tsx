export default function VariablesAndConstants() {
  //fixing the errors below
  // Error: Unexpected var, use let or const instead.  no-var
  // Error: 'blockScoped' is never reassigned. Use 'const' instead.  prefer-const

  // var functionScoped = 2;
  // let blockScoped = 5;

  const functionScoped = 2;
  const blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <hr />
    </div>
  );
}
