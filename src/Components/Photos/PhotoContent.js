import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Img, Details, Atributes } from './styles';
import PhotoComments from './PhotoComments';

function PhotoContent({ data }) {

    const { photoId, userComments } = data;

    console.log('daa,snkdnkwndwmndmw', userComments);
    // console.log('photoid', data.photoId);

    if (!photoId) return null;
    return (
        <Container>
            <Img>
                <img src={`http://localhost:3333/files/${photoId.photo}`} alt={photoId.nome} />
            </Img>

            <Details>
                <div>

                    <p>
                        <Link to={`/perfil/${photoId.user_id.name}`} >@{photoId.user_id.name}</Link>
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
