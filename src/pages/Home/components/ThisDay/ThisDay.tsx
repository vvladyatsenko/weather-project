import { GlobalSvgSelector } from '../../../assets/icons/global/GlobalSvgSelector';
import style from './ThisDay.module.scss';
import { Weather } from '../../../../store/types/types';
import moment from 'moment';

interface Props {
  weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case '01d': // Ясно (день)
      case '01n': // Ясно (ночь)
        return 'sun';
      case '02d': // Небольшая облачность (день)
      case '02n': // Небольшая облачность (ночь)
        return 'mainly_cloudy';
      case '03d': // Облачно
      case '03n': // Облачно
      case '04d': // Сильная облачность
      case '04n': // Сильная облачность
        return 'mainly_cloudy';
      case '09d': // Мелкий дождь (день)
      case '09n': // Мелкий дождь (ночь)
        return 'small_rain';
      case '10d': // Дождь (день)
      case '10n': // Дождь (ночь)
        return 'rain';
      case '11d': // Гроза (день)
      case '11n': // Гроза (ночь)
        return 'storm';
      case '13d': // Снег (день)
      case '13n': // Снег (ночь)
        return 'snow';
      case '50d': // Туман (день)
      case '50n': // Туман (ночь)
        return 'mist';
      default:
        return 'sun';
    }
  };

  const iconId = getWeatherIcon(weather.weather[0].icon);
  const currentTime = moment().format('HH:mm');
  const currentDate = moment().format('DD.MM.YYYY');

  const cityName = (name: string) => {
    switch (name) {
      case 'Kharkiv':
        return 'Харків';
      case 'Kyiv':
        return 'Київ';
      case 'Odessa':
        return 'Одеса';
      case 'Dnipro':
        return 'Дніпро';
      case 'Zaporizhzhia':
        return 'Запоріжжя';
      case 'Lviv':
        return 'Львів';
      case 'Mykolaiv':
        return 'Миколаїв';
      case 'Vinnytsia':
        return 'Вінниця';
      case 'Kherson':
        return 'Херсон';
      case 'Chernihiv':
        return 'Чернігів';
      default:
        return name;
    }
  };

  return (
    <div className={style.this__day}>
      <div className={style.top__block}>
        <div className={style.top__block_wrapper}>
          <div className={style.this__temp}>
            {Math.floor(weather.main.temp)}°
          </div>
          <div className={style.this__day_name}>Сьогодні</div>
        </div>
        <GlobalSvgSelector id={iconId} />
      </div>
      <div className={style.bottom__block}>
        <div className={style.this__time}>
          Час: <span>{currentTime}</span>
        </div>
        <div className={style.this__date}>
          Дата: <span>{currentDate}</span>
        </div>
        <div className={style.this__city}>
          Місто: <span>{cityName(weather.name)}</span>
        </div>
      </div>
    </div>
  );
};
