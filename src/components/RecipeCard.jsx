import React from "react";
import PropTypes from 'prop-types';

const RecipeCard = ({recipe}) => {
    const { idMeal, //id to retrieve url for instructions
            strMeal, //name of meal
            strCategory, //designated category of meal
            strArea, //area of origin for meal
            strMealThumb, //link to image of meal
            strYoutube //link to Youtube video of how to make meal
        } = recipe;
    return (
        <div className="recipe-card">
            <span className="recipe-card-category">{strCategory}</span><br></br>
            <img src={strMealThumb} alt={strMeal}></img>
            <div className="recipe-card-body">
                <span>{strArea}</span>
                <p>{strMeal}</p>
                <div className="recipe-card-links">
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank" rel="noopener noreferrer">Ingredients</a><br></br>
                <a href={strYoutube} target="_blank" rel="noopener noreferrer">See video</a>
                </div>
            </div>
        </div>
    )
};

//propTypes to ensure correct datatypes
RecipeCard.propTypes = {
    idMeal: PropTypes.string,
    strMeal: PropTypes.string, 
    strCategory: PropTypes.string, 
    strArea: PropTypes.string, 
    strMealThumb: PropTypes.string, 
    strYoutube: PropTypes.string, 
}

export default RecipeCard;