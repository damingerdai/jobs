import IconButton from '@mui/material/IconButton';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';

import React from 'react';

import { ThemeMode } from '../types/theme';

interface themeModePickerProps {
    mode: ThemeMode
    modeChange: (mode: ThemeMode) => void;
}

export const ThemeModePicker: React.FC<themeModePickerProps> = (props) => {
    const { mode, modeChange } = props
    if (mode === 'dark') {
        return <IconButton aria-label="theme" color="inherit"  onClick={() => modeChange('light')}><NightlightRoundedIcon/></IconButton>
    } else if (mode === 'light') {
        return <IconButton aria-label="theme" color="inherit" onClick={() => modeChange('dark')}><LightModeRoundedIcon/></IconButton>
    } else {
        return null;
    }
}