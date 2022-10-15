import React, { useEffect, useState } from 'react'

export default function Body(props){
  const { fields } = props;
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    setTitle(fields.title);
    setDescription(fields.description);
  }, []);

    return(
        <div>
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
        </div>
    )
}