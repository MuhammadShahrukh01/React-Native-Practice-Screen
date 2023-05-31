import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import TopScreenImage from '../components/TopScreenImage';
import InputField from '../components/InputField';
import {TextInput} from 'react-native-paper';
import Button from '../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import HeadingAndDescrip from '../components/HeadingAndDescrip';
import OtpIcon from '../assets/images/OTP.png';

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState('eye-slash');

  const passwordHideAndShowHandler = () => {
    password ? setPassword(false) : setPassword(true);
    passwordIcon === 'eye-slash'
      ? setPasswordIcon('eye')
      : setPasswordIcon('eye-slash');
  };
  return (
    <>
      <ScrollView style={styles.body}>
        <TopScreenImage
          imageSource={require('../assets/images/Resetpassword-amico13x.png')}
          arrowBtnSource={require('../assets/images/ArrowLeft.png')}
        />
        <View style={styles.center_div}>
          <View style={styles.center}>
            <HeadingAndDescrip
              heading="Reset Password?"
              descrip="Enter OTP code that we have sent to your email JohnDoe56@Example.com"
              fontSize={40}
              fontWeight="600"
            />
            <View style={styles.set_input_margin}>
              <View style={styles.input_align}>
                <InputField
                  label="OTP"
                  mode="outlined"
                  outlineColor="grey"
                  activeOutlineColor="black"
                  left={
                    <TextInput.Icon
                      icon={() => (
                        <Image source={require('../assets/images/OTP.png')} />
                      )}
                    />
                  }
                  value=" "
                  secureTextEntry={false}
                />
              </View>
              <View style={styles.input_set_top}>
                <View style={styles.input_align}>
                  <InputField
                    label="Password"
                    mode="outlined"
                    outlineColor="grey"
                    activeOutlineColor="black"
                    left={
                      <TextInput.Icon
                        icon={() => <Icon name="lock" style={styles.icon} />}
                      />
                    }
                    right={
                      <TextInput.Icon
                        icon={() => (
                          <FontAwesomeIcon
                            name={passwordIcon}
                            style={styles.icon}
                          />
                        )}
                        onPress={passwordHideAndShowHandler}
                      />
                    }
                    secureTextEntry={password}
                    value="password123"
                  />
                </View>
                <View style={styles.input_align}>
                  <InputField
                    label="Confirm Password"
                    mode="outlined"
                    outlineColor="grey"
                    activeOutlineColor="black"
                    left={
                      <TextInput.Icon
                        icon={() => <Icon name="lock" style={styles.icon} />}
                      />
                    }
                    right={
                      <TextInput.Icon
                        icon={() => (
                          <FontAwesomeIcon
                            name={passwordIcon}
                            style={styles.icon}
                          />
                        )}
                        onPress={passwordHideAndShowHandler}
                      />
                    }
                    secureTextEntry={password}
                    value="password123"
                  />
                </View>
              </View>
            </View>
            <Button btnColor="#FFC100" btnText="Reset Password" />
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
  input_align: {
    marginTop: 15,
  },
  set_input_margin: {
    marginTop: 25,
  },
  icon: {
    fontSize: 20,
    color: '#000',
  },
  input_set_top: {
    marginTop: 25,
  },
});
export default ResetPasswordScreen;
