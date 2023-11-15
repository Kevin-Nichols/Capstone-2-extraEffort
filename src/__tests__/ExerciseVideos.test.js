import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'intersection-observer';
import ExerciseVideos from '../components/ExerciseVideos';

test('should render ExerciseVideos component without crashing', () => {
  const mockExerciseVideos = [
    { video: { videoId: 'abc123', 
               thumbnails: [{ url: 'https://example.com/image.jpg' }], 
               title: 'Video Title', 
               channelName: 'Channel Name' 
             } 
    },
  ];
  const mockName = 'Exercise Name';

  render(<ExerciseVideos exerciseVideos={mockExerciseVideos} name={mockName} />);
});