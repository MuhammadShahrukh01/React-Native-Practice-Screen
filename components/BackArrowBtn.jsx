import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BackArrowBtn = props => {
  const navigation = useNavigation();

  const goBackHandler = navigation => {
    navigation.goBack(+1);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={styles.round}
      onPress={() => goBackHandler(navigation)}>
      <View>
        <Image source={props.source} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  round: {
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: 'black',
    shadowOpacity: 32,
    shadowOffset: 10,
    position: 'absolute',
    top: 10,
    left: 15,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 15,
    zIndex: 1,
  },
});
export default BackArrowBtn;
