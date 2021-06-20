import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
  const users: IUser[] = [
    {id: 1, name: 'Oleg', email: 'iii@ii.ff', address : {city: 'Minsk', street: 'Podded', zipcode: '222333'}},
    {id: 2, name: 'Oleg2', email: '2iii@ii.ff', address : {city: 'Minsk2', street: 'Podded2', zipcode: '222222'}},
  ]
  return (
    <div>
      <Card variant={CardVariant.outlined} width='200px' height='100px'>
        <button>Button click</button>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
