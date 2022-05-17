import React, { useCallback, useState } from "react";

import styles from './index.module.scss';

interface InputPlusProps {
    onAdd: (title: string) => void; 
}

export const InputPlus: React.FC<InputPlusProps> = ({onAdd}) => {
    const [value, setValue] = useState('');
    const addTask = useCallback(() => {
        onAdd(value);
        setValue('');
    }, [value])
    return (
        <div className={styles.inputPlus}>
            <input 
                type="text" 
                placeholder="Type your task"
                className={styles.inputPlusValue}
                value={value}
                onChange={((event) => {
                    setValue(event.target.value);
                })}
                onKeyDown={(event) => {
                    if(event.key === 'Enter') {
                        addTask();
                    }
                }}
            />
            <button 
                onClick={addTask}
                arial-label="Add"
                className={styles.inputPlusButton}
            />
        </div>
    );
}