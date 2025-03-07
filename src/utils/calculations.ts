export const percentageCalculation = (max: number, val: number) => max * (val / 100);

export const fontCalculation = (height: number, width: number, val: number) => {
    const widthDimension = Math.min(height, width);
    const aspectRatioBasedHeight = (16 / 9) * widthDimension;
    const diagonal = Math.sqrt(
        Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)
    );
    return percentageCalculation(diagonal, val);
};
