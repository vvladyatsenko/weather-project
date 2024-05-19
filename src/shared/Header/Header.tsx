import { useState } from 'react';
import Select from 'react-select';
import { GlobalSvgSelector } from '../../pages/assets/icons/global/GlobalSvgSelector';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';
import style from './Header.module.scss';

interface Props {
  onCityChange: (city: string) => void;
}

export const Header = ({ onCityChange }: Props) => {
  const theme = useTheme();
  const [selectedCity, setSelectedCity] = useState({
    value: 'Kharkiv',
    label: 'Харьков',
  });

  const options = [
    { value: 'Kharkiv', label: 'Харків' },
    { value: 'Kyiv', label: 'Київ' },
    { value: 'Odessa', label: 'Одеса' },
    { value: 'Dnipro', label: 'Дніпро' },
    { value: 'Zaporizhzhia', label: 'Запоріжжя' },
    { value: 'Lviv', label: 'Львів' },
    { value: 'Mykolaiv', label: 'Миколаїв' },
    { value: 'Vinnytsia', label: 'Вінниця' },
    { value: 'Kherson', label: 'Херсон' },
    { value: 'Chernihiv', label: 'Чернігів' },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#ffffff' : '#000000',
    }),
  };

  const handleCityChange = (selectedOption: any) => {
    setSelectedCity(selectedOption);
    onCityChange(selectedOption.value);
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <GlobalSvgSelector id={'header-logo'} />
        </div>
        <div className={style.title}>Weather</div>
      </div>
      <div className={style.wrapper}>
        <div className={style.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id={'change-theme'} />
        </div>
        <Select
          defaultValue={selectedCity}
          styles={colorStyles}
          options={options}
          onChange={handleCityChange}
          value={selectedCity}
        />
      </div>
    </header>
  );
};
