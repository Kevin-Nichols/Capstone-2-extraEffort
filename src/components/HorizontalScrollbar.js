import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


//Creates a clickable left arrow to scroll left.
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography 
      onClick={() => scrollPrev()} 
      className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

//Creates a clickable right arrow to scroll right.
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography 
      onClick={() => scrollNext()} 
      className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

//Creates a horizontal scroll bar to scroll through exercise cards that are passed to it. Props come from where it is rendered in the SearchExercises component and the SimilarExercises component. 
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu 
    LeftArrow={LeftArrow} 
    RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        //'itemId' is correct for this prop, do not change to 'itemID'
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;