"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment.length > 0);
  return (
    <span className="text-danger">
      {course?.name || "Course"}
      {segments.length > 2 && (
        <>
          {" "}
          &gt;{" "}
          {segments
            .slice(2)
            .slice(
              0,
              segments.slice(2).includes("People")
                ? segments.slice(2).indexOf("People") + 1
                : segments.slice(2).length
            )
            .map((segment, index, arr) => (
              <React.Fragment key={index}>
                {segment}
                {index < arr.length - 1 && " > "}
              </React.Fragment>
            ))}
        </>
      )}
    </span>
  );
}

// "use client";
// import React from "react";
// import { usePathname } from "next/navigation";

// export default function Breadcrumb({
//   course,
// }: {
//   course: { name: string } | undefined;
// }) {
//   const pathname = usePathname();
//   return (
//     <span>
//       {/* Course {course?.name} &gt; {pathname.split("/").pop()} */}
//       {course?.name} &gt; {pathname.split("/").pop()}
//     </span>
//   );
// }
