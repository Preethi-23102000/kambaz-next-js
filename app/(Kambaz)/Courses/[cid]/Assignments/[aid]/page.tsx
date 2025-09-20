export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" rows={10} cols={50}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netify. The landing should include the
        following: Your full name and section links to each of the lab
        assignments link to the kanbas application. Links to all relevan source
        code repositories. The kambaz application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected>Assignments</option>
              <option>Quizzes</option>
              <option>Exams</option>
              <option>Projects</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected>Percentage</option>
              <option>Grade</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected>Online</option>
              <option>In Person</option>
            </select>
          </td>
        </tr>
        <br />
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
        <br />
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-assign-to"> Assign to</label>
            <br />
            <input type="text" placeholder="Everyone" id="wd-assign-to" />
            <br />
            <br />
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" id="wd-due-date" value="2024-05-13" />
            <br />
            <br />
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
                <input type="date" id="wd-available-from" value="2024-05-06" />
              </td>
              <td>
                <input type="date" id="wd-available-until" value="2024-05-20" />
              </td>
            </tr>
          </td>
        </tr>
        <tr>
          <td colSpan={3}>
            <hr />
          </td>
        </tr>
        <tr>
          <br />
          <td></td>
          <td>
            <button id="wd-cancel-assignment">Cancel</button>
            <button id="wd-save-assignment">Save</button>
          </td>
        </tr>
      </table>
      <hr />
    </div>
  );
}
