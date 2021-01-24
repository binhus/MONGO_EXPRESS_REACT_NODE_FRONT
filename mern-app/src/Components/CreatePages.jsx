import React, { useEffect, useState } from 'react';

const CreatePages = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState(null);

  const handleClick = async (name) => {
    setMessage("Wait...")
    const request = await fetch('https://mern-api-robson.herokuapp.com/', {
      mode: "cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "http://localhost:3000/"
      },
      body: JSON.stringify(name),
    })
      .then((Response) => Response.json())
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err));
      if (request.message) {
        setMessage(request.message);
      }
  };
  return (
    <div>
      <p>Create a page!</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="button" onClick={() => handleClick({name})}>
        Submit!
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreatePages;
