import {createAction} from '@reduxjs/toolkit';

const PREFIX_ACTIONS = 'EXAMPLE_';

const showExampleLog = createAction<string>(PREFIX_ACTIONS + 'showExampleLog');
const showExampleLog1 = createAction<string>(
  PREFIX_ACTIONS + 'showExampleLog1',
);

const exampleActions = {
  showExampleLog,
  showExampleLog1,
};

export default exampleActions;
