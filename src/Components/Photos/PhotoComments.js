import React from 'react'
import { UserContext } from '../../UserStorage'
import PhotoCommentsForm from './PhotoCommentsForm';
import { ListaComments } from './styles';

function PhotoComments(props) {
    const [comments, setComments] = React.useState(() => props.comments);
    const { data } = React.useContext(UserContext);

    console.log('cooooooooooooomenttts', data);

    return (
        <>

            <ListaComments>
                {comments.map(comment => <li key={comment.id}>
                    <strong>{comment.user_id.name} : </strong>
                    <span>{comment.comment}</span>
                </li>)}
            </ListaComments>
            {data.token && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </>
    )
}

export default PhotoComments;
