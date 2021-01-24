import React, { useState } from 'react';

const Page = () => {
  const [name, setName] = useState(null);

  return name ? <p>{`This page belongs to ${name}`}</p> : <p>loading...</p>;
};

export default Page;