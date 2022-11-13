export {};

declare global {
  interface Window {
    isDevice: any; // 👈️ turn off type checking
  }
}