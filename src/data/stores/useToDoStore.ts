import create from "zustand";

import { generateId } from '../helpers';

interface Task {
    id: string;
    title: string;
    createdAt: number;
} 

interface ToDoStore {
    tasks: Task[];
    createTask: (title: string) => void;
    updateTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
    tasks: [
        {
            id: '1',
            title: 'Your first task',
            createdAt: 0,
        },
    ],
    createTask: (title) => {
        const {tasks} = get();
        const newTask = {
            id: generateId(),
            title: title,
            createdAt: Date.now(),
        };
        set({
            tasks: [newTask, ...tasks],
        })
    },
    updateTask: (id, title) => {

    },
    removeTask: (id) => {

    },
}));


