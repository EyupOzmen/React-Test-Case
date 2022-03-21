import React, {useContext} from 'react';
import {EventContext} from '../../context/EventContext';
import {SelectedEventItem} from '../SelectedEventItem/SelectedEventItem';
import './selectedEventList.scss';

const SelectedEventList = () => {
  const {selectedEvents} = useContext(EventContext);
  return (
    <>
      <div className='selectedItemList_container'>
        <div>
          {selectedEvents?.map((item) => {
            return (
              <SelectedEventItem
                key={`${item.ID}${item.OCG}${item.OC}`}
                Code={item.ID}
                Match={item.N}
                Rate={item.O}
              />
            );
          })}
        </div>
        <div className='selectedItemPrice_table'>
          Toplam Tutar :
          {' ' +
            selectedEvents?.reduce((prev, curr) => {
              return prev + parseFloat(curr.O);
            }, 0)}
        </div>
      </div>
    </>
  );
};

export {SelectedEventList};
