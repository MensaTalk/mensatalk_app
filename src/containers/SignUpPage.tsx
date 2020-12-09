import React, {useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';

import {SignUserInterface} from '../types';
import {RootStackParamList} from '../navigation/RootNavigation';
import {signUpUserStart} from '../slices/user';
import {getUser} from '../selectors/user';
import SignUpForm from '../components/Form/SignUpForm';

type Props = StackScreenProps<RootStackParamList, 'RoomListPage'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignUpPage: React.FC<Props> = ({route, navigation}: Props) => {
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

  const onSignUp = (signUser: SignUserInterface) => {
    console.log(signUser);
    setProcess(true);
    dispatch(signUpUserStart(signUser));
  };

  return (
    <>
      <SignUpForm onSignUp={onSignUp} />
    </>
  );
};

export default SignUpPage;
