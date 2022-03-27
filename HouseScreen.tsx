import * as React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {CounterItem} from './CounterItem';
import {Sovereign} from './SovereignItem';

export const HouseScreen = ({navigation}: {navigation: any}) => {
  const [fleetTrack, setFleetTrack] = React.useState(0);
  const changeFleetTrack = (newFleetTrack: number) => {
    if (newFleetTrack > 0 && newFleetTrack < 11) {
      setFleetTrack(newFleetTrack);
    }
  };
  const itemIcons = {
    fleetTrack: require('./assets/red-rising-6.png'),
    helium: require('./assets/red-rising-4.png'),
    institute: require('./assets/red-rising-5.png'),
    sovereign: require('./assets/red-rising-2.png'),
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <CounterItem itemIcon={itemIcons.fleetTrack} itemName="FLEET TRACK" />
      <CounterItem itemIcon={itemIcons.helium} itemName="HELIUM" />
      <CounterItem itemIcon={itemIcons.institute} itemName="THE INSTITUTE" />
      <Sovereign itemIcon={itemIcons.sovereign} itemName="SOVEREIGN" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: 'white',
  },
  counterButton: {
    margin: 4,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
