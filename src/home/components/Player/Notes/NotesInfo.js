import React from 'react';
import {Text, View} from '../../../../common';

const NotesInfo = () => {
  // Component
  const TextComponent = ({title, info, last}) => {
    return (
      <Text
        color="coral"
        fontFamily="Rubik-Medium"
        fontSize={12}
        style={{
          paddingBottom: 1,
          marginBottom: last ? 15 : null,
          paddingLeft: 5,
        }}>
        <Text fontFamily="Rubik-Bold" fontSize={12}>
          {title}{' '}
        </Text>
        {info}
      </Text>
    );
  };

  // RENDER
  return (
    <View>
      <TextComponent
        title="Action"
        info="-- Gained Life | Lost Life | On Kills"
      />
      <TextComponent
        title="Potted"
        info="-- Name of person | potted | potted by"
      />
      <TextComponent title="Pocket" info="-- Which pocket potted in" />
      <TextComponent title="Notes  " info="-- Any extra notes" last />
    </View>
  );
};

export default NotesInfo;
