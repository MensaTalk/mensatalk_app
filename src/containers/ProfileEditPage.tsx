import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParamList} from '../navigation/RootNavigation';
import ProfileEdit from '../components/Profile/ProfileEdit';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../selectors/user';
import {getUserIdStart} from '../slices/user';
import {
  TokenizedPayload,
  VerifyUserTokenInterface,
  ProfileInterface,
} from '../types';
import {getProfileStart, updateProfileStart} from '../slices/profiles';
import {selectOwnProfile} from '../selectors/profiles';

type Props = StackScreenProps<RootStackParamList, 'ProfileEditPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProfileEditPage: React.FC<Props> = ({route, navigation}: Props) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {token, username, userId, isLoading, error} = useSelector(getUser);
  const ownProfile = useSelector(selectOwnProfile);

  useEffect(() => {
    if (token && username && userId === undefined) {
      const payload: TokenizedPayload<VerifyUserTokenInterface> = {
        token: token,
        payload: {
          userName: username,
          jwtToken: token,
        },
      };
      dispatch(getUserIdStart(payload));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    if (token && userId) {
      const tokenizedPayload: TokenizedPayload<number> = {
        token: token,
        payload: userId,
      };
      dispatch(getProfileStart(tokenizedPayload));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const handleOnSave = (updatedProfile: ProfileInterface) => {
    if (token) {
      const tokenizedPayload: TokenizedPayload<ProfileInterface> = {
        token: token,
        payload: updatedProfile,
      };
      dispatch(updateProfileStart(tokenizedPayload));
    }
  };

  return (
    <>
      {ownProfile && (
        <ProfileEdit
          profile={{
            id: ownProfile.id,
            username: ownProfile.username,
            age: ownProfile.age,
            interests: ownProfile.interests,
            status: ownProfile.status,
          }}
          onSave={handleOnSave}
        />
      )}
    </>
  );
};

export default ProfileEditPage;
