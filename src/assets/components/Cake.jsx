const Cake = ({cake}) => {
    
    const ingredients = cake.ingredients.map((ingredient) => {
        return(
            <li>{ingredient}</li>
        )
    });

    return (
        <article>
            <h2>{cake.cakeName}</h2>
            <p>Rating: {cake.rating}</p>
            <ul>
                {ingredients}
            </ul>
            <p><b>£{cake.price}</b></p>
        </article>
    )
}

export default Cake;