"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTableView = void 0;
const useDimensionsListener_1 = require("./useDimensionsListener");
const calculations_1 = require("../utils/calculations");
const useTableView = (totalColumns = 1, gapPercentage = 5) => {
    const { width } = (0, useDimensionsListener_1.useDimensionsListener)().window;
    const gap = (0, calculations_1.percentageCalculation)(width, gapPercentage);
    const columnWidth = (width - gap) / totalColumns;
    return { columnWidth, gap: gap / totalColumns };
};
exports.useTableView = useTableView;
//# sourceMappingURL=useTableView.js.map