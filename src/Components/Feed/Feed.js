import React, { useEffect, useState } from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';


const Feed = ({ user }) => {
    const [modalPhoto, setModalPhoto] = React.useState(null);
    const [pages, setPages] = useState([1]);
    const [infinite, setInfinite] = useState(true);


    useEffect(() => {
        let wait = false;
        function infiniteScroll() {

            if (infinite) {

                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;

                const chegouNoFimDoScroll = scroll > height * 0.60;
                if (chegouNoFimDoScroll && !wait) {
                    setPages((pages) => [...pages, pages.length + 1]);
                    wait = true;

                    setTimeout(() => {
                        wait = false;
                    }, 1000);
                }
            }
        }

        window.addEventListener('wheel', infiniteScroll);
        window.addEventListener('scroll', infiniteScroll);

        return () => {
            window.removeEventListener('wheel', infiniteScroll);
            window.removeEventListener('scroll', infiniteScroll);
        }
    }, [infinite, pages])

    return (
        <div>
            {modalPhoto &&
                < FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
            }

            {pages.map((page) => (
                <FeedPhotos
                    key={page}
                    page={page}
                    user={user}
                    setInfinite={setInfinite}
                    setModalPhoto={setModalPhoto}
                />
            ))}
        </div>
    )
}

export default Feed;

