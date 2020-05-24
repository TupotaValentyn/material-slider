import React, { FC, useCallback } from 'react';
import { Tab, Theme } from '@material-ui/core';
import ImageWrapper from '../ImageWrapper';
import { a11yProps, createImageProps } from '../utils/createImageProps';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  item: any;
  index: number;
  showDialog: any;
  key: string;
};

const useClasses = makeStyles((theme: Theme) => {
  return {
    imageRoot: {
      width: 100,
      height: 100,
      objectFit: 'contain'
    }
  }
})

const AttachmentTab: FC<Props> = ({ item, index, showDialog, key }) => {
  /**
   * Styles, Classes
   */

  const { imageRoot } = useClasses();

  /**
   * Functions
   */

  const showHandler = useCallback(() => {
    showDialog(item)
  }, [item, showDialog]);

  return (
    <Tab label={item.name}
         key={key}
         onClick={showHandler}
         icon={<ImageWrapper {...createImageProps(item.src, imageRoot)} />} {...a11yProps(index)} />
  );
};

export default AttachmentTab;
