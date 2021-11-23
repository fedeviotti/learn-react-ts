import * as React from 'react';
import {PhotoProps} from "./photos";

const Photo: React.FC<{photos: PhotoProps[] | undefined, isLoaded: boolean, title: string }> = ({photos, isLoaded, title}) => {
  console.log(photos, '<<< photos');

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <h2>{title}</h2>
        <div style={{display:"flex", alignItems: "flex-end", flexWrap: "wrap"}}>
          {photos?.map((photo: PhotoProps) => (
            <div style={{display: "flex", flexDirection: "column", padding: "5px"}} key={photo.id}>
              <label style={{ width: "200px"}}>{photo.title}</label>
              <img style={{ width: "200px"}} src={photo.thumbnailUrl}/>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export {Photo};
