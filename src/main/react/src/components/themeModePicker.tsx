import IconButton from '@mui/material/IconButton';
import { PaletteMode } from '@mui/material';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';

import React from 'react';

interface themeModePickerProps {
    mode: PaletteMode,
    modeChange: (mode: PaletteMode) => void;
}

export const ThemeModePicker: React.FC<themeModePickerProps> = (props) => {
	const { mode, modeChange } = props
	if (mode === 'dark') {
		return <IconButton aria-label="theme" color="inherit" onClick={() => modeChange('light')}><NightlightRoundedIcon /></IconButton>
	} if (mode === 'light') {
		return <IconButton aria-label="theme" color="inherit" onClick={() => modeChange('dark')}><LightModeRoundedIcon /></IconButton>
	}
	return null;

}
