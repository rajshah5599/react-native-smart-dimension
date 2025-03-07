import { Dimensions, Platform } from "react-native";

export const useDeviceType = () => {
    const { width, height } = Dimensions.get("window");
    const isTablet = Math.min(width, height) >= 600;
    const platform = Platform.OS;

    return { isTablet, platform };
};
