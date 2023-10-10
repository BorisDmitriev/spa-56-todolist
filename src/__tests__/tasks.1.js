import React from 'react';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

afterEach(cleanup);

describe("Add Task", () => {
    it("'Add a Task' button should exist on page", () => {
        render(<App />);
        expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    });
    it("Input field with placeholder 'Add a task' should exist on page", () => {
        render(<App />);
        expect(screen.getByPlaceholderText(/add/i)).toBeInTheDocument();
    });
    it("Should allow user to add a task", () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/add/i);
        fireEvent.change(input, { target: { value: "Do Laundry" } });
        const button = screen.getByRole("button", { name: /add/i });
        fireEvent.click(button);
        expect(screen.getByText(/do laundry/i)).toBeVisible();
    });
});
describe("Complete Task", () => {
    it("Each item should have a 'set to done' button", () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/add/i);
        fireEvent.change(input, { target: { value: "Take out Trash" } });
        const button = screen.getByRole("button", { name: /add/i });
        fireEvent.click(button);
        expect(screen.getByText(/take out trash/i)).toBeVisible();
        expect(screen.getByRole("button", { name: /done/i })).toBeInTheDocument();
    });
    it("Should allow User to mark tasks as completed", () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/add/i);
        fireEvent.change(input, { target: { value: "Take out Trash" } });
        const button = screen.getByRole("button", { name: /add/i });
        fireEvent.click(button);
        expect(screen.getByText(/take out trash/i)).toBeVisible();
        // Marking task as complete & checking if element contain class of strikedthrough
        const li = screen.getByText(/take out trash/i);
        const doneBtn = screen.getByRole("button", { name: /done/i });
        fireEvent.click(doneBtn);
        expect(li).toHaveClass("done");
    });
});
describe("Delete Task", () => {
    it("Each item should have a 'delete' button", () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/add/i);
        fireEvent.change(input, { target: { value: "Take out Trash" } });
        const button = screen.getByRole("button", { name: /add/i });
        fireEvent.click(button);
        expect(screen.getByText(/take out trash/i)).toBeVisible();
        expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
    });
    it("Should allow User to Delete tasks", () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/add/i);
        fireEvent.change(input, { target: { value: "Take out Trash" } });
        const button = screen.getByRole("button", { name: /add/i });
        fireEvent.click(button);
        expect(screen.getByText(/take out trash/i)).toBeVisible();
        // Deleting task & checking if element is no longer on screen
        const li = screen.getByText(/take out trash/i);
        const deleteBtn = screen.getByRole("button", { name: /delete/i });
        fireEvent.click(deleteBtn);
        expect(li).not.toBeInTheDocument();
    });
});