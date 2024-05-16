import { GlobalSvgSelector } from '../../../assets/icons/global/GlobalSvgSelector';
import style from './ThisDay.module.scss';
import { Weather } from '../../../../store/types/types';

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  return (
    <div className={style.this__day}>
      <div className={style.top__block}>
        <div className={style.top__block_wrapper}>
          <div className={style.this__temp}>
            {Math.floor(weather.main.temp)}°
          </div>
          <div className={style.this__day_name}>Today</div>
        </div>
        <GlobalSvgSelector id={'sun'} />
      </div>
      <div className={style.bottom__block}>
        <div className={style.this__time}>
          Time: <span>21:55</span>
        </div>
        <div className={style.this__city}>
          <span>Kharkov</span>
        </div>
      </div>
    </div>
  );
};
