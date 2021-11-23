import * as React from 'react';
import {useEffect} from "react";
import {Photo} from "./photo";

export interface PhotoProps {
  id: number,
  albumId: number,
  thumbnailUrl: string,
  title: string,
  url: string,
}

const Photos: React.FC = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [photos, setPhotos] = React.useState<PhotoProps[] | undefined>(undefined);
    const [title, setTitle] = React.useState<string>('Disco');

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`)
        .then(res => res.json())
        .then(result => {
          setIsLoaded(true);
          setPhotos(result);
        }).catch(err => {
          setIsLoaded(true);
          setError(err);
        });
    }, [])

    setTimeout(() => {
      setTitle('Disco 33 giri');
    }, 1000);

    if (error) {
      return <div>Error: {error}</div>;
    } else {
      return (
        <Photo photos={photos} isLoaded={isLoaded} title={title} />
      );
    }

}

export {Photos};
