import React, { useState } from 'react';
import quotes from './quotes.json'

const QuoteBox = () => {

    const colors = ['#283D3B', '#197278', '#F6AE2D', '#C44536', '#772E25', '#235789', '#C1292E', '#161925', '#F1D302']

    const randomColor = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomColor]}`
    document.body.card = `color: ${colors[randomColor]}`

    console.log(quotes)

    // RandomQuote guarda un valor aleatorio menor o igual al tamaño del arreglo json
    const randomQuote = Math.floor(Math.random() * quotes.length)
    const [quoteRandom, setQuoteRandom] = useState(randomQuote)

    // changeQuote Setea la variable quoteRandom con un nuevo valor aleatorio
    const changeQuote = () => {
        const randomQuote = Math.floor(Math.random() * quotes.length)
        setQuoteRandom(randomQuote)
    }

    return (
        <>
        <div className='card' style={{color: colors[randomColor]}}>
            <div className='icon-quote'>
                <i className="fa-solid fa-quote-left"></i>
                <h2>{quotes[quoteRandom].quote}</h2>
            </div>
            <div className='autor-quote'>
                <h3>
                    {quotes[randomQuote].author}
                </h3>
                <button onClick={changeQuote} style={{background: colors[randomColor]}}>
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
        </div>
        </>
    );
};

export default QuoteBox;