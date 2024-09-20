import { useState, useEffect, useRef} from "react";
import './App.css';
import Header from './components/Header.jsx';
import RecipeCard from './components/RecipeCard.jsx';
import SearchBar from './components/SearchBar.jsx';
import Footer from './components/Footer.jsx';
//url for themealdb to search for meals by name
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  //variables//
  //State of if page is loading or not. Initial state is false
  const loading = useRef(false);
  //State of what search query is. Initial state is an empty string
  const [query, setQuery] = useState("");
  //state of what recipe array contains. Initial state is an empty array
  const [recipes, setRecipes] = useState([]);
  let errorFlag = "";

  //function to fetch data from api and search for recipes
  const searchRecipes = async () => {
    loading.current = true;
    const url = apiUrl + query; //url is apiUrl + search query
    //fetch url
    try{
      await fetch(url).then(function (response) {
        return response.json(); //get response in json format
      }).then(function (data) {
        console.log(data); //display meals array
        setRecipes(data.meals); //set recipes array with meals array from data
      });
    }
    catch(error){
      errorFlag = error;
    }
    console.log(`Error = ${errorFlag}`);
    loading.current = false; //page is no longer loading
  }

  //call searchRecipes when page runs only on mount
  useEffect(() => {
    searchRecipes();
  }, []);

  //call searchRecipes when search is done
  const handleSubmit = event => {
    event.preventDefault(); //prevent from reloading page
    searchRecipes();
  }

  //If there are recipes, create a new array called recipe
  //and pass in the recipe for each element.
  //Each element in the list has a key prop.
  //Else, display "No Recipes Found! on the page"
  return (
    <div className="App">
      <Header />
      <SearchBar handleSubmit={handleSubmit} value={query} onChange = {event => setQuery(event.target.value)} loading={loading.current} />
      <div className="recipes">
        {errorFlag === '' ?
          recipes ? recipes.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          )) : "No Recipes Found!" 
          : <h1>Oops. Something went wrong.</h1>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
