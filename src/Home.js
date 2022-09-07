import React, { useState } from 'react';
import './App.css';


function Home() {
    const [array, setArray] = useState([
        { id: 1, value: '' },
        { id: 2, value: '' },
        { id: 3, value: '' },
        { id: 4, value: '' },
        { id: 5, value: '' },
        { id: 6, value: '' },
        { id: 7, value: '' },
        { id: 8, value: '' },
        { id: 9, value: '' }]);
    
    const [style_css, setStyle] = useState('button_input');
    const [current, setCurrent] = useState('X');
    const [winner, setWinner] = useState('');


    const handleClick = (event) => {
        if (current == 'X') {
            setCurrent('0')
        } else {
            setCurrent('X')
        }
        const currentIndex = event
        const newState = array.map(item => {
            // 👇️ if id equals 2 replace object
            if (item.id === currentIndex) {
                return { id: currentIndex, value: current };
            }
            return item;
        });

        setArray(newState);
        setStyle('button_ok')
        checkWin()
    }

    const checkWin = () => {
        checkRow(0);
        checkRow(3);
        checkRow(6);
        checkColumn(0);
        checkColumn(1);
        checkColumn(2);
        console.log(array)
    }

    const checkRow = (index) => {
        debugger
        if (array[index].value === array[index + 1].value === array[index + 2].value) {
            if (array[index].value !== "") {
                setWinner(current)
                console.log(winner)
                alert('win')
            }
        }
    }
        
        const checkColumn = (index) => {
            if (array[index].value === array[index + 3].value === array[index + 6].value && array[index].value !== "") {
                setWinner(current)
                console.log(winner)
                alert('win')
        }
    }

    return (
        <div>
            <div className="grid grid-rows-3">
                <div className="bg-white grid grid-cols-3">
                    <button className={style_css} disabled={array[0].value !== ''} onClick={() => handleClick(1)}>{array[0].value}</button>
                    <button className={style_css} disabled={array[1].value !== ''} onClick={() => handleClick(2)}>{array[1].value}</button>                    <button className={style_css} disabled={array[2].value !== ''} onClick={() => handleClick(3)}>{array[2].value}</button>
                </div>


                <div className="bg-white grid grid-cols-3">
                    <button className={style_css} disabled={array[3].value !== ''} onClick={() => handleClick(4)}>{array[3].value}</button>
                    <button className={style_css} disabled={array[4].value !== ''} onClick={() => handleClick(5)}>{array[4].value}</button>                    <button className={style_css} disabled={array[5].value !== ''} onClick={() => handleClick(6)}>{array[5].value}</button>

                </div>

                <div className=" bg-white grid grid-cols-3">
                    <button className={style_css} disabled={array[6].value !== ''} onClick={() => handleClick(7)}>{array[6].value}</button>
                    <button className={style_css} disabled={array[7].value !== ''} onClick={() => handleClick(8)}>{array[7].value}</button>                    <button className={style_css} disabled={array[8].value !== ''} onClick={() => handleClick(9)}>{array[8].value}</button>

                </div>


            </div>
        </div>
    );
}

export default Home;
