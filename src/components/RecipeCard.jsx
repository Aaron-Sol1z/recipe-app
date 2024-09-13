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
        
    function areaFlag(area){
        let flag = area;
        let areaImg = "";
        switch(flag){
            case "American":
                areaImg = "images/area_american.png";
                break;
            case "British":
                areaImg = "images/area_british.png";
                break;
            case "Canadian":
                areaImg = "images/area_canadian.png";
                break;
            case "Chinese":
                areaImg = "images/area_chinese.png";
                break;
            case "Croatian":
                areaImg = "images/area_croatia.png";
                break;
            case "Dutch":
                areaImg = "images/area_dutch.png";
                break;
            case "Egyptian":
                areaImg = "images/area_egyptian.png";
                break;
            case "Filipino":
                areaImg = "images/area_filipino.png";
                break;
            case "French":
                areaImg = "images/area_french.png";
                break;
            case "Greek":
                areaImg = "images/area_greek.png";
                break;
            case "Indian":
                areaImg = "images/area_indian.png";
                break;
            case "Irish":
                areaImg = "images/area_irish.png";
                break;
            case "Italian":
                areaImg = "images/area_italian.png";
                break;
            case "Jamaican":
                areaImg = "images/area_jamaican.png";
                break;
            case "Japanese":
                areaImg = "images/area_japanese.png";
                break;
            case "Kenyan":
                areaImg = "images/area_kenyan.png";
                break;
            case "Malaysian":
                areaImg = "images/area_malaysian.png";
                break;
            case "Mexican":
                areaImg = "images/area_mexican.png";
                break;
            case "Moroccan":
                areaImg = "images/area_moroccan.png";
                break;
            case "Polish":
                areaImg = "images/area_polish.png";
                break;
            case "Portuguese":
                areaImg = "images/area_portuguese.png";
                break;
            case "Russian":
                areaImg = "images/area_russian.png";
                break;
            case "Spanish":
                areaImg = "images/area_spanish.png";
                break;
            case "Thai":
                areaImg = "images/area_thai.png";
                break;
            case "Tunisian":
                areaImg = "images/area_tunisian.png";
                break;
            case "Turkish":
                areaImg = "images/area_turkish.png";
                break;
            case "Ukrainian":
                areaImg = "images/area_ukrainian.png";
                break;
            case "Vietnamese":
                areaImg = "images/area_vietnamese.png";
                break;
            default://unknown area
                areaImg = "images/area_unknown.png";
                break;
        }
        return areaImg;
    }
    
    return (
        <div className="recipe-card">
            <span className="recipe-card-category">{strCategory}</span><br></br>
            <img src={strMealThumb} alt={strMeal}></img>
            <div className="recipe-card-body">
                <img src={areaFlag(strArea)} alt="nation flag" className="recipe-card-flag"></img><br></br>
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