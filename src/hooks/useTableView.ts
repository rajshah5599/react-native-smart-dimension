import { useDimensionsListener } from "./useDimensionsListener";
import { percentageCalculation } from "../utils/calculations";

export const useTableView = (totalColumns = 1, gapPercentage = 5) => {
    const { width } = useDimensionsListener().window;
    const gap = percentageCalculation(width, gapPercentage);
    const columnWidth = (width - gap) / totalColumns;

    return { columnWidth, gap: gap / totalColumns };
};
