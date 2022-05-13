import React from "react";
import Link from "next/link";

function App() {
  return (
    <>
      <h1 className="text-4xl text-blue-500 text-center my-4 font-bold">Ola mundo</h1>
      <div className="text-right">
      <Link href="/posts/post-1">
        <a className="text-blue-500 text-right hover:text-blue-300 m-4">first post</a>
      </Link>
    </div>
    </>
  )
}

export default App
