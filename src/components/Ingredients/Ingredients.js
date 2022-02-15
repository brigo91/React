import React, {useReducer, useState, useEffect, useCallback} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';

const ingredientReducer = (currentIngredients, action) => {
  switch(action.type){
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Should not get there!');
  }
}

const Ingredients = () => {
  const [ userIngredients, dispatch] = useReducer(ingredientReducer, [])
  //const [ userIngredients, setUserIngredients ] = useState([]);
  const [ isLoading, setIsloading ] = useState(false);
  const [ error, setError ] = useState();

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients);
  }, [userIngredients]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    //setUserIngredients(filteredIngredients);
    dispatch({type: 'SET', ingredients: filteredIngredients});
  }, []);

  const addIngredientHandler = ingredient => {
    setIsloading(true);
    fetch('https://react-hooks-update-1838d-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json',{
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      setIsloading(false);
      return response.json();
    }).then(responseData => {
      // setUserIngredients(prevIngredients => [
      //   ...prevIngredients,
      //   {id: responseData.name, ...ingredient}
      // ]);
      dispatch({type: 'ADD', ingredient: {id: responseData.name, ...ingredient}});
    });
  };

const removeIngredientHandler = ingredientId => {
  setIsloading(true);
  fetch(
    `https://react-hooks-update-1838d-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${ingredientId}.json`,
    {
      method: 'DELETE',
    }
  ).then((response) => {
    setIsloading(false);
    // setUserIngredients(prevIngredients =>
    //   prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
    // );
    dispatch({type: 'DELETE', id: ingredientId});
  }).catch((error) => {
    setError('Something went wrong');
    setIsloading(false);
  });
};

  const clearError = () => {
    setError(null);
  }

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading}/>

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
