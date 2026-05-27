// Telemetry stub. Upstream wired PostHog here; we removed the dependency to
// shrink attack surface and avoid tracking users. Restore by reinstalling
// posthog-js and re-importing if you want analytics.
import { useCallback } from "react";

type EventProperties = Record<string, string | number | boolean | null>;

export function useAnalytics() {
  const track = useCallback((_event: string, _properties?: EventProperties) => {
    // no-op
  }, []);

  const identify = useCallback(
    (_userId: string, _properties?: EventProperties) => {
      // no-op
    },
    [],
  );

  return { track, identify, isEnabled: false };
}

export const AnalyticsEvents = {
  PROJECT_CREATED: "project_created",
  PROJECT_OPENED: "project_opened",
  PROJECT_EXPORTED: "project_exported",
  CLIP_ADDED: "clip_added",
  TEXT_ADDED: "text_added",
  EFFECT_APPLIED: "effect_applied",
  PARTICLE_EFFECT_ADDED: "particle_effect_added",
  TEMPLATE_USED: "template_used",
} as const;
