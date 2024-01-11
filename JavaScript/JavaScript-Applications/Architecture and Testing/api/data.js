import * as api from './api.js'

let endpoints = {
    'getAllIdeas': 'data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'createIdea': 'data/ideas',
    'getIdeaByID': 'data/ideas'
}

export function getAllIdeas(){
    return api.get(endpoints.getAllIdeas)
}

export function createIdea(idea){
    return api.post(endpoints.createIdea, idea)
}

export function ideaByID(id){
    return api.get(`${endpoints.getIdeaByID}/${id}`)
}

export function deleteByIdea(id){
    return api.del(`${endpoints.getIdeaByID}/${id}`)
}