import { useState } from "react";
import Link from "next/Link";
import Head from "next/head";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Develop. Preview. Ship. 🚀" />
      {/* <h1 className={styles.title}> */}
      <h1>
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
