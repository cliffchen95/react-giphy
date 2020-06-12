import React from 'react';

function GifContainer(props) {
  return (
    props.gifList.map((gif, index) => {
      return <div className="img-container"><img src={gif.images.original.url} key={index} /></div>
    })
  )
}


export default GifContainer;