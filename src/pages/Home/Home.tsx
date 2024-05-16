import { Days } from './components/Days/Days';
import style from './Home.module.scss';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import { useCustomDispatch } from '../../hooks/store';
import { useEffect } from 'react';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { useCustomSelector } from '../../hooks/store';
import { selectCurrentWeatherData } from '../../store/selectors';

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather('paris'));
  }, []);

  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};
