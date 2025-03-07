import { useDimensionsListener } from "./useDimensionsListener";
import { percentageCalculation, fontCalculation } from "../utils/calculations";

const useResponsiveDimension = (type: "window" | "screen", value: number, isFont = false) => {
    const dimensions = useDimensionsListener();
    if (!dimensions || !dimensions[type]) return 0;

    const { height, width } = dimensions[type];

    return isFont ? fontCalculation(height, width, value) : percentageCalculation(height, value);
};

export const useResponsiveHeight = (value: number) =>
    useResponsiveDimension("window", value);

export const useResponsiveWidth = (value: number) =>
    useResponsiveDimension("window", value);

export const useResponsiveFontSize = (value: number) =>
    useResponsiveDimension("window", value, true);

export const useResponsiveScreenHeight = (value: number) =>
    useResponsiveDimension("screen", value);

export const useResponsiveScreenWidth = (value: number) =>
    useResponsiveDimension("screen", value);

export const useResponsiveScreenFontSize = (value: number) =>
    useResponsiveDimension("screen", value, true);
