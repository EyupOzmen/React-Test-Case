import React, {useState, createContext, useCallback} from 'react';
import {isSelected} from '../utils/commonHelper';
import {eventsData} from '../fakeDB/eventsData.js';

export const EventContext = createContext();

export const EventProvider = ({children}) => {
  const [events, setEvents] = useState(eventsData);

  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleSelected = useCallback(
    (ID, OCG, OC, N, O) => {
      let selected = isSelected(selectedEvents, ID, OCG, OC);

      if (selected[0]) {
        selectedEvents.splice(selected[1], 1);

        setSelectedEvents((prev) => (prev = [...selectedEvents]));
      } else {
        let newEvent = {
          ID,
          OCG,
          OC,
          N,
          O,
        };

        setSelectedEvents((prev) => (prev = [...selectedEvents, newEvent]));
      }
    },
    [selectedEvents]
  );

  const value = {
    events,
    selectedEvents,
    handleSelected,
  };

  return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
};
