import React from 'react';
import {Button, TextInput} from 'react-native';

export interface ChatInputProps {
  onSendText?: (text: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({onSendText}: ChatInputProps) => {
  const [inputText, setInputText] = React.useState('Write something');

  const handleOnPress = () => {
    if (onSendText) {
      onSendText(inputText);
    }
    setInputText('');
  };

  return (
    <>
      <TextInput
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button title="Send" onPress={handleOnPress} />
    </>
  );
};

export default ChatInput;
