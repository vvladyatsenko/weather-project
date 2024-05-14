import { GlobalSvgSelector } from '../../pages/assets/icons/global/GlobalSvgSelector';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import style from './Popup.module.scss';

interface Props {}

export const Popup = ({}: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];
  
  return (
    <>
      <div className={style.blur}></div>
      <div className={style.popup}>
        <div className={style.day}>
          <div className={style.day__temp}>20°</div>
          <div className={style.day__name}>Среда</div>
          <div className={style.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={style.day__time}>
            Время: <span>21:54</span>
          </div>
          <div className={style.day__city}>
            <span>Харьков</span>
          </div>
        </div>
        <div className={style.this__day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={style.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
