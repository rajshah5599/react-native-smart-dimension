import { Dimensions, Platform } from "react-native";

export const useDeviceType = () => {
    const { width, height } = Dimensions.get("window");
    const isTablet = Math.min(width, height) >= 600; // Common threshold for tablets
    const platform = Platform.OS; // 'ios' or 'android'

    return { isTablet, platform };
};
