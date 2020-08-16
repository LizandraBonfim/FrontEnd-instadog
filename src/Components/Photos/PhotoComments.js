import React from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../UserStorage'
import PhotoCommentsForm from './PhotoCommentsForm';
import { ListaComments } from './styles';
import useApi from '../../hooks/useApi';


function PhotoComments(props) {
    const [comments, setComments] = React.useState(() => props.comments);
    const { data } = React.useContext(UserContext);

    const { request } = useApi();

    console.log(`comments photocomments`, data);

    function handleDelete(i) {

        let dados = document.getElementById(i);
        if (dados)
            dados.innerHTML = 'Para excluir este comentário, dê um duplo clique!';

    }

    async function handleDoubleClick(ComentarioId, i) {
        if (comments[i].id === ComentarioId) {
            let dados = document.getElementById(i);
            dados.innerHTML = 'Comentário excluido';
            await request('delete', `comments/delete/${ComentarioId}`);
        }
    }



    return (
        <>

            <ListaComments>
                {comments.map((comment, index) =>
                    <li key={comment.id}>

                        <div id={index}>
                            <Link to={`/perfil/${comment.user}`} >
                                <strong>
                                    @{comment.user_id.name}:
                                </strong>
                            </Link>

                            <span>{comment.comment}</span>
                        </div>



                        {data.user && (

                            <div>

                                {comment.user === data.user.id
                                    ? <button
                                        onClick={() => handleDelete(comment.id, index)}
                                        onDoubleClick={() => handleDoubleClick(comment.id, index)}
                                        comentario={comment.id}
                                    >
                                    </button>
                                    : ""
                                }
                            </div>
                        )}
                    </li>)}
            </ListaComments>
            {data.token && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </>
    )

}

export default PhotoComments;
