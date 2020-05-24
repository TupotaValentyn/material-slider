import React, { FC, useCallback, useState } from 'react';
import { Tabs, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AttachmentDialog from '../MaterialSlider/AttachmentDialog';
import AttachmentTab from '../MaterialSlider/AttachmentTab';

type Props = {
  data: any[];
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}));

const AttachmentBar: FC<Props> = ({ data }) => {
  /**
   * States
   */

  const [value, setValue] = useState(0);
  const [currentItem, setCurrentItem] = useState();
  const { root } = useStyles();
  const [open, setOpen] = useState(false);

  const showDialog = (item: any) => {
    setOpen(true);
    setCurrentItem(item);
  }

  const handleChange = useCallback((event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  }, []);

  const handleNext = useCallback(() => {
    const curr = data.findIndex(item => item.name === currentItem.name);
    if (curr === data.length - 1) {
      setCurrentItem(data[0]);
    } else {
      setCurrentItem(data[curr + 1])
    }
  }, [setCurrentItem, data, currentItem])

  const handlePrev = useCallback(() => {
    const curr = data.findIndex(item => item.name === currentItem.name);
    if (curr === 0) {
      setCurrentItem(data[data.length - 1]);
    } else {
      setCurrentItem(data[curr - 1])
    }
  }, [setCurrentItem, data, currentItem])

  return <div className={root}>
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="on"
      indicatorColor="primary"
      textColor="primary"
      aria-label="scrollable force tabs example"
    >
      {
        data.map((item: any, index: number) => {
          return (
            <AttachmentTab key={`${item.src}-${index}`} index={index} item={item} showDialog={showDialog}/>
          );
        })
      }
    </Tabs>
    <AttachmentDialog open={open} setOpen={setOpen} assetName={currentItem?.name} src={currentItem?.src}
                      onNext={handleNext}
                      onPrev={handlePrev}
    />
  </div>
};

export default AttachmentBar;
