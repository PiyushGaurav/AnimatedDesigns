import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React from 'react';
import Colors from '../theme/Colors';
import CommonStyles from '../theme/CommonStyles';
import {Fonts} from '../theme/Fonts';

const screenArray = [
  {screenName: 'Design One', route: 'DesignOne'},
  {screenName: 'Design Two', route: ''},
  {screenName: 'Design Three', route: ''},
  {screenName: 'Design Four', route: ''},
  {screenName: 'Design Five', route: ''},
];

const {width} = Dimensions.get('screen');
export default function HomeScreen({navigation}) {
  function renderBox({item}) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.route);
        }}
        style={styles.box}>
        <Text style={styles.boxText}>{item.screenName}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{margin: 5}}
        data={screenArray}
        renderItem={renderBox}
        numColumns={2}
        item
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  box: {
    flex: 1,
    height: width / 2,
    maxWidth: width / 2 - 15,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secandory,
    ...CommonStyles.shadowStyle,
  },
  boxText: {
    ...Fonts.medium(18),
  },
});
