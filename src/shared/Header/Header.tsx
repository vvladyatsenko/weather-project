import { useEffect, useState } from 'react';
import { GlobalSvgSelector } from '../../pages/assets/icons/global/GlobalSvgSelector';
import style from './Header.module.scss';
import Select from 'react-select';
import { useTheme } from '../../hooks/useTheme';

interface Props {}

export const Header = (props: Props) => {
  const theme = useTheme();

  const options = [
    { value: 'city-1', label: 'Киев' },
    { value: 'city-2', label: 'Харьков' },
    { value: 'city-3', label: 'Львов' },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme.theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === 'dark' ? '#ffffff' : '#000000',
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;

    const components = [
      'body-background',
      'components-background',
      'card-background',
      'card-shadow',
      'text-color',
    ];

    components.forEach((component) => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme.theme})`
      );
    });
  }, [theme.theme]);

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
          defaultValue={options[1]}
          styles={colorStyles}
          options={options}
        />
      </div>
    </header>
  );
};
