import React from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import TextElement from '../utils/TextElement';
import Hairline from '../Header/Hairline';
export interface ChatInputProps {
  onSendText?: (text: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({onSendText}: ChatInputProps) => {
  const [inputText, setInputText] = React.useState('');

  const handleOnPress = () => {
    if (onSendText) {
      onSendText(inputText);
    }
    setInputText('');
  };

  const verifyText = (text: string) => {
    // true if message is valid
    return text.trim().length > 0;
  };

  return (
    <>
      <Hairline />
      <View style={styles.container}>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{flex: 1}}>
          <TextInput
            style={styles.chatInput}
            onChangeText={(text) => setInputText(text)}
            value={inputText}
            editable={true}
            multiline={true}
            placeholder={'Please type your message here...'}
          />
        </View>
        <TouchableOpacity
          style={[
            verifyText(inputText)
              ? styles.submitButton
              : styles.disabledSubmitButton,
          ]}
          onPress={handleOnPress}
          disabled={!verifyText(inputText)}>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <TextElement style={{fontSize: 16}} text={'SEND'} />
        </TouchableOpacity>
      </View>
      <Hairline />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  disabledSubmitButton: {
    marginLeft: 'auto',

    padding: 10,
    marginRight: 10,
    marginVertical: 10,

    borderRadius: 15,

    backgroundColor: '#a3a1a1',
    justifyContent: 'center',
  },
  submitButton: {
    alignItems: 'flex-end',

    padding: 10,
    marginRight: 5,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: '#5CBACB',
    justifyContent: 'center',
  },
  chatInput: {
    marginLeft: 10,
    marginRight: 5,
    marginVertical: 10,

    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#d4d8dd',

    padding: 10,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: 'black',
  },
});

export default ChatInput;
