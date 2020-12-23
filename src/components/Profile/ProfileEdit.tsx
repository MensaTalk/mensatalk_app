import React, {useState} from 'react';
import {ProfileInterface} from '../../types';
import {
  Button,
  TextInput,
  Image,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import TextElement, {textStyles} from '../utils/TextElement';
import Hairline from '../Header/Hairline';

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

  const [isEditing, setIsEditing] = useState(false);

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
      <ScrollView>
        <Image
          resizeMode="cover"
          style={styles.userImage}
          source={require('./../../assets/images/gradient.png')}
        />
        <View style={styles.profileContainer}>
          <View style={styles.profileHeaderContainer}>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <View style={{flexDirection: 'column'}}>
              <TextElement
                text={'Username:'}
                size={5}
                style={styles.textDescription}
              />
              <TextInput
                onChangeText={(text) => setUsername(text)}
                value={username}
                maxLength={18}
                style={[
                  textStyles.text1,
                  styles.text,
                  isEditing ? styles.textIsEditing : undefined,
                ]}
                editable={isEditing}
              />
            </View>
            {/* eslint-disable-next-line react-native/no-inline-styles */}
            <View style={{flexDirection: 'column'}}>
              <TextElement
                text={'Age:'}
                size={5}
                style={styles.textDescription}
              />
              <TextInput
                onChangeText={(text) => setAge(Number(text))}
                value={age.toString()}
                style={[
                  textStyles.text1,
                  styles.textNormal,
                  isEditing ? styles.textIsEditing : undefined,
                ]}
                maxLength={2}
                editable={isEditing}
              />
            </View>
          </View>
          {interests ||
            (isEditing && (
              <View style={styles.tagContainer}>
                {/* eslint-disable-next-line react-native/no-inline-styles */}
                <View style={{flexDirection: 'column'}}>
                  <TextElement
                    text={'Interests:'}
                    size={5}
                    style={styles.textDescription}
                  />
                  <TextInput
                    placeholder={'Please type your interests here...'}
                    onChangeText={(text) => setInterests(text)}
                    value={interests}
                    style={[
                      textStyles.text3,
                      styles.textTag,
                      isEditing ? styles.textIsEditing : undefined,
                    ]}
                    editable={isEditing}
                  />
                </View>
              </View>
            ))}
          {status ||
            (isEditing && (
              // eslint-disable-next-line react-native/no-inline-styles
              <View style={{marginTop: 15}}>
                <Hairline style={styles.hairline} />
                {/* eslint-disable-next-line react-native/no-inline-styles */}
                <View style={{flexDirection: 'column'}}>
                  <TextElement
                    text={'Status:'}
                    size={5}
                    style={styles.textDescription}
                  />
                  <TextInput
                    placeholder={'Please type your status here...'}
                    onChangeText={(text) => setStatus(text)}
                    value={status}
                    multiline={true}
                    style={[
                      textStyles.text3,
                      styles.textNormal,
                      isEditing ? styles.textIsEditing : undefined,
                    ]}
                    editable={isEditing}
                  />
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
      <Button
        title={isEditing ? 'save' : 'edit'}
        onPress={() => {
          setIsEditing(!isEditing);
          handleOnPress();
        }}
        color={'#5CBACB'}
      />
    </>
  );
};

const styles = StyleSheet.create({
  userImage: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').width,
  },
  profileContainer: {
    marginTop: 5,
    marginHorizontal: 10,
  },
  profileHeaderContainer: {
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    paddingVertical: 0,
  },
  textNormal: {
    fontWeight: 'normal',
    color: 'black',
    paddingVertical: 0,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textTag: {
    paddingHorizontal: 8,
    paddingVertical: 5,

    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#5CBACB',
    color: '#5CBACB',

    textAlignVertical: 'center',
    textAlign: 'center',
  },
  textIsEditing: {
    textDecorationLine: 'underline',
    borderColor: 'rgba(255,255,255,0.0)',
  },
  textIsEditingWarning: {
    color: '#cb5c69',
  },
  textDescription: {
    marginTop: 10,
    color: '#989a9a',
  },
  hairline: {
    marginBottom: 5,
  },
});

export default ProfileEdit;
