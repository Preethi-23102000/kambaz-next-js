export default function MapFunction() {
  //to fix the below errors, change let to const where variables are never reassigned and also setting key prop for list items
  //Error: 'numberArray1' is never reassigned. Use 'const' instead.  prefer-const
  //Error: Missing "key" prop for element in iterator  react/jsx-key

  // let numberArray1 = [1, 2, 3, 4, 5, 6];
  const numberArray1 = [1, 2, 3, 4, 5, 6];
  const square = (a: number) => a * a;
  const todos = ["Buy milk", "Feed the pets"];
  const squares = numberArray1.map(square);
  const cubes = numberArray1.map((a) => a * a * a);
  return (
    <div id="wd-map-function">
      <h4>Map Function</h4>
      squares = {squares} <br />
      cubes = {cubes} <br />
      Todos:
      <ol>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ol>
      <hr />
    </div>
  );
}
