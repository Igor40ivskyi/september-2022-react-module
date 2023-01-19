import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {

    const simpsons = [
        {
            id:1,
            name: 'Homer',
            surname: 'Simpson',
            image:'https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg'
        },
        {
            id:2,
            name: 'Marge',
            surname: 'Simpson',
            image:'https://images.squarespace-cdn.com/content/v1/5616ac17e4b018d366f57f53/1617370052841-7C6X3MG96TF778S21Z9B/MARGE+SIMPSON+SOUNDBOARD'
        },
        {
            id:3,
            name: 'Bart',
            surname: 'Simpson',
            image:'https://static.wikia.nocookie.net/simpsonstappedout/images/d/d2/Bart_Unlock.png'
        }

    ];

    return (
        <div>
            {
                simpsons.map(value => <Simpson key={value.id} simpson={value}/>)
            }
        </div>
    );
};

export {Simpsons};