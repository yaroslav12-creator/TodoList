import React, { useEffect }from "react";
import styles from './index.module.scss';
import { useToDoStore } from "../../data/stores/useToDoStore";
import { InputPlus } from "../Components/InputPlus";
import { InputTask } from "../Components/InputTask";

export const App: React.FC = () => {
    
    const [tasks, createTask, updateTask, removeTask] = useToDoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask,
    ]);

    const _ = () => {};
    
    return ( 
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>Todo App</h1>
            <section className={styles.articleSection}>
                <InputPlus 
                    onAdd={(title) => {
                        if(title) {
                            createTask(title);
                        }
                    }}
                />
            </section>
            <hr style={{marginBottom: '10px'}}/>
            <section className={styles.articleSection}>
                {!tasks.length
                ? <p className={styles.articleText}>There is no tasks yes</p>
                : tasks.map((task) => (
                    <InputTask 
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        onDone={_}
                        onEdited={updateTask}
                        onRemoved={removeTask}
                    />
                ))
                }
            </section>
        </article>
    );
};