import Link from "next/link";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign In</h3>
      <input placeholder="Username" className="wd-username" />
      <br />
      <input placeholder="Password" type="password" className="wd-password" />
      <br />
      <Link href="/Dashboard" className="wd-signin-btn">
        Sign in
      </Link>
      <br />
      <Link href="Signup" className="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
