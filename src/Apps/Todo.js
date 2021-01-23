import React from 'react'
import { useChecklist } from 'react-checklist';
import '../styles/apps/Todo.scss';
const data = [
    { _id: 1, label: 'item 1' },
    { _id: 2, label: 'item 2' },
    { _id: 3, label: 'item 3' },
]

export default function Todo() {
    const { handleCheck, isCheckedAll, checkedItems } = useChecklist(data, {
        key: '_id',
        keyType: 'number',
    });

    return (
        <div className="todo">
            <ul>
                <li>
                    <input
                        type="checkbox"
                        onChange={handleCheck}         
                        checked={isCheckedAll}         
                    />
                    <label>Mark All as Complete</label>
                </li>

                {data.map((v, i) => (
                    <li key={i}>
                        <input
                            type="checkbox"
                            data-key={v._id}                  // 3
                            onChange={handleCheck}            // 4
                            checked={checkedItems.has(v._id)} // 5
                        />
                        <label>{v.label}</label>
                    </li>
                ))}

            </ul>
        </div>
    )
}
