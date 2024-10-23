import { NextResponse } from "next/server";

export async function GET(request, content) {
  //console.log(content);
  const studentDetails = content.params.student;
  //console.log(studentDetails);
  //return new Response("Catch all sub routes");
  // hit this url - http://localhost:3000/api/student/10/anil/32/India
  return NextResponse.json({ result: studentDetails }, { status: 200 });
}
