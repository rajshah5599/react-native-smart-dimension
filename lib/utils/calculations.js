"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontCalculation = exports.percentageCalculation = void 0;
/**
 * Utility to calculate percentage-based dimensions
 */
const percentageCalculation = (max, val) => max * (val / 100);
exports.percentageCalculation = percentageCalculation;
/**
 * Utility to calculate font size based on screen dimensions and aspect ratio
 */
const fontCalculation = (height, width, val) => {
    const widthDimension = Math.min(height, width);
    const aspectRatioBasedHeight = (16 / 9) * widthDimension;
    const diagonal = Math.sqrt(Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2));
    return (0, exports.percentageCalculation)(diagonal, val);
};
exports.fontCalculation = fontCalculation;
//# sourceMappingURL=calculations.js.map