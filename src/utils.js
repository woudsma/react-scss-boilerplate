/* eslint no-mixed-operators: [0] */

export const noop = () => {}

export const remap = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c
