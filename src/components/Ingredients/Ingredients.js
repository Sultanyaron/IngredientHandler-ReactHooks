import React, { useReducer, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../../hooks/http';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('wrong case in ing reducer')
  };
};

const Ingredients = () => {
  const [ ingredients, dispatch ] = useReducer(ingredientReducer, []); // first value is the reducer function itself, second is the initial state
  const { isLoading, error, data, sendRequest, reqExtra, reqIdentifier, clear} = useHttp();

  // const [ ingredients, setIngredients ] = useState([]);
  // const [ isLoading, setIsLoading ] = useState(false);
  // const [ error, setError ] = useState();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifier === 'REMOVE_INGREDIENT') {
      dispatch({type: 'DELETE', id: reqExtra});
    } else if (!isLoading && !error && reqIdentifier === 'ADD_INGREDIENT') {
      dispatch({type: 'ADD', ingredient: {id: data.name, ...reqExtra}})
    };
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  const filteredIngredientHandler = useCallback(filteredIngs => {
    // setIngredients(filteredIngs);
    dispatch({type: 'SET', ingredients: filteredIngs});
  }, []);

  const addIngredientHandler = useCallback(ingredient => {
    sendRequest('https://react-hooks-db.firebaseio.com/ingredients.json/', 
    'POST',
    JSON.stringify(ingredient),
    ingredient,
    'ADD_INGREDIENT'
    );
  }, [sendRequest]);

  const removeIngredientHandler = useCallback(id => {
    sendRequest(`https://react-hooks-db.firebaseio.com/ingredients/${id}.json`,
     'DELETE',
     null,
     id,
     'REMOVE_INGREDIENT'
     )
  }, [sendRequest]);

  // const useMemoTest = useMemo(() => {
  //   return {
  //     lala: 'RETURN THE VALUES U WANT'
  //   }
  // }, []);

  return (
    <div className="App">

      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <IngredientForm 
        onAddIngredient={addIngredientHandler} 
        loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientHandler} />
        <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
};

export default Ingredients;
