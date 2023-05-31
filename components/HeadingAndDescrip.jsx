import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeadingAndDescrip = props => {
  const {heading, descrip, fontSize, fontWeight} = props;
  return (
    <View>
      <Text
        style={[
          styles.text_heading,
          {fontSize: fontSize || 25, fontWeight: fontWeight || '500'},
        ]}>
        {heading}
      </Text>
      <Text style={styles.text_desc}>{descrip}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text_heading: {
    color: '#000',
    width: '75%',
  },
  text_desc: {
    width: '75%',
    color: '#000',
    fontSize: 12,
    marginTop: 10,
  },
});

export default HeadingAndDescrip;
