import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {

    const simpsons = [
        {
            id:1 ,
            name:'Homer',
            surname:'Simpson',
            image:'https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg'
        },
        {
            id:2,
            name:'Marge',
            surname:'Simpson',
            image:'https://static.wikia.nocookie.net/simpsons/images/0/0b/Sexy_Santa_Marge.png'
        },
        {
            id:3,
            name:'Bart',
            surname:'Simpson',
            image:'https://static.wikia.nocookie.net/deathbattlefanon/images/f/f7/6355543_preview.png'
        },
        {
            id:4,
            name:'Liza',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'
        },
        {
            id:5,
            name:'Maggie',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'
        }
    ]

    return (
        <div>
            {
                simpsons.map(value => <Simpson key={value.id} simpson={value}/>)
            }
        </div>
    );
};

export {Simpsons};