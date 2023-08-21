import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
  SafeAreaView,
} from 'react-native';
import React, {useRef} from 'react';
import {Fonts} from '../theme/Fonts';
import Colors from '../theme/Colors';
import CommonStyles from '../theme/CommonStyles';
const {width, height} = Dimensions.get('screen');

const data = [
  {
    id: 1,
    name: 'image 1',
    uri: 'https://images.unsplash.com/photo-1550319932-8ebbfd58d99e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80',
  },
  {
    id: 2,
    name: 'image 2',
    uri: 'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2194&q=80',
  },
  {
    id: 3,
    name: 'image 3',
    uri: 'https://images.unsplash.com/photo-1550236520-7050f3582da0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
  },
  {
    id: 4,
    name: 'image 4',
    uri: 'https://images.unsplash.com/photo-1551334741-0f11da38e980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: 5,
    name: 'image 5',
    uri: 'https://images.unsplash.com/photo-1551505593-8b841137e9ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1661&q=80',
  },
];

const ITEM_MARGIN = 10;
const FULL_SIZE = width / 1.2;
const ITEM_WIDTH = FULL_SIZE - ITEM_MARGIN * 2;
const ITEM_HEIGHT = height / 1.6;
const BORDER_RADIUS = 15;

export default function DesignTwo() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const footerTranslateX = scrollX.interpolate({
    inputRange: [0, FULL_SIZE * data.length],
    outputRange: [0, -FULL_SIZE * data.length],
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <Animated.FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        decelerationRate={'fast'}
        contentContainerStyle={{paddingRight: width / 3}}
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
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * FULL_SIZE,
            index * FULL_SIZE,
            (index + 1) * FULL_SIZE,
          ];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH],
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.1, 1],
          });

          return (
            <TouchableOpacity style={styles.card}>
              <View
                style={[
                  StyleSheet.absoluteFill,
                  {overflow: 'hidden', borderRadius: BORDER_RADIUS},
                ]}>
                <Animated.Image
                  source={{uri: item.uri}}
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    transform: [{scale}],
                  }}
                />
              </View>
              <Animated.Text style={[styles.name, {transform: [{translateX}]}]}>
                {item.name}
              </Animated.Text>
            </TouchableOpacity>
          );
        }}
      />

      <Animated.Text
        numberOfLines={1}
        style={[styles.footer, {transform: [{translateX: footerTranslateX}]}]}>
        PARALLAX EFFECT
      </Animated.Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    margin: ITEM_MARGIN,
    ...CommonStyles.shadowStyle,
  },
  name: {
    ...Fonts.bold(40),
    textTransform: 'uppercase',
    position: 'absolute',
    color: Colors.white,
    bottom: 10,
    left: 15,
  },
  footer: {
    width: width * data.length,
    ...Fonts.bold(150),
    flexWrap: 'wrap',
  },
});
