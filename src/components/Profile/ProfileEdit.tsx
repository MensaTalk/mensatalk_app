import React, {useState} from 'react';
import {ProfileInterface} from '../../types';
import {Text, Button, TextInput} from 'react-native';

export interface ProfileEditProps {
  profile: ProfileInterface;
  onSave?: (profile: ProfileInterface) => void;
}

const ProfileEdit: React.FC<ProfileEditProps> = ({
  profile,
  onSave,
}: ProfileEditProps) => {
  const [username, setUsername] = useState<string>(profile.username);
  const [age, setAge] = useState<number>(profile.age);
  const [interests, setInterests] = useState<string>(profile.interests);
  const [status, setStatus] = useState<string>(profile.status);

  const handleOnPress = () => {
    if (onSave) {
      const updatedProfile: ProfileInterface = {
        ...profile,
        username: username,
        age: age,
        interests: interests,
        status: status,
      };

      onSave(updatedProfile);
    }
  };

  return (
    <>
      <Text>Old username: {profile.username}</Text>
      <Text>New username: {username}</Text>
      <TextInput onChangeText={(text) => setUsername(text)} value={username} />
      <Text>Old age: {profile.age}</Text>
      <Text>New age: {age}</Text>
      <TextInput
        onChangeText={(text) => setAge(Number(text))}
        value={age.toString()}
      />
      <Text>Old interests: {profile.username}</Text>
      <Text>New interests: {username}</Text>
      <TextInput
        onChangeText={(text) => setInterests(text)}
        value={interests}
      />
      <Text>Old status: {profile.status}</Text>
      <Text>New status: {status}</Text>
      <TextInput onChangeText={(text) => setStatus(text)} value={status} />
      <Button title="Save" onPress={handleOnPress} />
    </>
  );
};

export default ProfileEdit;
