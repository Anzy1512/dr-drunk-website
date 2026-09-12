import { getProject } from "@theatre/core";

// Production Theatre score. Each track is an authored value curve, without Studio in the bundle.
const track = (name: string, points: [number, number][]) => ({
  type: "BasicKeyframedTrack", __debugName: name,
  keyframes: points.map(([position, value], i) => ({ id: `${name}-${i}`, position, value, connectedRight: true, handles: [0.35, 0, 0.65, 1], type: "bezier" })),
});
const sheet = (length: number, curves: Record<string, [number, number][]>) => ({
  staticOverrides: { byObject: {} },
  sequence: { type: "PositionalSequence", length, subUnitsPerUnit: 30, tracksByObject: { Direction: {
    trackIdByPropPath: Object.fromEntries(Object.keys(curves).map(key => [JSON.stringify([key]), key])),
    trackData: Object.fromEntries(Object.entries(curves).map(([key, points]) => [key, track(key, points)])),
  } } },
});
export function brandScore() {
  return getProject("Dr Drunk After Hours", { state: {
    definitionVersion: "0.4.0", revisionHistory: ["after-hours-motion-1"], sheetsById: {
      Atmosphere: sheet(12, { drift: [[0, 0], [6, 1], [12, 0]], glow: [[0, 0.15], [4, 0.65], [8, 0.3], [12, 0.15]] }),
      Reveal: sheet(1, { rise: [[0, 58], [1, 0]], tilt: [[0, -11], [1, 0]], opacity: [[0, 0.3], [0.8, 1], [1, 1]] }),
      Pour: sheet(1, { turn: [[0, 0], [0.45, 0.6], [1, 0]], lift: [[0, 0], [0.45, 0.12], [1, 0]], scatter: [[0, 0], [0.5, 1], [1, 0]] }),
    },
  } });
}
