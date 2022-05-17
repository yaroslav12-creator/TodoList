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
    createTask: (title: string) => {
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
    updateTask: (id: string, title: string) => {
        const {tasks} = get();
        set({
            tasks: tasks.map((task) => ({
                ...task,
                title: task.id == id ? title : task.title
            })),
        })

    },
    removeTask: (id: string) => {
        const {tasks} = get();
        set({
            tasks: tasks.filter(task => task.id != id),
        });
    },
}));


