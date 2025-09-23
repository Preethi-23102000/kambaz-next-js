"use client";

export default function Modules() {
  return (
    <div id="wd-modules">
      <button>Collapse All</button>
      <button>View Progress</button>

      <select id="wd-select-one" defaultValue={"PublishAll"}>
        <option value="PublishAll">Publish All</option>
        <option value="UnPublishAll">UnPublish All</option>
      </select>

      <button>+ Module</button>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 1 - Intro to Web Dev</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Full Stack developer - Chapter 1 - Introduction
                </li>
                <li className="wd-content-item">
                  Full Stack developer - Chapter 2 - Creating user interface
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to webdevelopment
                </li>
                <li className="wd-content-item">
                  Creating http server with Node.js
                </li>
                <li className="wd-content-item">
                  Creating a React application
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 2 - HTML Basics</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Learn how to create user interface with HTML
                </li>
                <li className="wd-content-item">
                  Deploy the assignment to Netify.
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to HTML and the DOM.
                </li>
                <li className="wd-content-item">
                  Formatting web content with headings.
                </li>
                <li className="wd-content-item">
                  Formatting Content with lists and tables.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2, Lecture 1 - CSS and JavaScript</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Learn how to Styling User Interfaces with CSS
                </li>
                <li className="wd-content-item">
                  Programming User Interfaces with JavaScript
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Styling User Interfaces with CSS.
                </li>
                <li className="wd-content-item">
                  Implementing Responsive User Interfaces
                </li>
                <li className="wd-content-item">
                  Programming User Interfaces with JavaScript .
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2, Lecture 2 - Redux & State</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  learn about Strings, arrays, objects, functions, React
                  components
                </li>
                <li className="wd-content-item">
                  Dynamic content, router navigation
                </li>
                <li className="wd-content-item">
                  Maintaining User Interface State, Hooks
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Redux State, Reducers, Working with Forms
                </li>
                <li className="wd-content-item">
                  Application vs Component State
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
