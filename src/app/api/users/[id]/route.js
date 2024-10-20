//import { NextResponse } from "next/server";
import { user } from "@/util/db";
import { NextResponse } from "next/server";
export async function GET(request, content) {
  //return NextResponse.json({ name: "anil", age: 30 }, { status: 200 });
  console.log(request);
  console.log(content);
  const currentUserId = content.params.id;
  const data = user;
  const currentUserDetails = data.filter((item) => item.id == currentUserId);
  console.log(currentUserId);
  return NextResponse.json(
    currentUserDetails.length == 0
      ? { result: "No Record Found", success: false }
      : { result: currentUserDetails, success: true },
    { status: 200 }
  );
}
