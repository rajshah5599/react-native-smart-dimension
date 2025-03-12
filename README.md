# React Native Smart dimension

`react-native-smart-dimension` is a lightweight and flexible library for handling responsive design in React Native applications. It provides hooks to manage device types, screen dimension, and scalable layouts for various screen sizes, including mobile and tablet devices.

## Installation

You can install the library using npm or yarn:

```sh
npm install react-native-smart-dimension
```

or

```sh
yarn add react-native-smart-dimension
```

## Features
- Detects device type (mobile or tablet)
- Provides responsive height, width, and font scaling utilities
- Listens for screen dimension changes in real-time
- Supports percentage-based and font scaling calculations
- Optimized for React Native projects

## Usage

### 1. Detect Device Type

```js
import { useDeviceType } from "react-native-smart-dimension";

const { isTablet, platform } = useDeviceType();
console.log(`Device Type: ${isTablet ? "Tablet" : "Mobile"}, Platform: ${platform}`);
```

### 2. Listen to Screen Dimension Changes

```js
import { usedimensionListener } from "react-native-smart-dimension";

const { screen, window } = usedimensionListener();
console.log("Window dimension:", window);
console.log("Screen dimension:", screen);
```

### 3. Responsive Height & Width

```js
import { useResponsiveHeight, useResponsiveWidth } from "react-native-smart-dimension";

const height = useResponsiveHeight(50); // 50% of window height
const width = useResponsiveWidth(80); // 80% of window width
```

### 4. Responsive Font Size

```js
import { useResponsiveFontSize } from "react-native-smart-dimension";

const fontSize = useResponsiveFontSize(2); // Scales based on screen size
```

### 5. Table View Layout Helper

```js
import { useTableView } from "react-native-smart-dimension";

const { columnWidth, gap } = useTableView(3, 5); // 3 columns with 5% gap
```

## API Reference

### `useDeviceType()`
Returns an object with:
- `isTablet` (boolean) – Whether the device is a tablet
- `platform` (string) – Platform type (`ios` or `android`)

### `usedimensionListener()`
Returns an object with:
- `screen` – Full screen dimension
- `window` – Usable window dimension

### `useResponsiveHeight(value: number)`
Calculates the responsive height based on percentage.

### `useResponsiveWidth(value: number)`
Calculates the responsive width based on percentage.

### `useResponsiveFontSize(value: number)`
Scales the font size based on screen dimension.

### `useTableView(totalColumns: number, gapPercentage: number)`
Returns column width and gap based on total columns and percentage gap.

### `percentageCalculation(max: number, val: number)`
Utility function to calculate percentage-based dimension.

### `fontCalculation(height: number, width: number, val: number)`
Utility function to calculate font size based on aspect ratio.

## Contributing
Pull requests and contributions are welcome! Feel free to improve this library and make it better for everyone.

## License
MIT License

