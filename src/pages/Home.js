import React from 'react';

import {SelectedEventList} from '../components/SelectedEventList/SelectedEventList';
import './home.scss';

const EvenRowList = React.lazy(() => import('../components/EventRowList/EventRowList'));

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='table_container'>
          <React.Suspense fallback={<p>Loading list...</p>}>
            <EvenRowList />
          </React.Suspense>
          <SelectedEventList />
        </div>
      </div>
    </>
  );
};

export const HomePage = React.memo(Home);
