import React, { useEffect, useState } from 'react';

const Page = ({ match }) => {
  const { name } = match.params;
  const [displayedName, setDisplayedName] = useState(null);
  const [message, setMessage] = useState(null);

  const pageHandle = async (param) => {
    const page = await fetch(`https://mern-api-robson.herokuapp.com/${param}`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
      },
    })
      .then((result) => result.json())
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err));
    setDisplayedName(page.name);
    if (page.message) {
      setMessage(page.message);
    }
  };

  useEffect(() => {
    if (!displayedName) {
      pageHandle(name);
    }
  });

  return displayedName ? (
    <p>{`This page belongs to ${displayedName}`}</p>
  ) : (
    message ? <p>{message}</p> : <p>Loading...</p>
  );
};

export default Page;
