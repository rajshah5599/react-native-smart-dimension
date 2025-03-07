"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeviceType = void 0;
const react_native_1 = require("react-native");
const useDeviceType = () => {
    const { width, height } = react_native_1.Dimensions.get("window");
    const isTablet = Math.min(width, height) >= 600;
    const platform = react_native_1.Platform.OS;
    return { isTablet, platform };
};
exports.useDeviceType = useDeviceType;
//# sourceMappingURL=useDeviceType.js.map