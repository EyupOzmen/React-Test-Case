import React, {useContext} from 'react';
import './eventRow.scss';
import {isSelected} from '../../utils/commonHelper';
import {EventContext} from '../../context/EventContext';

const EventRow = ({
  index,
  D,
  DAY,
  LN,
  ID,
  T,
  N,
  ONE,
  X,
  TWO,
  Alt,
  Üst,
  H1,
  one,
  x,
  two,
  H2,
  ONEX,
  ONETWO,
  XTWO,
  VAR,
  YOK,
  UNINE,
}) => {
  const {selectedEvents, handleSelected} = useContext(EventContext);

  return (
    <React.Fragment key={ID}>
      <tr>
        <td className='info'>
          <span className='index'>{index}</span>
          <span className='date_league'>{' ' + D + ' ' + DAY + ' ' + LN}</span>
        </td>
        <td>Yorumlar</td>
        <td></td>
        <td>1</td>
        <td>x</td>
        <td>2</td>
        <td>Alt</td>
        <td>Üst</td>
        <td>H1</td>
        <td>1</td>
        <td>x</td>
        <td>2</td>
        <td>H2</td>
        <td>1-X</td>
        <td>1-2</td>
        <td>X-2</td>
        <td>Var</td>
        <td>Yok</td>
        <td>99</td>
      </tr>
      <tr>
        <td className='info'>{ID + ' ' + T + ' ' + N}</td>
        <td>Yorumlar</td>
        <td>4</td>
        <td
          className={`clickable ${isSelected(selectedEvents, ID, 1, 0)[0] && 'selected'} `}
          onClick={() => handleSelected(ID, 1, 0, N, ONE)}
        >
          {ONE}
        </td>
        <td
          className={`clickable ${isSelected(selectedEvents, ID, 1, 1)[0] && 'selected'}`}
          onClick={() => handleSelected(ID, 1, 1, N, X)}
        >
          {X}
        </td>
        <td>{TWO}</td>
        <td
          className={`clickable ${isSelected(selectedEvents, ID, 5, 25)[0] && 'selected'}`}
          onClick={() => handleSelected(ID, 5, 25, N, Alt)}
        >
          {Alt}
        </td>
        <td
          className={`' clickable ${isSelected(selectedEvents, ID, 5, 26)[0] && 'selected'}`}
          onClick={() => handleSelected(ID, 5, 26, N, Üst)}
        >
          {Üst}
        </td>
        <td>{H1}</td>
        <td>{one}</td>
        <td>{x}</td>
        <td>{two}</td>
        <td>{H2}</td>
        <td
          className={` clickable ${isSelected(selectedEvents, ID, 2, 3)[0] && 'selected'}`}
          onClick={() => handleSelected(ID, 2, 3, N, ONEX)}
        >
          {ONEX}
        </td>
        <td
          className={` clickable ${isSelected(selectedEvents, ID, 2, 4)[0] && 'selected'}`}
          onClick={() => handleSelected(ID, 2, 4, N, ONETWO)}
        >
          {ONETWO}
        </td>
        <td
          className={` clickable ${isSelected(selectedEvents, ID, 2, 5)[0] && 'selected'}`}
          onClick={() => handleSelected(ID, 2, 5, N, XTWO)}
        >
          {XTWO}
        </td>
        <td>{VAR}</td>
        <td>{YOK}</td>
        <td>{UNINE}</td>
      </tr>
    </React.Fragment>
  );
};

export const EventRowComponent = React.memo(EventRow);
