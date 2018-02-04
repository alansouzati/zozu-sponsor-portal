import React from 'react';

import { Box, Text } from 'grommet';

const Field = ({
  children, error, label, help, ...rest
}) => {
  let header;
  if (label || help || error) {
    header = (
      <Box
        direction='row'
        justify='between'
        pad={{ top: 'xsmall' }}
        {...rest}
      >
        <Text><strong>{label}</strong></Text>
        <Text color={error ? 'status-critical' : 'dark-5'}>{error || help}</Text>
      </Box>
    );
  }
  return (
    <Box
      direction='column'
      border={{ color: 'light-2', side: 'bottom', size: 'small' }}
      margin={{ vertical: 'xsmall' }}
    >
      {header}
      {children}
    </Box>
  );
};

export default Field;
