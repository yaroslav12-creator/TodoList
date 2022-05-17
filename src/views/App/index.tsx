import React, { useEffect }from "react";
import styles from './index.module.scss';
import { useToDoStore } from "../../data/stores/useToDoStore";

export const App: React.FC = () => {
    
    const [tasks, createTask, updateTask, removeTask] = useToDoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask,
    ]);
    useEffect(() => {
        createTask('Some Title');
    }, []);

    console.log('11', tasks);
    

    return ( 
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>Todo App</h1>
            <section className={styles.articleSection}>

            </section>
            <section className={styles.articleSection}>

            </section>
        </article>
    );
};