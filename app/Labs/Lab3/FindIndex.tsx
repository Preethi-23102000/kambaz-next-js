export default function FindIndex() {
  //to fix the below errors, change let to const where variables are never reassigned
  //Error: 'numberArray1' is never reassigned. Use 'const' instead.  prefer-const
  //Error: 'stringArray1' is never reassigned. Use 'const' instead.  prefer-const

  // let numberArray1 = [1, 2, 4, 5, 6];
  // let stringArray1 = ["string1", "string3"];

  const numberArray1 = [1, 2, 4, 5, 6];
  const stringArray1 = ["string1", "string3"];

  const fourIndex = numberArray1.findIndex((a) => a === 4);
  const string3Index = stringArray1.findIndex((a) => a === "string3");
  return (
    <div id="wd=find-index">
      <h2>Find Index</h2>
      fourIndex = {fourIndex}
      <br />
      string3Index={string3Index}
      <hr />
    </div>
  );
}
