import {
  Animated,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Fonts} from '../theme/Fonts';
import Colors from '../theme/Colors';
import CommonStyles from '../theme/CommonStyles';

const data = [...Array(20)];

export default function DesignOne() {
  const flatListRef = useRef();
  const scrolling = useRef(new Animated.Value(0)).current;

  const headerTranslation = scrolling.interpolate({
    inputRange: [0, 200],
    outputRange: [-100, 0],
    extrapolate: 'clamp',
  });

  const footerTranslation = scrolling.interpolate({
    inputRange: [200, 500],
    outputRange: [100, 0],
    extrapolate: 'clamp',
  });

  const renderRow = useCallback(
    ({item, index}) => (
      <View key={index} style={styles.listItem}>
        <Text style={{...Fonts.medium(18)}}>{'scroll up and down'}</Text>
      </View>
    ),
    [],
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}>
      <Animated.View
        style={[styles.header, {transform: [{translateY: headerTranslation}]}]}>
        <Text style={{...Fonts.medium(18)}}>Header</Text>
      </Animated.View>
      <Animated.FlatList
        ref={flatListRef}
        style={{flex: 1}}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolling,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
        data={data}
        renderItem={renderRow}
        maxToRenderPerBatch={10}
      />
      <TouchableOpacity
        onPress={() => {
          flatListRef.current.scrollToIndex({
            index: 0,
            animated: true,
          });
        }}>
        <Animated.View
          style={[
            styles.footer,
            {transform: [{translateY: footerTranslation}]},
          ]}>
          <Text style={{...Fonts.medium(18)}}>Scroll to Top</Text>
        </Animated.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    width: '100%',
    backgroundColor: Colors.secandory,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    ...CommonStyles.shadowStyle,
  },
  listItem: {
    flex: 1,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.pallete5,
    ...CommonStyles.shadowStyle,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    height: 50,
    width: '80%',
    backgroundColor: Colors.secandory,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    alignSelf: 'center',
    ...CommonStyles.shadowStyle,
  },
});
