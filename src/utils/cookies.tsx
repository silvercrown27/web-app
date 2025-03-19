import Cookies from "js-cookie";

class CookieManager {
  static setCookie(name: string, value: string, days: number = 7): void {
    Cookies.set(name, value, { expires: days });
  }

  static getCookie(name: string): string | undefined {
    return Cookies.get(name);
  }

  static removeCookie(name: string): void {
    Cookies.remove(name);
  }
}

export default CookieManager;
