import { redirect } from "next/dist/client/components/navigation";
// import Signin from "./Signin/page";
// import Signup from "./Signup/page";
// import Profile from "./Profile/page";

export default function AccountPage() {
  redirect("/Account/Signin");
  // return (
  //   <>
  //     <Signin />
  //     <Signup />
  //     <Profile />
  //   </>
  // );
}
