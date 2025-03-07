"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDimensionsListener = void 0;
const react_1 = require("react");
const react_native_1 = require("react-native");
const useDimensionsListener = () => {
    const [dimensions, setDimensions] = (0, react_1.useState)({
        screen: react_native_1.Dimensions.get("screen"),
        window: react_native_1.Dimensions.get("window"),
    });
    (0, react_1.useEffect)(() => {
        const handleDimensionChange = ({ screen, window }) => {
            setDimensions({ screen, window });
        };
        const subscription = react_native_1.Dimensions.addEventListener("change", handleDimensionChange);
        return () => { var _a; return (_a = subscription === null || subscription === void 0 ? void 0 : subscription.remove) === null || _a === void 0 ? void 0 : _a.call(subscription); };
    }, []);
    return dimensions;
};
exports.useDimensionsListener = useDimensionsListener;
//# sourceMappingURL=useDimensionsListener.js.map