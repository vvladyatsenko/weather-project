import { useEffect } from 'react';
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';
import { selectCurrentWeatherData } from '../../store/selectors';
import { Header } from '../../shared/Header/Header';
import style from './Home.module.scss';
import { ThisDay } from './components/ThisDay/ThisDay';
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo';
import { Days } from './components/Days/Days';

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather('Kharkiv'));
  }, [dispatch]);

  const updateWeather = (city: string) => {
    dispatch(fetchCurrentWeather(city));
  };

  return (
    <div className={style.home}>
      <Header onCityChange={updateWeather} />
      <div className={style.wrapper}>
        <>
          <ThisDay weather={weather} />
          <ThisDayInfo weather={weather} />
        </>
      </div>
      <Days />
    </div>
  );
};
