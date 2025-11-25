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
    if (!currentUser) {
      router.push("/Account/Signin");
      return;
    }

    if (currentUser.role === "FACULTY") {
      return;
    }

    const isEnrolled = enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === cid
    );

    if (!isEnrolled) {
      alert("You must be enrolled in this course to access it.");
      router.push("/Dashboard");
    }
  }, [currentUser, enrollments, cid, router]);

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
