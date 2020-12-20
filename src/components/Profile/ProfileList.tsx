import React from 'react';
import {ProfileInterface} from '../../types';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import TextHeader from '../Header/Header';
import ProfileListItem from './ProfileListItem';

export interface ProfileListProps {
  profiles: ProfileInterface[];
  onClick?: (profileId: number) => void;
  headerName: string;
}

const ProfileList: React.FC<ProfileListProps> = ({
  profiles,
  onClick,
  headerName,
}: ProfileListProps) => {
  return (
    <>
      <View style={styles.container}>
        <TextHeader
          title={`${headerName}`}
          subtitle={`${profiles.length} user`}
        />
        <SafeAreaView style={styles.container}>
          <FlatList<ProfileInterface>
            data={profiles}
            renderItem={({item}) => (
              <>
                <ProfileListItem profile={item} onClick={onClick} />
              </>
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
