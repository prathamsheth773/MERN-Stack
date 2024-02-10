// import FirstComponent from './components/FirstComponent'
import './App.css';
import FoodItem  from './components/FoodItem';
let foodItem = [
  {
    name:'Veg Supreme Burger',
    price: 99,
    rating: 4.4,
    img:'burger',
  },
  {
    name:'Veg Supreme Pizza',
    price: 299,
    rating: 3.4,
    img:'Pizza',
  },
  {
    name:'Masala Dosa',
    price: 149,
    rating: 4.6,
    img:'Dosa',
  },
]
function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to react bootcamp</h1>
      <FirstComponent title="CSS Masterclass"/>
      <FirstComponent title="JavaScript Masterclass"/> */}
      <div className="container">
      <FoodItem name ={foodItem[0].name} price = {foodItem[0].price} rating = {foodItem[0].rating} img = {foodItem[0].img}/>
      <FoodItem/>
      <FoodItem/>

      </div>
    </div>
  );
}

export default App;
