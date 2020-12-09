import React from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import TextElement from '../utils/TextElement';
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

  return (
    <>
      <TouchableOpacity style={styles.submitButton} onPress={handleOnPress}>
        <TextElement style={styles.centerText} text={'SEND'} />
      </TouchableOpacity>
      <View style={styles.chatInputContainer}>
        <TextInput
          style={styles.chatInput}
          onChangeText={(text) => setInputText(text)}
          value={inputText}
          editable={true}
          multiline={true}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#5CBACB',
    padding: 10,
  },
  centerText: {
    textAlign: 'center',
  },
  chatInputContainer: {
    backgroundColor: '#373F51',
  },
  chatInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,

    marginVertical: 10,
    marginHorizontal: 10,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#373F51',
  },
});

export default ChatInput;
