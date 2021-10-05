import { useDispatch, useSelector } from 'react-redux';
import { ChangeTheme } from '../redux/action';

const useDarkMode = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.darkMode);

  const changeAppTheme = (themeMode) => {
    dispatch(ChangeTheme(themeMode));
  };

  return { changeAppTheme, theme };
};

export default useDarkMode;
