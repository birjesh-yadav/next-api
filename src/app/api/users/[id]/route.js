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

export async function PUT(request, content) {
  let payload = await request.json();
  payload.id = content.params.id;
  console.log(payload);

  if (!payload.id || !payload.name | !payload.age | !payload.email) {
    return NextResponse.json(
      { result: "Required filed not passed", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

export function DELETE(request, content) {
  const id = content.params.id;
  if (id) {
    return NextResponse.json(
      { result: "Use has been deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Error occured", success: false },
      { status: 400 }
    );
  }
}
