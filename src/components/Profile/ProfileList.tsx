import React from 'react';
import {ProfileInterface} from '../../types';
import {Button, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import TextHeader from '../Header/Header';

export interface ProfileListProps {
  profiles: ProfileInterface[];
  onClick?: (profileId: number) => void;
}

const ProfileList: React.FC<ProfileListProps> = ({
  profiles,
  onClick,
}: ProfileListProps) => {
  return (
    <>
      <View style={styles.container}>
        <TextHeader title={`Users (${profiles.length})`} />
        <SafeAreaView style={styles.container}>
          <FlatList<ProfileInterface>
            data={profiles}
            renderItem={({item}) => (
              <Button
                title={item.username}
                onPress={() => (onClick ? onClick(item.id) : undefined)}
              />
            )}
            keyExtractor={(item) => Number(item.id).toString()}
          />
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileList;
