import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

export const config = {
  // * zero or more parametes
  // + one or more
  // ?: zero or one
  matcher: ["/users"],
};
