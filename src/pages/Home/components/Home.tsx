import style from './Home.module.scss';
import { ThisDay } from './ThisDay/ThisDay';

interface Props {}

export const Home = (props: Props) => {
  return <div className={style.home}>
    <ThisDay></ThisDay>
  </div>;
};
