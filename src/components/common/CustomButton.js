import React from 'react';
import { Button } from '@chakra-ui/core';

export function CustomButton({
  href,
  content,
  width,
  height,
  variant,
  variantColor,
  ...rest
}) {
  return (
    <Button
      as="a"
      fontSize="16px"
      width={width}
      height={height}
      variant={variant}
      variantColor={variantColor}
      {...rest}
    >
      {content}
    </Button>
  );
}
