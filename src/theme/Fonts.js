const defaultFont = 'Montserrat';

export const Fonts = {
  regular: (s = 12) => {
    return {
      fontSize: s,
      fontFamily: `${defaultFont}-Regular`,
    };
  },
  medium: (s = 12) => {
    return {
      fontSize: s,
      fontFamily: `${defaultFont}-Medium`,
    };
  },
  bold: (s = 12) => {
    return {
      fontSize: s,
      fontFamily: `${defaultFont}-Bold`,
    };
  },
};
