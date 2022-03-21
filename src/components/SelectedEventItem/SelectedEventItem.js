import React from 'react';
import './selectedEventItem.scss';

const SelectedEventItem = ({Code, Match, Rate}) => {
  return (
    <>
      <div className='selectedItem_container'>
        <div className='selectedItem_Up'>
          <span>4</span> <span>Kod:{Code}</span>
          {'  '}
          <span>Maç:{Match}</span>
        </div>
        <div className='selectedItem_Down'>
          <span>Oran:{Rate}</span>
          {'  '}
          <span>MBS:4</span>
        </div>
      </div>
    </>
  );
};

export {SelectedEventItem};
