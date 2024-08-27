import { useState, useEffect, useRef} from "react";
import './App.css';
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

  //function to fetch data from api and search for recipes
  const searchRecipes = async () => {
    loading.current = true;
    const url = apiUrl + query; //url is apiUrl + search query
    //fetch url
    await fetch(url).then(function (response) {
      return response.json(); //get response in json format
    }).then(function (data) {
      console.log(data); //display meals array
      setRecipes(data.meals); //set recipes array with meals array from data
    });
    loading.current = false; //page is no longer loading
  }

  //call searchRecipes when page runs only on mount
  useEffect(() => {
    searchRecipes();
  }, []);

  return (
    <div className="App">
      <h1>Food Recipe App</h1>
    </div>
  );
}

export default App;
