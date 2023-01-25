import './Car.css';

const Car = ({car}) => {
    const {id,brand, price, year} = car;


    return (
        <div>
            <div className={'carCard'}>

                <div>id {id}</div>
                <div className={'carField'}>brand {brand}</div>
                <div className={'carField'}>price {price}</div>
                <div className={'carField'}>year {year}</div>

            </div>

        </div>
    );
};

export {Car};