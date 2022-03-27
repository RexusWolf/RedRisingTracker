import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';

type Props = {
  itemIcon: ImageSourcePropType;
  itemName: string;
};

export const Sovereign: FC<Props> = ({itemIcon, itemName}) => {
  const [sovereign, setSovereign] = React.useState(false);

  const getSovereignText = () => {
    return sovereign
      ? 'You have the sovereign token'
      : 'You do not have the sovereign token';
  };
  return (
    <TouchableOpacity
      onPress={() => setSovereign(!sovereign)}
      style={styles.container}>
      <Image
        style={[
          styles.sovereignIcon,
          {
            opacity: sovereign ? 1 : 0.2,
          },
        ]}
        source={itemIcon}></Image>
      <View
        style={{
          flex: 0.7,
        }}>
        <Text style={styles.sovereignText}>{getSovereignText()}</Text>
        <Text style={styles.tapToChangeText}>Tap to change</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sovereignText: {
    fontFamily: 'Raleway',
    fontSize: 20,
    color: 'white',
  },
  tapToChangeText: {
    fontFamily: 'Raleway',
    fontSize: 10,
    color: 'white',
    alignSelf: 'flex-end',
  },
  counterButton: {
    margin: 4,
    justifyContent: 'center',
  },
  container: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.3,
    borderColor: 'white',
    borderWidth: 1,
    margin: 10,
  },
  sovereignIcon: {
    flex: 0.25,
    width: 80,
    height: 80,
  },
});
