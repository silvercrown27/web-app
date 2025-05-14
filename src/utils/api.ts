import Cookies from 'js-cookie';

const COOKIE_NAME = 'session';

export async function apiRequest(url: string, options: RequestInit = {}) {
    const token = Cookies.get(COOKIE_NAME);

    const headers: Record<string, string> = {
        ...(options.headers as Record<string, string>),
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    if (import.meta.env.MODE === 'development') {
        console.log("Sending request:", url, options);
    }

    try {
        const response = await fetch(url, { ...options, headers });
        const contentType = response.headers.get('content-type') || '';
        const text = await response.text();

        if (import.meta.env.MODE === 'development') {
            console.log("Response status:", response.status);

            if (contentType.includes('application/json')) {
                try {
                    const json = JSON.parse(text);
                    console.log("Response body (JSON):", json);
                } catch {
                    console.log("Response body (invalid JSON):", text.slice(0, 500));
                }
            }
        }

        if (!response.ok) {
            const errorData = text ? JSON.parse(text) : {};
            return { error: errorData.message || `Request failed with status ${response.status}` };
        }

        return text ? JSON.parse(text) : {};
    } catch (error) {
        return { error: "Something went wrong. Please try again later." };
    }
}
