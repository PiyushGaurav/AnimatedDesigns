/* eslint-disable react-native/no-inline-styles */
import {Animated, Image, StyleSheet, Dimensions, View} from 'react-native';
import React, {useRef} from 'react';
import CommonStyles from '../theme/CommonStyles';
import Colors from '../theme/Colors';

const {height, width} = Dimensions.get('screen');
const data = [
  {
    id: 1,
    name: 'image 1',
    uri: 'https://images.unsplash.com/photo-1547420186-a9c6bb9036a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80',
  },
  {
    id: 2,
    name: 'image 2',
    uri: 'https://images.unsplash.com/photo-1598624669900-ee1be9f81e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80',
  },
  {
    id: 3,
    name: 'image 3',
    uri: 'https://images.unsplash.com/photo-1528620575091-7310b88d7ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: 4,
    name: 'image 4',
    uri: 'https://images.unsplash.com/photo-1553675559-5046b59a5ca5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
  },
  {
    id: 5,
    name: 'image 5',
    uri: 'https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
];

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height;
const IMAGE_WIDTH = width / 1.4;
const IMAGE_HEIGHT = height / 1.8;

export default function DesignThree() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderRow = ({item, index}) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{uri: item.uri}} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={StyleSheet.absoluteFill}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ];
          const opacityInterpolated = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={item.id}
              source={{
                uri: item.uri,
              }}
              style={[
                StyleSheet.absoluteFill,
                {
                  opacity: opacityInterpolated,
                },
              ]}
              blurRadius={30}
            />
          );
        })}
      </View>
      <Animated.FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH}
        decelerationRate={'fast'}
        pagingEnabled
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}
        renderItem={renderRow}
      />
      <View style={styles.dotContainer}>
        {data.map((item, index) => {
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ];

          let dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={item.id}
              style={[
                styles.dot,
                {
                  width: dotWidth,
                  backgroundColor: Colors.secondary,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    ...CommonStyles.shadowStyle,
    borderRadius: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
