import React from 'react';

import './post-list.css'

import PostListItem from '../post-list-item'
import { ListGroup } from 'reactstrap'


const PostList = ({posts,onDeleted, onToggleImportant, onToggleLiked}) => {
    const elements  = posts.map((item) => {
        const {id, ...itemprops} = item;
        return (
            <li key = {id} className = 'list-group-item'>
                <PostListItem {...itemprops}
                    onDelete = {() => onDeleted(id)} 
                    onToggleImportant = {() => {onToggleImportant(id)}}
                    onToggleLiked = {() => {onToggleLiked(id)}}

                    />              
            </li>    
        )
    })
    return (
        <ListGroup className = "app-list">
            {elements}
        </ListGroup>

    )
}
export default PostList;