import React from 'react';

const buttonStyleHooks = () => {
  const getButtonCustomStyle = index => {
    switch (index) {
      case 0:
        return -30;
      case 1:
        return -10;
      case 2:
        return 0;
      case 3:
        return -10;
      case 4:
        return -30;
      default:
        return index;
    }
  };
  return {getButtonCustomStyle};
};

export default buttonStyleHooks;
