export function createSession(token: string) {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()
  document.cookie = `session=${token}; expires=${expires}; path=/; SameSite=Lax; Secure`

  window.location.href = '/admin/panel'
}

export async function verifySession() {
  const token = getCookie('session')

  if (!token) {
      window.location.href = '/login'
      return
  }

  try {
      const res = await fetch(`${import.meta.env.VITE_LARAVEL_API_URL}/user`, {
          credentials: 'include'
      })

      const user = await res.json()

      if (!res.ok || !user || !user.role || !user.email) {
          throw new Error('Invalid session data')
      }

      return { isAuth: true, user: { role: user.role, email: user.email } }
  } catch {
      deleteCookie('session')
      window.location.href = '/login'
  }
}

export async function updateSession() {
  const token = getCookie('session')

  if (!token) {
      return null
  }

  try {
      const res = await fetch(`${import.meta.env.VITE_LARAVEL_API_URL}/user`, {
          credentials: 'include'
      })

      if (!res.ok) throw new Error()

      const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()
      document.cookie = `session=${token}; expires=${expires}; path=/; SameSite=Lax; Secure`

      return { isAuth: true }
  } catch {
      deleteCookie('session')
      return null
  }
}

export function deleteSession() {
  deleteCookie('session')
  window.location.href = '/login'
}

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? match[2] : null
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax; Secure`
}
