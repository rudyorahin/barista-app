import React, { useState } from "react";
import RecipeChoices from './RecipeChoices';
import drinksJson from "./drinks.json"

const BaristaForm = () => {

    const [currentDrink, setCurrentDrink] = useState(drinksJson.drinks[0].name);
    const [trueRecipe, setTrueRecipe] = useState(drinksJson.drinks[0].ingredients);


    const [inputs, setInputs] = useState({
        temperature: '',
        milk: '',
        syrup: '',
        blended: ''
    });

    const ingredients = {
        temperature: ['hot', 'lukewarm', 'cold'],
        syrup: ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        milk: ['cow', 'oat', 'goat', 'almond', 'none'],
        blended: ['yes', 'turbo', 'no']
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    };

    const onCheckAnswer = () => {
        // Implementation for checking the answer
    };

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });
        getNextDrink();
    };

    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button
                    type="new-drink-button"
                    className="button newdrink"
                    onClick={onNewDrink}
                >
                    🔄
                </button>
            </div>
            
            {Object.entries(ingredients).map(([ingredient, choices]) => (
                <RecipeChoices
                    key={ingredient}
                    handleChange={handleChange}
                    label={ingredient}
                    choices={choices}
                    checked={inputs[ingredient]}
                />
            ))}
            <button type='button' className='button submit' onClick={onCheckAnswer}>
                Check Answer
            </button>
            <button type='button' className='button newdrink' onClick={onNewDrink}>
                New Drink
            </button>
        </div>
    );
};

export default BaristaForm;
