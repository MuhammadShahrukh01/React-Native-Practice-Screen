import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import BackArrowBtn from './BackArrowBtn';

const TopScreenImage = props => {
  const {imageSource, arrowBtnSource} = props;

  return (
    <View style={styles.image_width}>
      <Image style={styles.image} source={imageSource} />
      <BackArrowBtn source={arrowBtnSource} />
    </View>
  );
};

const styles = StyleSheet.create({
  image_width: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: '95%',
    height: 340,
  },
});

export default TopScreenImage;
