import React from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';

export interface ChatInputProps {
  onSendText?: (text: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({onSendText}: ChatInputProps) => {
  const [inputText, setInputText] = React.useState('te3123e21e312es');

  const handleOnPress = () => {
    if (onSendText) {
      onSendText(inputText);
    }
    setInputText('');
  };

  return (
    <>
      <Button title="Send" onPress={handleOnPress} />

      <View style={styles.footer}>
        <View style={styles.chatInputContainer}>
          <TextInput
            style={styles.chatInput}
            onChangeText={(text) => setInputText(text)}
            value={inputText}
            editable={true}
            multiline={true}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#373F51',
  },
  chatInputContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,

    marginVertical: 10,
    marginHorizontal: 10,
  },
  chatInput: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#373F51',
  },
});

export default ChatInput;
