import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //you want to immediately return nextResponse.
  return NextResponse.redirect(new URL("events/all", request.url));
}

export const config = {
  matcher: ["/events"],
};

/*
middleware is used a lot during authentication. must be created at src folder for nextJS to detect the middleware.ts

*/
