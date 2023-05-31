import React from 'react';
import {Modal, View, Image, Text, StyleSheet} from 'react-native';

const ModalBox = props => {
  const {
    visible,
    onRequestClose,
    animationType,
    topImage,
    heading,
    text,
    iconImage,
  } = props;
  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
      animationType={animationType}
      hardwareAccelerated>
      <View style={styles.modal_center}>
        <View style={styles.warning_modal}>
          <Image source={topImage} style={styles.modal_image_set} />
          <View style={styles.icon_set}>
            <Image source={iconImage} />
          </View>
          <View style={styles.heading}>
            <Text style={styles.heading_text}>{heading}</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.text_bottom}>{text}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  warning_modal: {
    width: 290,
    height: 370,
    backgroundColor: '#ffff',
    borderRadius: 8,
  },
  modal_center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  modal_image_set: {
    width: '100%',
    height: 150,
    position: 'relative',
    borderRadius: 8,
  },
  icon_set: {
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 80,
  },
  heading: {
    width: '100%',
    textAlign: 'center',
  },
  heading_text: {
    textAlign: 'center',
    color: '#000',
    marginTop: 70,
    fontWeight: '600',
    fontSize: 22,
  },
  text_bottom: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
  },
  text: {
    marginTop: 20,
  },
});
export default ModalBox;
