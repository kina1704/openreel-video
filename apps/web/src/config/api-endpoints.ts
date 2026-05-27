/**
 * Centralized API endpoint configuration.
 *
 * All external service URLs should be defined here so they can be
 * swapped for different environments or self-hosted instances.
 */

const isDev = import.meta.env.DEV;

/** OpenReel cloud services. Set VITE_CLOUD_API_URL to your own backend. */
export const OPENREEL_CLOUD_URL =
  import.meta.env.VITE_CLOUD_API_URL ?? (isDev ? "http://localhost:8787" : "");

/** OpenReel transcription / TTS service. Set VITE_TTS_URL to override. */
export const OPENREEL_TTS_URL = import.meta.env.VITE_TTS_URL ?? "";

/** OpenReel transcription service (GPU). Set VITE_TRANSCRIBE_URL to override. */
export const OPENREEL_TRANSCRIBE_URL = import.meta.env.VITE_TRANSCRIBE_URL ?? "";

/**
 * Third-party API base URLs.
 * These are used by the api-proxy service in dev mode (direct calls)
 * and by the Cloudflare Pages Function proxy in production.
 * Application code should use apiFetch() from services/api-proxy.ts
 * instead of importing these directly.
 */
