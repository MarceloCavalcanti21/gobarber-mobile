import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0 24px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 1px;
`;

export const UserAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;

  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 160px;
`;
