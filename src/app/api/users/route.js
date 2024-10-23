//import { NextResponse } from "next/server";
import { user } from "@/util/db";
import { NextResponse } from "next/server";
export async function GET(params) {
  //return NextResponse.json({ name: "anil", age: 30 }, { status: 200 });
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  //console.log(request);
  let payload = await request.json();
  console.log(payload);
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Required filed is not avilable", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "New user created", success: true },
    { status: 200 }
  );
}
