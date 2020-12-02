import React from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

import {SignUpUserInterface} from '../../types';

export interface SignUpFormProps {
  onSignUp: (signUpUser: SignUpUserInterface) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({onSignUp}: SignUpFormProps) => {
  const validateForm = () => {
    const dummyUser: SignUpUserInterface = {
      username: '',
      email: '',
      password: '',
    };
    onSignUp(dummyUser);
  };
  return (
    <>
      <View style={styles.root}>
        <View style={styles.background}>
          <ImageBackground
            style={styles.rect2}
            imageStyle={styles.rect2_imageStyle}
            source={require('../../assets/images/gradient.png')}>
            <View style={styles.progressBarColumn}>
              <Text style={styles.text3}>CREATE ACCOUNT</Text>
              <View style={styles.form}>
                <View style={styles.nameColumn}>
                  <View style={styles.name}>
                    <TextInput
                      placeholder="Name"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.nameInput}
                    />
                  </View>
                  <View style={styles.email}>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor="rgba(255,255,255,1)"
                      secureTextEntry={false}
                      style={styles.emailInput}
                    />
                  </View>
                </View>
                <View style={styles.nameColumnFiller} />
                <View style={styles.password}>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={true}
                    style={styles.passwordInput}
                  />
                </View>
              </View>
            </View>
            <View style={styles.progressBarColumnFiller} />
            <View style={styles.buttonColumn}>
              <TouchableOpacity style={styles.button} onPress={validateForm}>
                <Text style={styles.text2}>Continue</Text>
              </TouchableOpacity>
              <Text style={styles.text4}>Terms &amp; Conditions</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black',
  },
  background: {
    flex: 1,
  },
  rect2: {
    flex: 1,
  },
  rect2_imageStyle: {},
  progressBar: {
    height: 40,
    flexDirection: 'row',
    marginLeft: 28,
    marginRight: 28,
  },
  icon2: {
    color: 'rgba(30,174,199,1)',
    fontSize: 40,
    width: 33,
    height: 40,
  },
  rect4: {
    width: 50,
    height: 7,
    backgroundColor: 'rgba(31,178,204,1)',
    borderRadius: 40,
    marginLeft: 6,
    marginTop: 16,
  },
  icon3: {
    color: '#1fb2cc',
    fontSize: 35,
    width: 40,
    height: 36,
    marginLeft: 4,
    marginTop: 4,
  },
  rect5: {
    width: 50,
    height: 7,
    backgroundColor: 'rgba(230, 230, 230,1)',
    opacity: 0.75,
    borderRadius: 40,
    marginTop: 16,
  },
  icon2Row: {
    height: 40,
    flexDirection: 'row',
  },
  icon2RowFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  icon4: {
    color: 'rgba(255,255,255,1)',
    fontSize: 40,
    width: 34,
    height: 40,
    opacity: 0.75,
  },
  text3: {
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
    marginTop: 67,
    alignSelf: 'center',
  },
  form: {
    height: 230,
    marginTop: 112,
  },
  name: {
    height: 59,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 5,
    flexDirection: 'row',
  },
  icon5: {
    color: 'rgba(255,255,255,1)',
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: 'center',
  },
  nameInput: {
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginHorizontal: 10,
  },
  email: {
    height: 59,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 27,
  },
  icon6: {
    color: 'rgba(255,255,255,1)',
    fontSize: 33,
    marginLeft: 15,
    alignSelf: 'center',
  },
  emailInput: {
    color: 'rgba(255,255,255,1)',
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginHorizontal: 10,
  },
  nameColumn: {},
  nameColumnFiller: {
    flex: 1,
  },
  password: {
    height: 59,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 5,
    flexDirection: 'row',
  },
  icon7: {
    color: 'rgba(255,255,255,1)',
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13,
  },
  passwordInput: {
    color: 'rgba(255,255,255,1)',
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginHorizontal: 10,
  },
  progressBarColumn: {
    marginTop: 53,
    marginLeft: 41,
    marginRight: 41,
  },
  progressBarColumnFiller: {
    flex: 1,
  },
  button: {
    height: 55,
    backgroundColor: 'rgba(247,247,247,0)',
    borderRadius: 5,
    borderColor: 'rgba(255,255,255,1)',
    borderWidth: 1,
    justifyContent: 'center',
    marginBottom: 57,
  },
  text2: {
    width: 66,
    color: 'rgba(255,255,255,1)',
    alignSelf: 'center',
  },
  text4: {
    color: 'rgba(255,255,255,0.5)',
    alignSelf: 'center',
  },
  buttonColumn: {
    marginBottom: 31,
    marginLeft: 41,
    marginRight: 41,
  },
});

export default SignUpForm;
