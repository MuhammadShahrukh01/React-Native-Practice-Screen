import React from 'react';
import {TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const InputField = props => {
  const {
    label,
    value,
    mode,
    outlineColor,
    activeOutlineColor,
    left,
    right,
    secureTextEntry,
    keyboardType,
    onChangeText,
  } = props;
  return (
    <TextInput
      style={styles.input_field}
      label={label}
      mode={mode}
      outlineColor={outlineColor}
      activeOutlineColor={activeOutlineColor}
      left={left}
      right={right}
      value={value}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input_field: {
    backgroundColor: '#F8F8F8',
  },
});
export default InputField;
