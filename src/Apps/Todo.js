import React from 'react'
import { useChecklist } from 'react-checklist';
import { useSelector } from 'react-redux';
import '../styles/apps/Todo.scss';
// import { getCurrentDate } from '../utils/getCurrentDate';
// console.log(getCurrentDate())
const data = [
    { _id: 1, label: 'item 1' },
    { _id: 2, label: 'item 2' },
    { _id: 3, label: 'item 3' },
]

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date().toLocaleDateString('en-us', options);


export default function Todo() {
    const theme = useSelector(state => state.theme);

    const { handleCheck, isCheckedAll, checkedItems } = useChecklist(data, {
        key: '_id',
        keyType: 'number',
    });

    return (
        <div className={"todo " + theme}>
            <div className={"todo-header " + theme}>
                <h1>Tasks</h1>
                <h4>{today}</h4>
                {/* <div className={"mark-all " + theme}>
                    <input
                        type="checkbox"
                        onChange={handleCheck}
                        checked={isCheckedAll}
                    />
                    <label>Mark All as Complete</label>
                </div> */}
            </div>
            <div className={"list " + theme}>
                {data.map((v, i) => (
                    <div key={i} className={"list-element " + theme}>
                        <input
                            type="checkbox"
                            data-key={v._id}                  // 3
                            onChange={handleCheck}            // 4
                            checked={checkedItems.has(v._id)} // 5
                        />
                        <label>{v.label}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}
