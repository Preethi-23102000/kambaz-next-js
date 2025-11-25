"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "./Table";
import * as coursesClient from "../../client";

export default function CoursePeople() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEnrolledUsers = async () => {
    if (!cid) return;

    try {
      setLoading(true);
      const enrolledUsers = await coursesClient.findUsersForCourse(
        cid as string
      );
      setUsers(enrolledUsers);
    } catch (error) {
      console.error("Error fetching enrolled users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnrolledUsers();
  }, [cid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PeopleTable users={users} fetchUsers={fetchEnrolledUsers} />
    </div>
  );
}
