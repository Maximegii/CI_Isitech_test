import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {test, expect} from 'vitest';
import App from './App';

test ('Add item to TODO', async () => {
    render(<App />);
    const user = userEvent.setup();
    const btn = screen.getByText('Add task');
    const list = screen.getByTestId('list');
    const input = screen.getByPlaceholderText('New Task');

    await user.type(input,'Nourrir le chat');

    await user.click(btn);

    expect(list.children.length).toBe(1);

    expect(list.children[0].textContent).toBe('Nourrir le chat')

})