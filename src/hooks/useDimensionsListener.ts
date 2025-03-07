import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

export const useDimensionsListener = () => {
    const [dimensions, setDimensions] = useState({
        screen: Dimensions.get("screen"),
        window: Dimensions.get("window"),
    });

    useEffect(() => {
        const handleDimensionChange = ({ screen, window }: any) => {
            setDimensions({ screen, window });
        };

        const subscription = Dimensions.addEventListener("change", handleDimensionChange);
        return () => subscription?.remove?.();
    }, []);

    return dimensions;
};
