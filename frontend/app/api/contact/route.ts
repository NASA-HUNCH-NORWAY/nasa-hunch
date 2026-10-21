import { handleForm } from "@/app/lib/forms";
export const runtime = "nodejs";
export async function POST(request:Request) { return handleForm(request,"contact"); }
