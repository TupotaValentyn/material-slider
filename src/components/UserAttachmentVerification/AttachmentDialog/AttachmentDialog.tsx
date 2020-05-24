import React, { FC, useCallback, useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageWrapper from '../ImageWrapper';
import { NextIcon, RotateIcon, ZoomInIcon, ZoomOutIcon } from '../../icons';

type Props = {
  open: boolean;
  setOpen: any;
  assetName: string;
  src: string;
  onNext: any;
  onPrev: any;
};

const useClasses = makeStyles((theme: Theme) => {
  return {
    root: {
      overflowY: 'initial',
      '& .MuiDialog-paper': {
        overflowY: 'initial'
      }
    },
    dialogClass: {
      maxWidth: 480,
    },
    contentBox: {
      width: 480,
      height: 380,
      display: 'flex',
      justifyContent: 'center',
      boxSizing: 'border-box'
    },
    actionBox: {
      display: 'flex'
    },
    buttonClass: {
      minWidth: 'fit-content'
    },
    nextButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      right: -35
    },
    prevButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%) scale(-1, 1)',
      left: -35,
    },
    scalesIcon: {
      transform: 'scale(-1, 1)',
    }
  }
})

const AttachmentDialog: FC<Props> = React.memo(({ open, setOpen, assetName, src, onNext, onPrev }) => {
  const [zoom, setZoom] = useState(1);
  const [deg, setDeg] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const rotate = useCallback((rotateDeg: number) => {
    setDeg((deg: number) => deg + rotateDeg);
  }, []);

  const rotateToRight = () => rotate(90);

  const rotateToLeft = () => rotate(-90);


  const zoomIn = useCallback(() => {
    setZoom((zoom: number) => zoom + 1)
  }, [])

  const zoomOut = useCallback(() => {
    setZoom((zoom: number) => zoom - 1)
  }, [])

  const transformStyles = useCallback(() => {
    return { transform: `rotate(${deg}deg) scale(${zoom})`, transition: 'all .3s' }
  }, [zoom, deg])

  const { root, dialogClass, contentBox, actionBox, buttonClass, nextButton, prevButton, scalesIcon } = useClasses();

  return (
    <>
      <Dialog className={root} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <div className={dialogClass}>
          <DialogTitle id="customized-dialog-title">
            {assetName}
          </DialogTitle>
          <DialogContent dividers className={contentBox}>
            <ImageWrapper style={transformStyles()} src={src}/>
          </DialogContent>
          <DialogActions className={actionBox}>
            <IconButton className={`${buttonClass} ${scalesIcon}`} onClick={rotateToRight}>
              <RotateIcon/>
            </IconButton>
            <IconButton className={buttonClass} onClick={rotateToLeft}>
              <RotateIcon/>
            </IconButton>
            <IconButton className={buttonClass} onClick={zoomIn} disabled={zoom > 5}>
              <ZoomInIcon/>
            </IconButton>
            <IconButton className={buttonClass} onClick={zoomOut} disabled={zoom < 2}>
              <ZoomOutIcon/>
            </IconButton>
          </DialogActions>
        </div>
        <IconButton className={prevButton} onClick={onPrev}>
          <NextIcon color="primary"/>
        </IconButton>
        <IconButton className={nextButton} onClick={onNext}>
          <NextIcon color="primary"/>
        </IconButton>
      </Dialog>
    </>)
});

export default AttachmentDialog;
