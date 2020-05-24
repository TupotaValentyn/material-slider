type OutputImageProps = {
  src: string;
  className: string;
}

export const createImageProps = (src: string, className: string): OutputImageProps => {
  return { src, className }
};

export const a11yProps = (index: any) => {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}
