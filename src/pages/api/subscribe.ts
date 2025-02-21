export const prerender = false;

export async function POST({ request }: { request: Request }) {
    const API_KEY = import.meta.env.KIT_API_KEY;
    const FORM_ID = import.meta.env.KIT_FORM_ID;
    const KIT_API_URL = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`;
  
    try {
      const { email } = await request.json();
      if (!email) return new Response("Email is required", { status: 400 });
  
      const response = await fetch(KIT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: API_KEY, email }),
      });
  
      return response.ok
        ? new Response("Subscribed successfully!", { status: 200 })
        : new Response("Subscription failed", { status: response.status });
    } catch {
      return new Response("Internal server error", { status: 500 });
    }
  }