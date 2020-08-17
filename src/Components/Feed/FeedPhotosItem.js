import React from 'react';
import Image from '../Partials/Image';
import styles from './styles.module.css';


function FeedPhotosItem({ photo, setModalPhoto }) {


    function handleClick() {
        setModalPhoto(photo);
    }

    return (
        <li className={styles.photo} onClick={handleClick}>
            <Image src={` http://192.168.1.6:3333/files/${photo.photo}`} alt={photo.nome} />
            <span className={styles.visualizacao}>{photo.acessos}</span>
        </li>
    )
}

export default FeedPhotosItem
