import React from 'react';
import CardMyWork from '../../components/CardMyWork/index';
import { myWorks } from '../../../data/myWorks';
import { ConteinerMyWork as Conteiner } from './components';

export default function MyWork() {
  return (
    <Conteiner>
      {Object.keys(myWorks).map((item, index) => {
        return <CardMyWork key={index} image={myWorks[item].img} description={myWorks[item].description} to={myWorks[item].to}/>;
      })}
    </Conteiner>
  );
}