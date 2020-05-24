import React, { FC } from 'react';
import AttachmentBar from '../AttachmentBar';

type Props = {};

const data = [
  {
    src: 'https://picsum.photos/id/237/200/300',
    name: 'attachment 1'
  }, {
    src: 'https://picsum.photos/id/236/200/300',
    name: 'attachment 2'
  }, {
    src: 'https://picsum.photos/id/235/200/300',
    name: 'attachment 3'
  }, {
    src: 'https://picsum.photos/id/234/200/300',
    name: 'attachment 4'
  }, {
    src: 'https://picsum.photos/id/233/200/300',
    name: 'attachment 5'
  }, {
    src: 'https://picsum.photos/id/232/200/300',
    name: 'attachment 6'
  }, {
    src: 'https://picsum.photos/id/231/200/300',
    name: 'attachment 7'
  }, {
    src: 'https://picsum.photos/id/230/200/300',
    name: 'attachment 8'
  }, {
    src: 'https://picsum.photos/id/229/200/300',
    name: 'attachment 9'
  }, {
    src: 'https://picsum.photos/id/228/200/300',
    name: 'attachment 10'
  }, {
    src: 'https://picsum.photos/id/227/200/300',
    name: 'attachment 11'
  }, {
    src: 'https://picsum.photos/id/223/200/300',
    name: 'attachment 12'
  }, {
    src: 'https://picsum.photos/id/225/200/300',
    name: 'attachment 13'
  }, {
    src: 'https://picsum.photos/id/221/200/300',
    name: 'attachment 14'
  }
]

const MaterialSlider: FC<Props> = () => {
  return <AttachmentBar data={data}/>;
}

export default MaterialSlider;
