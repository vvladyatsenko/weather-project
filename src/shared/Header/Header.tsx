import { GlobalSvgSelector } from '../../pages/assets/icons/global/GlobalSvgSelector';
import style from './Header.module.scss';
import Select from 'react-select';

interface Props {}

export const Header = (props: Props) => {
  const options = [
    { value: 'city-1', label: 'Киев' },
    { value: 'city-2', label: 'Харьков' },
    { value: 'city-3', label: 'Львов' },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
  };
  
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <GlobalSvgSelector id={'header-logo'} />
        </div>
        <div className={style.title}>Weather</div>
      </div>
      <div className={style.wrapper}>
        <div className={style.change_theme}>
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
