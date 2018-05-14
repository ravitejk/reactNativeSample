import React from 'react';
import { Image, Text, View } from 'react-native';
import {Button, Card, CardSection} from './common';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image} = album;
  const {artistImageStyle, albumImageStyle, textViewStyle, textStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{uri: thumbnail_image }} style={artistImageStyle} />
        </View>
        <View style={textViewStyle}>
          <Text style={textStyle}>{title}</Text>
          <Text style={textStyle}>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{uri: image}} style={albumImageStyle} />
      </CardSection>
      <CardSection>
        <Button buttonText='Buy Now !!' onPress={()=> console.log('pressed')}/>
      </CardSection>
    </Card>
  );
};

const styles = {
  albumImageStyle: {
    flex: 1,
    height: 300
  },
  artistImageStyle:{
    width:60,
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems:'center',
    borderBottomWidth: 1,
    borderColor: '#666'
  },
  textViewStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textStyle: {
    fontSize: 14,
    paddingLeft:5
  }
};

export default AlbumDetail;