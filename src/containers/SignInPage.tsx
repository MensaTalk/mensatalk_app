import React, {useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';

import {SignUserInterface} from '../types';
import {RootStackParamList} from '../navigation/RootNavigation';
import {signInUserStart} from '../slices/user';
import {getUser} from '../selectors/user';
import SignInForm from '../components/Form/SignInForm';

type Props = StackScreenProps<RootStackParamList, 'SignInPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignInPage: React.FC<Props> = ({route, navigation}: Props) => {
  const dispatch = useDispatch();
  const [process, setProcess] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {token, isLoading, error} = useSelector(getUser);

  useEffect(() => {
    if (process && token) {
      navigation.navigate('RoomListPage');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [process, token]);

  const onSignIn = (signUser: SignUserInterface) => {
    setProcess(true);
    dispatch(signInUserStart(signUser));
  };

  return (
    <>
      <SignInForm onSignIn={onSignIn} />
    </>
  );
};

export default SignInPage;
