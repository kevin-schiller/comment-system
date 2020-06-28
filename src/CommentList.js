import React, { Component } from 'react';

class CommentList extends Component {
    render() { 
        let commentsList = this.props.comments.map(comment => {
            return <li key={comment.id} >{comment.name}: {comment.message} <button className="delete"></button></li>
         })

        return (
            <div className="commentList">
                <h3 className="title is-3">Liste des commentaires</h3>
                <ul className="comment-list">
                    {commentsList}
                </ul>
            </div>
          );
    }
}
 
export default CommentList;