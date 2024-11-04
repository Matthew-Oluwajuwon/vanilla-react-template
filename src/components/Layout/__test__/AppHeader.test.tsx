import { it, expect, describe, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import AppHeader from '../AppHeader'; // Adjust the import path as necessary

describe('AppHeader', () => {
  let setCollapsed: (value: boolean) => void;
  let toggleTheme: () => void;

  beforeEach(() => {
    // Initialize the mock functions before each test
    setCollapsed = vi.fn();
    toggleTheme = vi.fn();
  });

  it('renders correctly with light theme and not collapsed', () => {
    render(
      <AppHeader 
        collapsed={false} 
        themeMode="light" 
        setCollapsed={setCollapsed} 
        toggleTheme={toggleTheme} 
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('switch')).toBeInTheDocument();
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByRole('button')).toHaveClass('ant-btn'); // Check for Ant Design button class
  });

  it('renders correctly with dark theme and collapsed', () => {
    render(
      <AppHeader 
        collapsed={true} 
        themeMode="dark" 
        setCollapsed={setCollapsed} 
        toggleTheme={toggleTheme} 
      />
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('ant-btn'); // Check for Ant Design button class
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true'); // Switch should be checked
  });

  it('calls setCollapsed when button is clicked', () => {
    render(
      <AppHeader 
        collapsed={false} 
        themeMode="light" 
        setCollapsed={setCollapsed} 
        toggleTheme={toggleTheme} 
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(setCollapsed).toHaveBeenCalledWith(true); // As collapsed will toggle from false to true
  });

  it('calls toggleTheme when switch is toggled', () => {
    render(
      <AppHeader 
        collapsed={false} 
        themeMode="light" 
        setCollapsed={setCollapsed} 
        toggleTheme={toggleTheme} 
      />
    );

    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);
    
    expect(toggleTheme).toHaveBeenCalled(); // Should call the toggleTheme function
  });
});
