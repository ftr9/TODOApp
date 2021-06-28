import { useState } from 'react';
import Cardcomponent from '../components/cart';

const Main = () => {

    const [inputValue, setinputValue] = useState("");
    const [todoList, settodoList] = useState([]);

    return (
        <>
            <div className="homePage">

                <h1>REACT TODO APP</h1>

                <input onChange={(e) => {
                    setinputValue(e.target.value);
                }} type="text" value={inputValue === "" ? "" : inputValue} placeholder="Type your todo here"></input>
                <button onClick={() => {
                    if (inputValue !== "") {
                        const list = [...todoList];
                        list.push({ name: inputValue, status: "no" });
                        settodoList(list);
                        setinputValue("");
                    }
                }}>Add + </button>
            </div>
            <div className="todoLIST">



                {
                    todoList.map((el) => {
                        return <Cardcomponent key={el.name} properties={{ name: el.name, status: el.status, todoList, settodoList }} />
                    })
                }






            </div>
        </>
    )
}

export default Main
