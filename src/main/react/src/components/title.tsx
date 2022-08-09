import * as React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

type TitleProps = React.ComponentProps<TypographyProps<'h2', any>> & { children?: React.ReactNode }

export const Title: React.FC<TitleProps> = (props) => {
	const { children, ...rest } = props;
	return <Typography component="h2" variant="h6" color="primary" gutterBottom {...rest}>
		{children}
	</Typography>
}
