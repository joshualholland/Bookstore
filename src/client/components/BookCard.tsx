import * as React from 'react';

const BookCard = (props: any) => {
    return (
        <div className="card m-3" style={{ width: '18' + 'rem', display: 'inline-block' }}>
            <div className="card-body">
                <h3 className="card-title">{props.book.title}</h3>
                <h5 className='card-text'>{props.book.author}</h5>
                <p className='card-text'>{props.book.category}</p>
                <p className='card-text'>{props.book.price}</p>
            </div>
        </div>
    )

};

export default BookCard;