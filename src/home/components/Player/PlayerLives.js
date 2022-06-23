import React from 'react';
import {Text} from '../../../common';

const PlayerLives = ({noLives, lives}) => {
  const livesColor =
    lives === 3 || lives === 4 || lives === 5
      ? '#fff'
      : lives === 2 || lives === 1
      ? '#ff6a00'
      : '#cf2b479f';

  // RENDER
  return (
    <Text style={{top: 2}} color={livesColor} fontFamily="Rubik-Medium">
      {noLives ? 'Out' : `${lives} lives`}
    </Text>
  );
};

export default React.memo(PlayerLives);
