import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TopScreenImage from '../components/TopScreenImage';
import InputField from '../components/InputField';
import {TextInput} from 'react-native-paper';
import Button from '../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeadingAndDescrip from '../components/HeadingAndDescrip';
import {useNavigation} from '@react-navigation/native';

const ForgetPasswordScreen = () => {
  const navigation = useNavigation();

  const resetPasswordHandler = () => {
    navigation.navigate('Reset_Screen');
  };
  return (
    <>
      <ScrollView style={styles.body}>
        <TopScreenImage
          imageSource={require('../assets/images/Forgotpassword-cuate13x.png')}
          arrowBtnSource={require('../assets/images/ArrowLeft.png')}
        />
        <View style={styles.center_div}>
          <View style={styles.center}>
            <HeadingAndDescrip
              heading="Forgot Password?"
              descrip="Don’t worry! It happens, Please enter your address associated with your Account."
              fontSize={40}
              fontWeight="600"
            />
            <View style={styles.set_input_margin}>
              <View style={styles.input_align}>
                <InputField
                  label="Email address"
                  mode="outlined"
                  outlineColor="grey"
                  activeOutlineColor="black"
                  left={
                    <TextInput.Icon
                      icon={() => (
                        <Icon name="alternate-email" style={styles.icon} />
                      )}
                    />
                  }
                  value="JohnDoe56@Example.com"
                  secureTextEntry={false}
                />
              </View>
            </View>
            <Button
              btnColor="#FFC100"
              btnText="Submit"
              onPress={resetPasswordHandler}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#ffff',
  },

  center_div: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    width: '90%',
    paddingBottom: 20,
  },
  icon: {
    fontSize: 20,
    color: '#000',
  },
  input_align: {
    marginTop: 15,
  },
  set_input_margin: {
    marginTop: 25,
  },
});
export default ForgetPasswordScreen;
