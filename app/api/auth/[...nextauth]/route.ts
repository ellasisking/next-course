import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";

import { authOptions } from "../authOptions";

const prisma = new PrismaClient();
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
