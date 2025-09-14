import Link from "next/link";

export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <h2> Name : Preethi Rajesh Yennemadi</h2>
      <Link
        href="https://github.com/Preethi-23102000/kambaz-next-js"
        target="_blank"
        id="wd-github"
      >
        My Github Repository
      </Link>
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
      </ul>
    </div>
  );
}
