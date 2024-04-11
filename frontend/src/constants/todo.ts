const WEATHER_ARRAY = ["CLOUD", "SUN", "RAIN"] as const;

export type WEATHER_TYPE = (typeof WEATHER_ARRAY)[number];
export const WEATHER = new Set<WEATHER_TYPE>(WEATHER_ARRAY);
