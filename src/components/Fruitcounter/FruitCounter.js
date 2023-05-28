import React, {useEffect, useState} from 'react';
import "./fruitCounter.css"
function FruitCounter({kindOfFruit, imageLink, reset}) {
    const [fruit, setFruit] = useState(0);
    const fruitCounter = (action) => {
        if (action === 'plus') {
            setFruit(fruit + 1);
        } else if (action === 'minus') {
            if (fruit > 0) {
                setFruit(fruit - 1);
            }
        }
    };
    useEffect(() => {
        if (reset) {
            setFruit(0)
        }
    }, [reset]);
    return (
        <>
            <article>
            <img src={imageLink} alt=""/>
            <button type="button" onClick={() => fruitCounter('plus')}>
                +
        </button>
    <h4>{kindOfFruit}{fruit}</h4>
    <button type="button" onClick={() => fruitCounter('minus')}>
        -
    </button>
            </article>
        </>
    );
}

export default FruitCounter;