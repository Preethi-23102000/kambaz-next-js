"use client";
import { FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export default function AssignmentSearchBar() {
  return (
    <div>
      <div className="search-wrapper float-start">
        <InputGroup className="mb-3">
          <InputGroup.Text className="search-icon">
            <FaSearch />
          </InputGroup.Text>
          <FormControl
            type="text"
            className="search-input"
            placeholder="Search..."
          />
        </InputGroup>
      </div>
    </div>
  );
}
