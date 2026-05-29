import { NextResponse } from "next/server";

export type ContactPayload = {
  name: string;
  email: string;
  business: string;
  message?: string;
};

export type ContactResponse = {
  ok: boolean;
  message: string;
};

/**
 * POST /api/contact
 *
 * Handles diagnostic request submissions.
 * Currently logs to console; swap the body for a real email/CRM call
 * or proxy to NestJS backend when ready — no component changes needed.
 */
export async function POST(req: Request): Promise<NextResponse<ContactResponse>> {
  try {
    const body: ContactPayload = await req.json();

    if (!body.name || !body.email || !body.business) {
      return NextResponse.json(
        { ok: false, message: "Faltan campos requeridos." },
        { status: 400 }
      );
    }

    // TODO: replace with email service (Resend, SendGrid) or NestJS proxy
    console.log("[contact]", body);

    return NextResponse.json({ ok: true, message: "Mensaje recibido. Te contactamos pronto." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Error interno. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
