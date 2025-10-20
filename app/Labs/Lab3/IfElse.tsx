export default function IfElse() {
  //to fix the below errors, change let to const where variables are never reassigned
  //Error: 'true1' is never reassigned. Use 'const' instead.  prefer-const
  //Error: 'false1' is never reassigned. Use 'const' instead.  prefer-const

  // let true1 = true,
  //   false1 = false;

  const true1 = true,
    false1 = false;
  return (
    <div id="wd-if-else">
      <h4>If Else</h4>
      {true1 && <p>true1</p>}
      {!false1 ? <p>!false1</p> : <p>false1</p>} <hr />
    </div>
  );
}
