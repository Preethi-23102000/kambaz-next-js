export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        rows={10}
        cols={50}
        defaultValue={
          "The assignment is available online Submit a link to the landing page of your Web application running on Netify. The landing should include the following: Your full name and section links to each of the lab assignments link to the kanbas application. Links to all relevan source code repositories. The kambaz application should include a link to navigate back to the landing page."
        }
      ></textarea>
      <br />
      <br />
      <table cellPadding={5}>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" padding-top="10px">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td padding-top="10px">
              <select id="wd-group" defaultValue={"ASSIGNMENTS"}>
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as" defaultValue={"Percentage"}>
                <option>Percentage</option>
                <option>Grade</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>In Person</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              Online Entry Options <br />
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td align="right">
              <label htmlFor="wd-assign-to"> Assign </label>
            </td>
            <td>
              <label htmlFor="wd-assign-to"> Assign to</label>
            </td>
          </tr>
          <tr>
            <td> </td>
            <td>
              <input type="text" placeholder="Everyone" id="wd-assign-to" />
              <br />
            </td>
          </tr>
          <tr>
            <td> </td>
            <td>
              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
              <br />
              <br />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2024-05-06"
              />
            </td>
            <td>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2024-05-20"
              />
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <hr />
            </td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td>
              <button id="wd-cancel-assignment">Cancel</button> &nbsp;
              <button id="wd-save-assignment">Save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
