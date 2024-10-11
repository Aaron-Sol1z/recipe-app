import React from "react";
import PropTypes from 'prop-types';
import american from '../assets/area_american.png';
import british from '../assets/area_british.png';
import canadian from '../assets/area_canadian.png';
import chinese from '../assets/area_chinese.png';
import croatian from '../assets/area_croatia.png';
import dutch from '../assets/area_dutch.png';
import egyptian from '../assets/area_egyptian.png';
import filipino from '../assets/area_filipino.png';
import french from '../assets/area_french.png';
import greek from '../assets/area_greek.png';
import indian from '../assets/area_indian.png';
import irish from '../assets/area_irish.png';
import italian from '../assets/area_italian.png';
import jamaican from '../assets/area_jamaican.png';
import japanese from '../assets/area_japanese.png';
import kenyan from '../assets/area_kenyan.png';
import malaysian from '../assets/area_malaysian.png';
import mexican from '../assets/area_mexican.png';
import moroccan from '../assets/area_moroccan.png';
import polish from '../assets/area_polish.png';
import portuguese from '../assets/area_portuguese.png';
import russian from '../assets/area_russian.png';
import spanish from '../assets/area_spanish.png';
import thai from '../assets/area_thai.png';
import tunisian from '../assets/area_tunisian.png';
import turkish from '../assets/area_turkish.png';
import ukrainian from '../assets/area_ukrainian.png';
import vietnamese from '../assets/area_vietnamese.png';
import unknown from '../assets/area_unknown.png';

const RecipeCard = ({recipe}) => {
    const { idMeal, //id to retrieve url for instructions
            strMeal, //name of meal
            strCategory, //designated category of meal
            strArea, //area of origin for meal
            strMealThumb, //link to image of meal
            strTags,//tags associated with meal
            strYoutube //link to Youtube video of how to make meal
        } = recipe;    
    let tags = [];//contains separated tags

    function areaFlag(area){
        let flag = area;
        let areaImg = "";
        switch(flag){
            case "American":   
                areaImg = `${american}`;
                break;
            case "British":
                areaImg = `${british}`;
                break;
            case "Canadian":
                areaImg = `${canadian}`;
                break;
            case "Chinese":
                areaImg = `${chinese}`;
                break;
            case "Croatian":
                areaImg = `${croatian}`;
                break;
            case "Dutch":
                areaImg = `${dutch}`;
                break;
            case "Egyptian":
                areaImg = `${egyptian}`;
                break;
            case "Filipino":
                areaImg = `${filipino}`;
                break;
            case "French":
                areaImg = `${french}`;
                break;
            case "Greek":
                areaImg = `${greek}`;
                break;
            case "Indian":
                areaImg = `${indian}`;
                break;
            case "Irish":
                areaImg = `${irish}`;
                break;
            case "Italian":
                areaImg = `${italian}`;
                break;
            case "Jamaican":
                areaImg = `${jamaican}`;
                break;
            case "Japanese":
                areaImg = `${japanese}`;
                break;
            case "Kenyan":
                areaImg = `${kenyan}`;
                break;
            case "Malaysian":
                areaImg = `${malaysian}`;
                break;
            case "Mexican":
                areaImg = `${mexican}`;
                break;
            case "Moroccan":
                areaImg = `${moroccan}`;
                break;
            case "Polish":
                areaImg = `${polish}`;
                break;
            case "Portuguese":
                areaImg = `${portuguese}`;
                break;
            case "Russian":
                areaImg = `${russian}`;
                break;
            case "Spanish":
                areaImg = `${spanish}`;
                break;
            case "Thai":
                areaImg = `${thai}`;
                break;
            case "Tunisian":
                areaImg = `${tunisian}`;
                break;
            case "Turkish":
                areaImg = `${turkish}`;
                break;
            case "Ukrainian":
                areaImg = `${ukrainian}`;
                break;
            case "Vietnamese":
                areaImg = `${vietnamese}`;
                break;
            default://unknown area
                areaImg = `${unknown}`;
                break;
        }
        return areaImg;
    }

    function splitTags(stringTags){
        const separatedTags = stringTags.split(',');
        return separatedTags;
    }
    
    return (
        <div className="recipe-card">
            <span className="recipe-card-category">{strCategory}</span><br></br>
            <img src={strMealThumb} alt={strMeal} title={strMeal}></img>
            {strTags ? (
                tags = splitTags(strTags),
                tags.map(tag => (
                    <span className="recipe-card-tags">{tag}</span>
                ))) : console.log(`No tags in this recipe`)}
            <div className="recipe-card-body">
                <img src={areaFlag(strArea)} alt="nation flag" className="recipe-card-flag" title="nation flag"></img><br></br>
                <span>{strArea}</span>
                <p>{strMeal}</p>
                <div className="recipe-card-links">
                    <a href={"https://www.themealdb.com/meal/" + idMeal} title="Read recipe instructions" target="_blank" rel="noopener noreferrer">Ingredients</a><br></br>
                    <a href={strYoutube} title="See tutorial video" target="_blank" rel="noopener noreferrer">See video</a>
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
    strTags: PropTypes.string, 
    strYoutube: PropTypes.string, 
}

export default RecipeCard;