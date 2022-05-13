import Link from "next/link";
import React from "react";
import { GetStaticProps } from "next";

const data = ["post-1","post-2", "post-3"]

interface FirstPostTypes {
  post: string
}

function FirstPost(props:FirstPostTypes) {
  return (
    <>
      <h1 className="text-4xl text-center font-bold my-4 text-blue-500">{props.post}</h1>

      <div>
        <Link href="/">
          <a className="text-blue-500 m-4 hover:text-blue-300">home</a>
        </Link>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = data.map(post => {
    return { params: { id: post } }
  })
return {
  paths,
  fallback: false
}
} 

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = data.find(post => post === params?.id)                         
  return {
    props: {
      post,
    }
  }
}

export default FirstPost


