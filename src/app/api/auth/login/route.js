import { NextResponse } from "next/server";

const MOCK_USER = {
  email: "admin@example.com",
  password: "123456",
};
export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      const response = NextResponse.json({
        success: true,
        message: "Login successful",
      });
      response.cookies.set("auth_token", "logged_in", {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
      return response;
    }
    return NextResponse.json(
      { message: "Invalid Credentials" },
      { status: 401 },
    );
  } catch (error) {
    console.log("Login error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
