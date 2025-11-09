import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <div id="wd-my-details">
        <b>Name : Preethi Rajesh Yennemadi</b>
        <br />
        <b>Section : 4</b>
        <br />
        <b>Classroom : Churchill Hall 101 on Mondays @ 6:00 - 9:20pm EST</b>
        <br />
        <b>
          <Link
            href="https://github.com/Preethi-23102000/kambaz-next-js"
            target="_blank"
            id="wd-github"
          >
            My Github Repository
          </Link>
        </b>
        <br />
      </div>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab4" id="wd-lab4-link">
            Lab 4: Managing State in React
          </Link>
        </li>
      </ul>
    </div>
  );
}
