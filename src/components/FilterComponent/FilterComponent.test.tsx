import { render, fireEvent, cleanup, waitFor } from '../../utils/test-utils';
import FilterComponent from './FilterComponent';

afterEach(cleanup);

describe ('Filter Component', () => {
  const mockedOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  test('should render without errors', () => {
    const mockedOnChange = jest.fn();
    const { getByText } = render(<FilterComponent 
      values={mockedOptions} 
      selectedValues={[]}
      changeHandler={mockedOnChange}
      placeholderText='Mock placeholder'
      />);

    const placeholder = getByText('Mock placeholder');

    expect(placeholder).toBeTruthy();
  });


  test('should call changeHandler twice when the first option is selected then the 9th option', async () => {
    const mockedOnChange = jest.fn();
    const { getByText } = render(<FilterComponent 
      values={mockedOptions} 
      selectedValues={[]}
      changeHandler={mockedOnChange}
      placeholderText='Mock placeholder'
      />);

    const filterComponent = document.getElementById('react-select-3-input')!;

    expect(filterComponent).toBeDefined();
    expect(filterComponent).not.toBeNull();
    expect(mockedOnChange).toHaveBeenCalledTimes(0);

    fireEvent.keyDown(filterComponent, { key: 'ArrowDown' });
    await waitFor(() => getByText('1'));
    fireEvent.click(getByText('1'));

    fireEvent.keyDown(filterComponent, { key: 'ArrowDown' });
    await waitFor(() => getByText('9'));
    fireEvent.click(getByText('9'));

    expect(mockedOnChange).toHaveBeenCalledTimes(2);
    expect(mockedOnChange).toHaveBeenCalledWith(['1', '9']);
  });

  test('should call changeHandler when option is selected, after setting some selected options by default', async () => {
    const mockedOnChange = jest.fn();
    const { getByText } = render(<FilterComponent 
      values={mockedOptions} 
      selectedValues={['1', '3']}
      changeHandler={mockedOnChange}
      placeholderText='Mock placeholder'
      />);

    const filterComponent = document.getElementById('react-select-4-input')!;

    expect(filterComponent).toBeDefined();
    expect(filterComponent).not.toBeNull();
    expect(mockedOnChange).toHaveBeenCalledTimes(0);

    fireEvent.keyDown(filterComponent, { key: 'ArrowDown' });
    await waitFor(() => getByText('5'));
    fireEvent.click(getByText('5'));

    expect(mockedOnChange).toHaveBeenCalledTimes(1);
    expect(mockedOnChange).toHaveBeenCalledWith(['1', '3', '5']);
  });

  test('should call changeHandler when filtering by input value', async () => {
    const mockedOnChange = jest.fn();
    const { getByText } = render(<FilterComponent 
      values={mockedOptions} 
      selectedValues={[]}
      changeHandler={mockedOnChange}
      placeholderText='Mock placeholder'
      />);

    const filterComponent = document.getElementById('react-select-5-input')!;

    expect(filterComponent).toBeDefined();
    expect(filterComponent).not.toBeNull();
    expect(mockedOnChange).toHaveBeenCalledTimes(0);

    fireEvent.change(filterComponent, {
      target: { value: '1' },
    });

    // select option 1
    fireEvent.keyDown(filterComponent, { key: 'ArrowDown' });  
    // select option 10
    fireEvent.keyDown(filterComponent, { key: 'ArrowDown' });

    await waitFor(() => getByText('10'));
    fireEvent.click(getByText('10'));

    expect(mockedOnChange).toHaveBeenCalledTimes(1);
    expect(mockedOnChange).toHaveBeenCalledWith(['10']);
  });

});