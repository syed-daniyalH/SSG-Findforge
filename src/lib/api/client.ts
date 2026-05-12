const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://techionik-nodejs-web-backend.onrender.com";

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      ...options,
      signal: options?.signal ?? AbortSignal.timeout(10000),

      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },

      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `API Error: ${response.status}`
    );
  }

  return response.json();
}
