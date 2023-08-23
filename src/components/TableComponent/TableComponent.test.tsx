import { render, cleanup } from '../../utils/test-utils';
import TableComponent from './TableComponent';

afterEach(cleanup);

describe ('Table Component', () => {

  test('should render without errors', () => {
    const { getByText } = render(<TableComponent />);

    const valueColumnHeader = getByText('Value');
    const mod350ColumnHeader = getByText('Mod 350');
    const mod8000ColumnHeader = getByText('Mod 8000');
    const mod20002ColumnHeader = getByText('Mod 20002');

    expect(valueColumnHeader).toBeInTheDocument();
    expect(mod350ColumnHeader).toBeInTheDocument();
    expect(mod8000ColumnHeader).toBeInTheDocument();
    expect(mod20002ColumnHeader).toBeInTheDocument();
  });

});