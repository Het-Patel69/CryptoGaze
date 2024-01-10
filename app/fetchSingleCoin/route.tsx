import next from "next";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      throw new Error(
        `Failed to fetch data from CoinGecko API. Status: ${res.status}`
      );
    }

    const tempData = await res.json();
    return NextResponse.json(tempData);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
