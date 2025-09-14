"use client";

export default function Modules() {
  return (
    <div>
      <button>Collapse All</button>
      <button>View Progress</button>

      <select id="wd-select-one">
        <option selected value="PublishAll">
          Publish All
        </option>
        <option value="UnPublishAll">UnPublish All</option>
      </select>

      <button>+ Module</button>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
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
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Learn how to create user interface with HTML
                </li>
                <li className="wd-content-item">
                  Deploy the assignment to NEtify.
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
          <div className="wd-title">Week 3</div>
        </li>
      </ul>
    </div>
  );
}
