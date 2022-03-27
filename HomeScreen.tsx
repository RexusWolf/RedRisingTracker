import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Button} from 'react-native-paper';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const houses = [
    {name: 'JUPITER', color: '#017bde'},
    {name: 'MARS', color: '#f91d18'},
    {name: 'APOLLO', color: '#e3d707'},
    {name: 'DIANA', color: '#0da04c'},
    {name: 'MINERVA', color: '#9b3190'},
    {name: 'CERES', color: '#956f24'},
  ];
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <View style={styles.container}>
        {houses.map(house => (
          <Button
            onPress={() => navigation.navigate('House')}
            key={house.name}
            style={styles.button}
            mode="contained"
            color={house.color}>
            <Text style={styles.titleText}>{house.name}</Text>
          </Button>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Raleway',
    fontSize: 30,
    color: 'white',
  },
  button: {
    margin: 10,
    flex: 0.1,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'lightgray',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
