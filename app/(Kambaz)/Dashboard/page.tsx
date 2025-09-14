import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/CS1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.webp" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS1234" className="wd-dashboard-course-link">
            <Image src="/images/java.png" width={200} height={150} />
            <div>
              <h5> CS1235 Java Fundamentals </h5>
              <p className="wd-dashboard-course-title">Java Developer </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS1234" className="wd-dashboard-course-link">
            <Image src="/images/ai.png" width={200} height={150} />
            <div>
              <h5> CS1236 Fundamentals of AI</h5>
              <p className="wd-dashboard-course-title">
                Artificial intelligence{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS1234" className="wd-dashboard-course-link">
            <Image src="/images/algo.jpeg" width={200} height={150} />
            <div>
              <h5> CS1237 Algorithms </h5>
              <p className="wd-dashboard-course-title">Software developer </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS1234" className="wd-dashboard-course-link">
            <Image src="/images/c.jpeg" width={200} height={150} />
            <div>
              <h5> CS1238 C# </h5>
              <p className="wd-dashboard-course-title">C# developer </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS1234" className="wd-dashboard-course-link">
            <Image src="/images/dbms.png" width={200} height={150} />
            <div>
              <h5> CS1239 Dbms</h5>
              <p className="wd-dashboard-course-title">
                Database Management System{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS1234" className="wd-dashboard-course-link">
            <Image src="/images/ml.jpg" width={200} height={150} />
            <div>
              <h5> CS1240 ML</h5>
              <p className="wd-dashboard-course-title">Machine Learning </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/CS1234" className="wd-dashboard-course-link">
            <Image src="/images/python.png" width={200} height={150} />
            <div>
              <h5> CS1241 Python</h5>
              <p className="wd-dashboard-course-title">Python Programming </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
