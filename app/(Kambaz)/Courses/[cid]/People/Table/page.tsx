export default function People() {
  return (
    <div id="wd-people">
      <h1 id="wd-people-title">People</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label htmlFor="wd-select-role">Filter Role: </label>
      <select id="wd-select-role">
        <option defaultValue="All">All</option>
        <option value="Assignment-1">Professor</option>
        <option value="Assignment-2">Student</option>
        <option value="Assignment-3">Teaching Assistant</option>
      </select>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label htmlFor="wd-select-sort-by">Sort By: </label>
      <select id="wd-select-sort-by">
        <option defaultValue="role">Role</option>
        <option value="student-name-a-z">Name A-Z</option>
        <option value="student-name-z-a">Name Z-A</option>
      </select>
      <br />
      <br />
      <table id="wd-grades-table" border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jose Annunziato</td>
            <td>Professor</td>
            <td>jose.annunziato@college.edu</td>
          </tr>
          <tr>
            <td>Pareeksit Bagh</td>
            <td>Teaching Assistant</td>
            <td>pareekdit.bagh@college.edu</td>
          </tr>
          <tr>
            <td>John doe</td>
            <td>Student</td>
            <td>john.doe@college.edu</td>
          </tr>
          <tr>
            <td>Preethi Y</td>
            <td>Student</td>
            <td>preethi.y@college.edu</td>
          </tr>
          <tr>
            <td>Swathi B</td>
            <td>Student</td>
            <td>swathi.b@college.edu</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
