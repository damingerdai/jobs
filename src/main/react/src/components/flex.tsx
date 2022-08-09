import * as React from 'react';
import Box from '@mui/material/Box';

type FlexProps = React.ComponentProps<typeof Box> & { children: React.ReactNode};

export const Flex: React.FC<FlexProps> = (props) => {
	const { children, ...rest } = props;

	return <Box sx={{ display: 'flex' }} {...rest}>
		{children}
	</Box>;
}
