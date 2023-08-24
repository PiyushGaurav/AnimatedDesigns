import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const data = [
  {
    id: 1,
    title: 'title 1',
    color: 'red',
    listData: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
  },
  {
    id: 2,
    title: 'title 2',
    color: 'green',
    listData: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
  },
  {
    id: 3,
    title: 'title 3',
    color: 'blue',
    listData: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
  },
  {
    id: 4,
    title: 'title 4',
    color: 'yellow',
    listData: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
  },
  {
    id: 5,
    title: 'title 5',
    color: 'black',
    listData: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
  },
];

export default function DesignFour() {
  const [currIndex, setCurrIndex] = useState(null);
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          onPress={() => {
            setCurrIndex(currIndex == index ? null : index);
          }}
          activeOpacity={0.9}
          key={item.id}
          style={styles.cardContainer}>
          <View style={[styles.card, {backgroundColor: item.color}]}>
            <Text style={styles.heading}>{item.title}</Text>
            {currIndex == index && (
              <View style={styles.subCategory}>
                {item.listData.map(list => (
                  <Text key={list} style={styles.body}>
                    {list}
                  </Text>
                ))}
              </View>
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 38,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: 'white',
  },
  subCategory: {},
  body: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
