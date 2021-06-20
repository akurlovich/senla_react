import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

class App extends React.Component {
  render() {

    return (
      <div>
        <Card variant={CardVariant.outlined} width='200px' height='100px'>
          <button>Button click</button>
        </Card>
        <UserList users={users} />
      </div>
    );
  }
};

export default App;
