import Image from "next/image";
import style from "./HomePage.module.css";

import Featured  from "../components/Featured/Featured";
import CategoryList from '../components/CategoryList/CategoryList';
import CardList from '../components/CardList/CardList';
import Menu from '../components/Menu/Menu';

export default function Home() {
  return (
    <main>
        <div className={style.container}>
         <Featured />
         <CategoryList />
         <div className={style.content}>
          <CardList />
          <Menu />
         </div>
        </div>
    </main>
  );
}
