import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import TextElement from '../utils/TextElement';
import Hairline from './Hairline';

export interface TextHeaderProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  showImage?: boolean;
  onImageClick?: () => void;
}

const TextHeader: React.FC<TextHeaderProps> = ({
  title,
  subtitle,
  imageUrl,
  showImage,
  onImageClick,
}: TextHeaderProps) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TextElement text={title} size={1} />
          {subtitle && (
            <TextElement text={subtitle} size={2} numberOfLines={1} />
          )}
        </View>
        {showImage && (
          <TouchableOpacity onPress={onImageClick}>
            <Image
              resizeMode="cover"
              style={styles.userImage}
              source={
                imageUrl
                  ? {uri: imageUrl}
                  : require('./../../assets/images/gradient.png')
              }
            />
          </TouchableOpacity>
        )}
      </View>
      <Hairline style={styles.hairlineStyle} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    marginTop: 22,
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 50,
  },
  hairlineStyle: {
    borderBottomWidth: 4,
  },
  userImage: {
    marginRight: 20,
    marginTop: 22,
    marginBottom: 10,

    height: 60,
    width: 60,
    borderRadius: 100,
  },
});

export default TextHeader;
