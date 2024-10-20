//import { NextResponse } from "next/server";
import { user } from "@/util/db";
import { NextResponse } from "next/server";
export async function GET(params) {
  //return NextResponse.json({ name: "anil", age: 30 }, { status: 200 });
  const data = user;
  return NextResponse.json(data, { status: 200 });
}
