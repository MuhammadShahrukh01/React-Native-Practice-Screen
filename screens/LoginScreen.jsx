import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import InputField from '../components/InputField';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {TextInput} from 'react-native-paper';
import Button from '../components/CustomButton';
import TopScreenImage from '../components/TopScreenImage';
import HeadingAndDescrip from '../components/HeadingAndDescrip';

const LoginScreen = props => {
  const [password, setPassword] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState('eye-slash');

  const signupPageHandler = ({navigation}) => {
    navigation.navigate('Signup_Screen');
  };

  const forgetPasswordPageHandler = ({navigation}) => {
    navigation.navigate('Forget_Screen');
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
          imageSource={require('../assets/images/Login-cuate1.png')}
          arrowBtnSource={require('../assets/images/ArrowLeft.png')}
          onPress={() => console.log('hi')}
        />
        <View style={styles.center_div}>
          <View style={styles.center}>
            <HeadingAndDescrip
              heading="Welcome Back"
              descrip="Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing."
            />
            <View style={styles.set_input_margin}>
              <View style={styles.input_align}>
                <InputField
                  label="Email address"
                  name="email"
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
                  name="password"
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
                    />
                  }
                  value="password123"
                  secureTextEntry={password}
                />
              </View>
            </View>
            <View style={styles.forget_text_set}>
              <TouchableOpacity
                onPress={() => forgetPasswordPageHandler(props)}>
                <Text
                  style={{
                    color: '#F00404',
                    fontSize: 18,
                    fontWeight: '600',
                  }}>
                  Forget Password
                </Text>
              </TouchableOpacity>
            </View>
            <Button btnColor="#FFC100" btnText="Sign in" />
            <View style={styles.line}>
              <View style={styles.or}>
                <View>
                  <Text style={styles.or_text}>OR</Text>
                </View>
              </View>
            </View>
            <Button
              btnColor="#000"
              btnText="Sign up"
              onPress={() => signupPageHandler(props)}
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
  forget_text_set: {
    marginTop: 13,
    flexDirection: 'row-reverse',
  },
  line: {
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#F9F9F9',
    position: 'relative',
  },
  or: {
    color: '#000',
    alignItems: 'center',
    width: '87%',
  },
  or_text: {
    position: 'absolute',
    backgroundColor: '#fff',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    marginTop: -12,
    color: '#000',
  },
});

export default LoginScreen;
