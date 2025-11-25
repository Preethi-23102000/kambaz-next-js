import { ReactNode } from "react";
import TOC from "./TOC";
import "./styles.css";
export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-labs-layout">
      <table>
        <tbody>
          <tr>
            <td valign="top" width="100px">
              <TOC />
            </td>
            <td valign="top">{children}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
