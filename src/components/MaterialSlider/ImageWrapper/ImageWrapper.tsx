import React, { FC } from 'react';

type Props = {
  src: string;
  className?: string;
  style?: any;
};

const ImageWrapper: FC<Props> = React.memo(({ children, style = {}, ...props }) => {
  return <img style={style} {...props} alt=""/>;
});

export default ImageWrapper;
