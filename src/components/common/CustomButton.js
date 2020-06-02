import React from 'react';
import { Button } from '@chakra-ui/core';

export function CustomButton({
  href,
  children,
  width,
  height,
  variant,
  variantColor,
  size,
  ...rest
}) {
  return (
    <Button
      fontSize={['xs', 'xm', 'sm', 'sm']}
      width={width}
      variant={variant}
      variantColor="blue"
      size={size}
      {...rest}
      px={['20px', '20px', '30px']}
      height={height}
    >
      {children}
    </Button>
  );
}
