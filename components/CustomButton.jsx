import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = props => {
  const {btnColor, btnText, onPress} = props;
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={[styles.signin_btn, {backgroundColor: btnColor}]}>
        <Text style={styles.btnCustom}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  signin_btn: {
    marginTop: 30,
    borderRadius: 5,
  },
  btnCustom: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    padding: 10,
    textAlign: 'center',
  },
});
export default CustomButton;
