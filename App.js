import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Svg, ClipPath, Rect, Polygon, Circle} from 'react-native-svg';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Svg height="100" width="100" stroke="#00f" strokeWidth={5}>
          <ClipPath id="clip">
            <Polygon points="0 0, 0 40, 10 50, 0 60, 0 100, 100 100, 100 40, 90 50, 100 60, 100 0" />
          </ClipPath>

          <Rect
            x="0"
            y="0"
            width="100"
            height="100"
            clipPath="url(#clip)"
            fill="#f00"
          />

          {/* <Polygon points="0 0, 10 0, 10 10, 0 10" fill="white" />
          <Circle cx="10" cy="10" r="10" fill="#f00" />

          <Polygon points="90 0, 90 10, 100 10, 100 0" fill="white" />
          <Circle cx="90" cy="10" r="10" fill="#f00" />

          <Polygon points="100 90, 100 100, 90 100, 90 90" fill="white" />
          <Circle cx="90" cy="90" r="10" fill="#f00" />

          <Polygon points="0 90, 10 90, 10 100, 0 100" fill="white" />
          <Circle cx="10" cy="90" r="10" fill="#f00" /> */}

          <Circle cx="100" cy="50" r="10" fill="white" />
          <Circle cx="" cy="50" r="10" fill="white" />
        </Svg>
      </SafeAreaView>
    </>
  );
};

export default App;
