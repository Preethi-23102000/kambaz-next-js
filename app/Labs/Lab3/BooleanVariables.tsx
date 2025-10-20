export default function BooleanVariables() {
  //using const to fix the below errors
  //Error: 'numberVariable' is never reassigned. Use 'const' instead.  prefer-const
  //Error: 'floatingPointNumber' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'true1' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'false1' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'false2' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'true2' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'true3' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'true4' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'true5' is never reassigned. Use 'const' instead.  prefer-const
  // Error: 'false3' is never reassigned. Use 'const' instead.  prefer-const

  // let numberVariable = 123,
  //   floatingPointNumber = 234.345;
  // let true1 = true,
  //   false1 = false;
  // let false2 = true1 && false1;
  // let true2 = true1 || false1;
  // let true3 = !false2;
  // let true4 = numberVariable === 123; // always use === not ==
  // let true5 = floatingPointNumber !== 321.432;
  // let false3 = numberVariable < 100;

  const numberVariable = 123,
    floatingPointNumber = 234.345 as number;
  const true1 = true,
    false1 = false;
  const false2 = true1 && false1;
  const true2 = true1 || false1;
  const true3 = !false2;
  const true4 = numberVariable === 123; // always use === not ==
  const true5 = floatingPointNumber !== 321.432;
  const false3 = numberVariable < 100;

  return (
    <div id="wd-boolean-variables">
      <h4>Boolean Variables</h4>
      true1 = {true1 + ""} <br />
      false1 = {false1 + ""} <br />
      false2 = {false2 + ""} <br />
      true2 = {true2 + ""} <br />
      true3 = {true3 + ""} <br />
      true4 = {true4 + ""} <br />
      true5 = {true5 + ""} <br />
      false3 = {false3 + ""} <hr />
    </div>
  );
}
