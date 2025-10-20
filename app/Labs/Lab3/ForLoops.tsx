export default function ForLoops() {
  //to fix the below errors, change let to const where variables are never reassigned
  // ./app/Labs/Lab3/ForLoops.tsx
  //Error: 'stringArray1' is never reassigned. Use 'const' instead.  prefer-const
  //Error: 'stringArray2' is never reassigned. Use 'const' instead.  prefer-const

  // let stringArray1 = ["string1", "string3"];
  // let stringArray2 = [];

  const stringArray1 = ["string1", "string3"];
  const stringArray2 = [];

  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
  }
  return (
    <div id="wd-for-loops">
      <h4>Looping through arrays</h4>
      stringArray2 = {stringArray2} <hr />
    </div>
  );
}
