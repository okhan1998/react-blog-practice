import React, {useState} from 'react'


function List(props) {
    let [count, setCount] = useState(0)
    
    const addCount = () => {
        setCount(count + 1);
    }


    return (
    
        <div className='list'>
            <h3>{props.title} <span onClick={addCount}>👍</span> {count}</h3>
            <p>{props.date}</p>
            <hr/>
        </div>
    )
}

export default List
