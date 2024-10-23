import { connectionString } from "@/lib/dbconnection";
import { Product } from "@/lib/model/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function PUT(request, content) {
  // console.log(content);
  const productId = content.params.productid;
  const filter = { _id: productId };
  const payload = await request.json();
  // console.log(payload);
  await mongoose.connect(connectionString);
  const result = await Product.findOneAndUpdate(filter, payload);
  console.log(result);
  return NextResponse.json({ result: result, success: true }, { status: 200 });
}

export async function GET(request, content) {
  const productId = content.params.productid;
  const filter = { _id: productId };
  console.log(filter);
  await mongoose.connect(connectionString);
  const result = await Product.findById(filter);
  return NextResponse.json({ result: result }, { status: 200 });
}

export async function DELETE(request, content) {
  const productId = content.params.productid;
  const record = { _id: productId };
  await mongoose.connect(connectionString);
  const result = await Product.deleteOne(record);
  return NextResponse.json({ result: result, success: true }, { status: 200 });
}
