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
import navigationStrings from '../../constants/navigationStrings';

const screenArray = [
  {screenName: 'Animated Header', route: navigationStrings.DESIGN_ONE},
  {screenName: 'Parallax effect', route: navigationStrings.DESIGN_TWO},
  {screenName: 'Design Three', route: navigationStrings.DESIGN_THREE},
  {screenName: 'Design Four', route: navigationStrings.DESIGN_FOUR},
  {screenName: 'Design Five', route: ''},
];

const {width} = Dimensions.get('screen');
export default function HomeScreen({navigation}) {
  const renderBox = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.route);
        }}
        style={styles.box}>
        <Text style={styles.boxText}>{item.screenName}</Text>
      </TouchableOpacity>
    );
  };

  const listHeaderComponent = () => (
    <Text style={[styles.header]}>Choose Designs</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{margin: 5}}
        data={screenArray}
        renderItem={renderBox}
        numColumns={2}
        item
        ListHeaderComponent={listHeaderComponent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  header: {
    ...Fonts.bold(30),
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 10,
  },
  box: {
    flex: 1,
    height: width / 2,
    maxWidth: width / 2 - 15,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    ...CommonStyles.shadowStyle,
  },
  boxText: {
    ...Fonts.bold(18),
    color: Colors.secondary,
  },
});
