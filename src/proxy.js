import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const { pathname } = request.nextUrl;

  // 🔒 profile protected
  if (!session && pathname.startsWith("/profile")) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  // 🔒 (optional) book details protected
  const isBookDetails = /^\/books\/[^/]+$/.test(pathname);

  if (!session && isBookDetails) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/books/:path*"],
};