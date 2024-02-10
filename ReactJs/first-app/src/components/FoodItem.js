export default function FoodItem(props)
{
    return(
        <div className="food-card">
            <div className="food-card-header">
                <img src="https://source.unsplash.com/1600x800/?burger" alt="" className="food-card-img"/>
                <p className="ratings">{props.rating}</p>
            </div>
            <h3>{props.name}</h3>
            <h4>{props.price} RS</h4>
            <p>Combination of exotic vegetables topped with onion, capsicum, mushroom tomato, black olives & baby</p>
        </div>
    )
}