import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../../Store/Theme.js';

function ThemeButton () {
	const { theme, handleChangeTheme } = useTheme();
	console.log(theme);

	return (
		<IconButton>
			{theme === 'Light' ? <LightModeIcon onClick={handleChangeTheme} /> : <DarkModeIcon onClick={handleChangeTheme} /> }
		</IconButton>
	);
}

export default ThemeButton;
