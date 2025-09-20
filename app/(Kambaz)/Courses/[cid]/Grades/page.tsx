export default function Grades() {
  return (
    <div id="wd-grades">
      <h1 id="wd-grades-title">Summary of Grades</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label htmlFor="wd-select-one-assignment">Filter: </label>
      <select id="wd-select-one-assignment">
        <option defaultValue="All">All</option>
        <option value="Assignment-1">Assignment-1</option>
        <option value="Assignment-2">Assignment-2</option>
        <option value="Assignment-3">Assignment-3</option>
        <option value="Assignment-4">Assignment-4</option>
        <option value="Assignment-5">Assignment-5</option>
        <option value="Assignment-6">Assignment-6</option>
        <option value="Assignment-7">Assignment-7</option>
        <option value="Assignment-8">Assignment-8</option>
        <option value="Assignment-9">Assignment-9</option>
        <option value="Assignment-10">Assignment-10</option>
      </select>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label htmlFor="wd-select-sort-by">Sort By: </label>
      <select id="wd-select-sort-by">
        <option value="low-to-high">Low to high</option>
        <option value="high-to-low">High to low</option>
        <option value="student-name-a-z">Student name A-Z</option>
        <option value="student-name-z-a">Student name Z-A</option>
      </select>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button id="wd-download-grades-button">Download Grades</button>
      <br />
      <br />
      <table id="wd-grades-table" border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <tr>
            <th>Student</th>
            <th>Assignment-1</th>
            <th>Assignment-2</th>
            <th>Assignment-3</th>
            <th>Assignment-4</th>
            <th>Assignment-5</th>
            <th>Assignment-6</th>
            <th>Assignment-7</th>
            <th>Assignment-8</th>
            <th>Assignment-9</th>
            <th>Assignment-10</th>
            <th>Total</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John doe</td>
            <td>85</td>
            <td>90</td>
            <td>78</td>
            <td>88</td>
            <td>92</td>
            <td>80</td>
            <td>87</td>
            <td>91</td>
            <td>84</td>
            <td>89</td>
            <td>864</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Preethi Y</td>
            <td>85</td>
            <td>90</td>
            <td>78</td>
            <td>88</td>
            <td>92</td>
            <td>80</td>
            <td>87</td>
            <td>88</td>
            <td>92</td>
            <td>80</td>
            <td>860</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Swathi B</td>
            <td>87</td>
            <td>73</td>
            <td>79</td>
            <td>89</td>
            <td>78</td>
            <td>100</td>
            <td>76</td>
            <td>73</td>
            <td>97</td>
            <td>70</td>
            <td>822</td>
            <td>A-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
