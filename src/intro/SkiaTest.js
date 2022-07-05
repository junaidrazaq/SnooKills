import React from 'react';
import {
  Canvas,
  Circle,
  Fill,
  Group,
  Line,
  Oval,
  vec,
} from '@shopify/react-native-skia';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');

const SkiaTest = () => {
  const center = {x: width / 2, y: height / 2};

  // Oval shape
  const ovalWidth = 0.7;
  const ovalHeight = 0.15;
  const ovalX = (1 - ovalWidth) / 2;
  const ovalY = (1 - ovalHeight) / 2;

  const ovalCenter = {
    x: width * ovalX,
    y: height * ovalY,
    width: width * ovalWidth,
    height: height * ovalHeight,
  };

  // RENDER
  return (
    <Canvas style={styles.container}>
      <Fill color="lightBlue" />
      {/* <Circle c={center} r={25} />
      <Group style="stroke" strokeWidth={12}>
        <Oval rect={ovalCenter} />
        <Oval rect={ovalCenter} />
        <Oval rect={ovalCenter} />
      </Group> */}
      {/* <Line
        p1={vec(width * 0.99, 100)}
        p2={vec(width * 0.01, 100)}
        color="black"
        style="stroke"
        strokeWidth={3}
      /> */}
      <Circle cx={width * 0.5} cy={height * 0.45} r={108} color="white" />
    </Canvas>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: -1,
  },
});

export default SkiaTest;
