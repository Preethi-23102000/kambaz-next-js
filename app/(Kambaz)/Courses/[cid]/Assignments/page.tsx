import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/CS1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
          <br />
          Multiple Modules| <b>Not available until </b>May 6 at 12:00 am |
          <b>Due </b> May 13 at 11.59 pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/CS1234/Assignments/123"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
          <br />
          Multiple Modules| <b>Not available until </b>May 13 at 12:00 am |
          <b>Due </b> May 20 at 11.59 pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/CS1234/Assignments/123"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </Link>
          <br />
          Multiple Modules| <b>Not available until </b>May 20 at 12:00 am |
          <b>Due </b> May 27 at 11.59 pm | 100 pts
        </li>
      </ul>

      <br />

      <h3 id="wd-quizzes-title">
        Quizzes 10% of Total <button>+</button>
      </h3>
      <ul id="wd-quiz-list">
        <li className="wd-quiz-list-item">
          <b>Quiz 1 - HTML Basics</b>
          <br />
          Multiple Modules| <b>Not available until </b>May 13 at 12:00 am |
          <b>Due </b> May 14 at 11.59 pm | 100 pts
        </li>
        <li className="wd-quiz-list-item">
          <b>Quiz 2 - CSS + JavaScript</b>
          <br />
          Multiple Modules| <b>Not available until </b>May 20 at 12:00 am |
          <b>Due </b> May 21 at 11.59 pm | 100 pts
        </li>
      </ul>

      <br />

      <h3 id="wd-project-title">
        Project 20% of Total <button>+</button>
      </h3>
      <ul id="wd-project-list">
        <li className="wd-project-list-item">
          <b>Final Project</b>
          <br />
          Multiple Modules| <b>Due </b> July 14 at 11.59 pm | 100 pts
        </li>
      </ul>

      <br />

      <h3 id="wd-exam-title">
        Exam 30% of Total <button>+</button>
      </h3>
      <ul id="wd-exam-list">
        <li className="wd-exam-list-item">
          <b>Exam 1</b>
          <br />
          Multiple Modules| <b>Due </b> May 15 at 11.59 pm | 100 pts
        </li>
        <li className="wd-exam-list-item">
          <b>Exam 2</b>
          <br />
          Multiple Modules| <b>Due </b> June 15 at 11.59 pm | 100 pts
        </li>
        <li className="wd-exam-list-item">
          <b>Final Exam</b>
          <br />
          Multiple Modules| <b>Due </b> July 15 at 11.59 pm | 100 pts
        </li>
      </ul>
    </div>
  );
}
