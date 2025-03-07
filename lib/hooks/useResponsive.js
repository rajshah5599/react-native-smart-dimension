"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResponsiveScreenFontSize = exports.useResponsiveScreenWidth = exports.useResponsiveScreenHeight = exports.useResponsiveFontSize = exports.useResponsiveWidth = exports.useResponsiveHeight = void 0;
const useDimensionsListener_1 = require("./useDimensionsListener");
const calculations_1 = require("../utils/calculations");
const useResponsiveDimension = (type, value, isFont = false) => {
    const dimensions = (0, useDimensionsListener_1.useDimensionsListener)();
    if (!dimensions || !dimensions[type])
        return 0;
    const { height, width } = dimensions[type];
    return isFont ? (0, calculations_1.fontCalculation)(height, width, value) : (0, calculations_1.percentageCalculation)(height, value);
};
const useResponsiveHeight = (value) => useResponsiveDimension("window", value);
exports.useResponsiveHeight = useResponsiveHeight;
const useResponsiveWidth = (value) => useResponsiveDimension("window", value);
exports.useResponsiveWidth = useResponsiveWidth;
const useResponsiveFontSize = (value) => useResponsiveDimension("window", value, true);
exports.useResponsiveFontSize = useResponsiveFontSize;
const useResponsiveScreenHeight = (value) => useResponsiveDimension("screen", value);
exports.useResponsiveScreenHeight = useResponsiveScreenHeight;
const useResponsiveScreenWidth = (value) => useResponsiveDimension("screen", value);
exports.useResponsiveScreenWidth = useResponsiveScreenWidth;
const useResponsiveScreenFontSize = (value) => useResponsiveDimension("screen", value, true);
exports.useResponsiveScreenFontSize = useResponsiveScreenFontSize;
//# sourceMappingURL=useResponsive.js.map