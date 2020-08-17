import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Img, Details, Atributes } from './styles';
import PhotoComments from './PhotoComments';
import { useContext } from 'react';
import { UserContext } from '../../UserStorage';
import PhotoDelete from './PhotoDelete';

function PhotoContent({ dados }) {

    const { photoId, userComments } = dados;
    const { data } = useContext(UserContext);


    if (!photoId) return null;

    return (
        <Container>
            <Img>
                <img src={`http://192.168.1.6:3333/files/${photoId.photo}`} alt={photoId.nome} />
            </Img>

            <Details>
                <div>

                    <p>
                        {data.user && data.user.id === photoId.user
                            ? <PhotoDelete photo={photoId.id} />
                            : <Link to={`/perfil/${photoId.user_id.id}`} >@{photoId.user_id.name}</Link>
                        }
                        <span>{photoId.acessos}</span>

                    </p>
                    <h1 className="title">
                        <Link to={`/foto/${photoId.id}`}>{photoId.nome}</Link>
                    </h1>

                    <Atributes>
                        <li>KG : {photoId.peso}</li>
                        <li>Idade : {photoId.idade}</li>
                    </Atributes>

                </div>
                <PhotoComments id={photoId.id} comments={userComments} />

            </Details>

        </Container>
    )
}

export default PhotoContent
