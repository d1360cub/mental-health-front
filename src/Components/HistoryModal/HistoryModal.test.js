import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/index';

import HistoryModal from './index';

test('render link', () => {
  render(
    <Provider store={store}>
      <HistoryModal />
    </Provider>,
  );
  // eslint-disable-next-line jest/valid-expect
  expect(screen.queryAllByText('navigation'));
});
