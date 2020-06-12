import React from 'react';

function GifContainer(props) {
  return (
    props.gifList.map((gif, index) => {
      return <img src={gif.images.original.url} key={index} />
    })
  )
}


export default GifContainer;