import * as actionTypes from './actionTypes';

const initialState: TasksState = {
  tasks: [],
};

const reducer = (state: TasksState = initialState, action: TasksAction): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: Math.random(), // not really unique
        title: action.article.title,
        body: action.article.body,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter((article) => article.id !== action.article.id);
      return {
        ...state,
        articles: updatedArticles,
      };
  }
  return state;
};

export default reducer;
