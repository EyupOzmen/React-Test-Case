import React, {useContext, useMemo, useRef, useState, useEffect} from 'react';

import {EventContext} from '../../context/EventContext';
import {Header} from '../Header/Header';
import {EventRowComponent} from '../EventRow/EventRow';

import './eventRowList.scss';

const EventRowList = () => {
  const {events} = useContext(EventContext);
  const [itemDisplayed, setItemDisplayed] = useState(30);
  let eventRowListRef = useRef();
  let listElement = eventRowListRef.current;

  const onScroll = () => {
    let diff = listElement?.scrollHeight - listElement?.offsetHeight;

    if (listElement?.scrollTop === diff) {
      if (itemDisplayed + 10 <= Object.entries(events.Events).length) {
        setItemDisplayed((prev) => prev + 10);
      }
    }
  };

  window.onscroll = () => {
    let listElement = eventRowListRef.current;
    let diff = listElement.scrollHeight - listElement.offsetHeight;
    if (listElement.scrollTop === diff) {
      if (itemDisplayed + 10 <= Object.entries(events.Events).length) {
        setItemDisplayed((prev) => prev + 10);
      }
    }
  };

  const memoizedEvents = useMemo(() => {
    return (
      <>
        {Object.entries(events.Events)
          .slice(0, itemDisplayed)
          .map(([key, value], index) => {
            return (
              <EventRowComponent
                key={key}
                index={index}
                D={value.D}
                DAY={value.DAY}
                LN={value.LN}
                ID={key}
                T={value.T}
                N={value.N}
                ONE={value.OCG[1]?.OC[0]?.O || ''}
                X={value.OCG[1]?.OC[1]?.O || ''}
                TWO={value.OCG[1]?.OC[2]?.O || ''}
                Alt={value.OCG[5]?.OC[25]?.O || ''}
                Üst={value.OCG[5]?.OC[26]?.O || ''}
                H1={''}
                one={''}
                x={''}
                two={''}
                H2={''}
                ONEX={value.OCG[2]?.OC[3]?.O || ''}
                ONETWO={value.OCG[2]?.OC[4]?.O || ''}
                XTWO={value.OCG[2]?.OC[5]?.O || ''}
                VAR={''}
                YOK={''}
                UNINE={3}
              />
            );
          })}
      </>
    );
  }, [itemDisplayed]);

  useEffect(() => {}, [itemDisplayed]);

  return (
    <>
      <table id='event-row-list' ref={eventRowListRef} onScroll={onScroll}>
        <Header />
        <tbody>{memoizedEvents}</tbody>
      </table>
    </>
  );
};

export default EventRowList;
