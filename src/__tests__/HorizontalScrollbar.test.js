import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'intersection-observer';
import HorizontalScrollbar from '../components/HorizontalScrollbar';

//Contrary to the warning given when this test is run, the prop 'itemId' is the correct prop. Changing it to 'itemID' will break the code.
test('should render HorizontalScrollbar component without crashing', () => {
  const testData = ['back', 'chest'];
  const testProps = {
    data: testData,
    bodyParts: false,
    setBodyPart: jest.fn(),
    bodyPart: 'someDefaultValue',
  };

  render(
    <Router>
      <HorizontalScrollbar {...testProps} />
    </Router>
  );
});