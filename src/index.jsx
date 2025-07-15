import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Todo } from './Todo';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
