import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionString } from "@/lib/dbconnection";
import { Product } from "@/lib/model/product";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionString);
    data = await Product.find();
    console.log(data);
  } catch (error) {
    data: {
      success: false;
    }
  }
  return NextResponse.json({ result: data, success: true });
}

export async function POST(request) {
  await mongoose.connect(connectionString);

  //With static data
  //   let product = new Product({
  //     name: "Nokia 10",
  //     price: "2999",
  //     company: "nokia",
  //     color: "red",
  //     category: "mobile",
  //   });

  //For static data
  //const result = await product.save();

  // Data from psotman API hit
  let payload = await request.json();
  let product = new Product(payload);

  const result = await product.save();

  return NextResponse.json({ result: result, success: true });
}
