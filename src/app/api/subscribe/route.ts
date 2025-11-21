import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, name } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const API_KEY = process.env.MAILCHIMP_API_KEY!;
    const SERVER = process.env.MAILCHIMP_SERVER_PREFIX!;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID!;

    const data = {
      email_address: email,
      status: "pending", 
      merge_fields: {
        FNAME: name || "",
      },
    };

    const response = await fetch(
      `https://${SERVER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (response.status === 400 && result.title === "Member Exists") {
      return NextResponse.json(
        {
          error: "You are already subscribed. Check your email to confirm.",
          duplicate: true,
        },
        { status: 200 }
      );
    }

    if (!response.ok) {
      return NextResponse.json({ error: result.detail }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: "Please check your email to confirm your subscription.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
