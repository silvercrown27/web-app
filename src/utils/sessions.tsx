// session.ts
import Cookies from 'js-cookie';

const COOKIE_NAME = 'session';

export function createSession(token: string) {
  Cookies.set(COOKIE_NAME, token, {
    expires: 7,
    secure: true,
    sameSite: 'Lax',
    path: '/',
  });

  window.location.href = '/dashboard';
}

export async function verifySession(): Promise<{ isAuth: boolean; user: any }> {
  const token = Cookies.get(COOKIE_NAME);
  if (!token) {
    return { isAuth: false, user: null };
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/user`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error('Auth failed');

    const user = await res.json();
    console.log("Session info => ", user)

    if (!user?.role || !user?.email) {
      return { isAuth: false, user: null };
    }

    return { isAuth: true, user };
  } catch {
    deleteSession();
    return { isAuth: false, user: null };
  }
}

export function updateSession() {
  const token = Cookies.get(COOKIE_NAME);
  if (!token) return;

  Cookies.set(COOKIE_NAME, token, {
    expires: 7,
    secure: true,
    sameSite: 'Lax',
    path: '/',
  });
}

export function deleteSession() {
  Cookies.remove(COOKIE_NAME, { path: '/' });
  window.location.href = '/login';
}
