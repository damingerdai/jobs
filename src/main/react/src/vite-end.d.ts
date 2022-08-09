import { Theme as MuiTheme } from '@mui/material/styles';
declare module '*.svg' {
	const content: any
	export default content
}
declare module '*.png' {
	const content: any
	export default content
}

declare module '@mui/material/styles' {
  interface Theme {
    vars: Omit<
      MuiTheme,
      'typography' | 'mixins' | 'breakpoints' | 'direction' | 'transitions'
    >;
  }
}
