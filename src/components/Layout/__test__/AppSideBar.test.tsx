import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AppSideBar from '../AppSideBar'; // Adjust the import path as necessary

describe('AppSideBar', () => {
  it('renders correctly when collapsed is false', () => {
    render(<AppSideBar collapsed={false} />);

    // Check if the sidebar is rendered
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    
    // Check if the labels and icons are present
    expect(screen.getByText('nav 1')).toBeInTheDocument();
    expect(screen.getByText('nav 2')).toBeInTheDocument();
    expect(screen.getByText('nav 3')).toBeInTheDocument();
  });
});
