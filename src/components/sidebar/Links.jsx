

export default function Links() {

    const items = ["Homepage", "Sobre", "Portifolio", "Contato"]

    return(
        <div>{items.map(item => {
            <a href={`#${item}`} key={item}>
                {item}
            </a>
        })}
        </div>
    );
}