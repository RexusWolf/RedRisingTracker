import React, {FC} from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

type Props = {
  itemIcon: ImageSourcePropType;
  itemName: string;
};

export const CounterItem: FC<Props> = ({itemIcon, itemName}) => {
  const [fleetTrack, setFleetTrack] = React.useState(0);
  const changeFleetTrack = (newFleetTrack: number) => {
    if (newFleetTrack >= 0 && newFleetTrack <= 10) {
      setFleetTrack(newFleetTrack);
    }
  };

  return (
    <View
      style={{
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 0.7,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image style={{width: 80, height: 80}} source={itemIcon}></Image>
        <Text style={styles.titleText}>
          {itemName}: {fleetTrack}
        </Text>
      </View>
      <View style={{flexDirection: 'column', flex: 0.3, marginLeft: 10}}>
        <Button
          onPress={() => changeFleetTrack(fleetTrack + 1)}
          style={styles.counterButton}
          mode="contained"
          color="white">
          <Text style={styles.buttonText}>+</Text>
        </Button>
        <Button
          onPress={() => changeFleetTrack(fleetTrack - 1)}
          style={styles.counterButton}
          mode="contained"
          color="white">
          <Text style={styles.buttonText}>-</Text>
        </Button>
      </View>
    </View>
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
