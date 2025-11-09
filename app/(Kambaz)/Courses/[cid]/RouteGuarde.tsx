"use client";
import { useSelector } from "react-redux";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { RootState } from "../../store";

export default function RouteGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { cid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer
  );

  useEffect(() => {
    // Redirect to login if not logged in
    if (!currentUser) {
      router.push("/Account/Signin");
      return;
    }

    // Faculty can access any course
    if (currentUser.role === "FACULTY") {
      return;
    }

    // Check if student/other user is enrolled in this course
    const isEnrolled = enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === cid
    );

    if (!isEnrolled) {
      alert("You must be enrolled in this course to access it.");
      router.push("/Dashboard");
    }
  }, [currentUser, enrollments, cid, router]);

  // Show loading or the protected content
  if (!currentUser) {
    return <div>Redirecting to login...</div>;
  }

  if (currentUser.role !== "FACULTY") {
    const isEnrolled = enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === cid
    );

    if (!isEnrolled) {
      return <div>Redirecting to Dashboard...</div>;
    }
  }

  return <>{children}</>;
}
