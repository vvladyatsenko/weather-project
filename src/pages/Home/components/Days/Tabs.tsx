import style from './Days.module.scss';

interface Props {}

export interface Tabs {
  value: string;
}

export const Tabs = (props: Props) => {
  const tabs: { value: string }[] = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    },
  ];
  
  return (
    <div className={style.tabs}>
      <div className={style.tabs__wrapper}>
        {tabs.map((tab) => (
          <div className={style.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      <div className={style.cancel}>Отменить</div>
    </div>
  );
};
