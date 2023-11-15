import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import BodyPart from '../components/BodyPart';

test('should render BodyPart component without crashing', () => {
  const mockItem = 'legs';
  const mockSetBodyPart = jest.fn();
  const mockBodyPart = 'arms';

  render(<BodyPart item={mockItem} setBodyPart={mockSetBodyPart} bodyPart={mockBodyPart} />);
});