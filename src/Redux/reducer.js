const initialState = {
    news: [],
    nbHits: '',
    nbTime: null,
    sort: 'search',
    tags: '',
    query: '',
    range: '',
    page: 0,
    totalPage: null,
    loading: false,
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'update/tags': 
        return {
            ...state,
            tags: action.payload
        }
        case 'update/sort': 
        return {
            ...state,
            sort: action.payload
        }
        case 'update/query': 
        return {
            ...state,
            query: action.payload
        }
        case 'update/page': 
        return {
            ...state,
            page: action.payload
        }
        case 'update/range': 
        return {
            ...state,
            range: action.payload
        }
        case 'update/nbHits': 
        return {
            ...state,
            nbHits: action.payload
        }
        case 'update/nbTime': 
        return {
            ...state,
            nbTime: action.payload
        }
        case 'update/totalPage': 
        return {
            ...state,
            totalPage: action.payload
        }
        case 'update/loading': 
        return {
            ...state,
            loading: action.payload
        }
        case 'update/news': 
        return {
            ...state,
            news: action.payload
        }
        default: return state
    }
}

export default reducer