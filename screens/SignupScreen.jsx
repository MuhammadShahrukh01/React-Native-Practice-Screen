import React, {useState} from 'react';
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
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import HeadingAndDescrip from '../components/HeadingAndDescrip';

const SignupScreen = props => {
  const [password, setPassword] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState('eye-slash');

  const signupPageHandler = ({navigation}) => {
    navigation.navigate('Login_Screen');
  };

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
          imageSource={require('../assets/images/Signup-rafiki3x.png')}
          arrowBtnSource={require('../assets/images/ArrowLeft.png')}
        />
        <View style={styles.center_div}>
          <View style={styles.center}>
            <HeadingAndDescrip
              heading="Sign Up"
              descrip="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem."
            />
            <View style={styles.set_input_margin}>
              <View style={styles.input_align}>
                <InputField
                  label="Name"
                  mode="outlined"
                  outlineColor="grey"
                  activeOutlineColor="black"
                  value="John doe"
                />
              </View>
              <View style={styles.input_align}>
                <InputField
                  label="Email"
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
                  value="Johndoe@Example.com"
                />
              </View>
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
              <View style={styles.input_align}>
                <InputField
                  label="Phone Number"
                  mode="outlined"
                  outlineColor="grey"
                  activeOutlineColor="black"
                  left={
                    <TextInput.Icon
                      icon={() => (
                        <Icon name="phone-enabled" style={styles.icon} />
                      )}
                    />
                  }
                  value="456-565-656-456"
                  keyboardType="number-pad"
                />
              </View>
            </View>
            <Button
              style={styles.btn_set}
              btnColor="#FFC100"
              btnText="Sign up"
            />
            <View style={styles.input_align}>
              <Text style={styles.bottom_text}>
                Just us Before?
                <TouchableOpacity onPress={() => signupPageHandler(props)}>
                  <Text style={styles.signin_text}> Sign In</Text>
                </TouchableOpacity>
              </Text>
            </View>
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
  text_heading: {
    color: '#000',
    fontSize: 23,
    fontWeight: '400',
  },
  text_desc: {
    width: '75%',
    color: '#000',
    fontSize: 12,
    marginTop: 10,
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
  bottom_text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
  signin_text: {
    fontWeight: '700',
    color: '#000',
    fontSize: 16,
    marginBottom: -3,
  },
});

export default SignupScreen;
