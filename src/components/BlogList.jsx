'use client'

import Link from "next/link";

export default function BlogList(props) {
  console.log(props);

  return (
    <>
     <div className="min-h-screen bg-gray-900 py-10 px-4 text-white">
  <h1 className="text-4xl font-bold text-center mb-10 text-indigo-300">All Blog Posts</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {Array.isArray(props.post) &&
      props.post.map((i) => (
        <div
          key={i._id}
          className="bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold mb-2 text-indigo-400">{i.title}</h2>
          <p className="text-gray-400 text-sm mb-3">Tags: {i.tags}</p>
          <p className="text-gray-300 text-base line-clamp-3 overflow-hidden mb-4">
            {i.content}
          </p>
          <Link
            href={`/posts/${i._id}`}
            className="text-indigo-400 hover:text-indigo-300 font-medium underline"
          >
            Read more →
          </Link>
        </div>
      ))}
  </div>
</div>

    </>
  );
}
