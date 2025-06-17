'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function SinglePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/posts/${id}`);
        setPost(res.data.post);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-xl">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p className="text-xl text-red-400">Post not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto bg-gray-800 shadow-lg rounded-xl p-10">
        <h1 className="text-5xl font-extrabold mb-6 text-indigo-400">{post.title}</h1>

        <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">
          Tags: <span className="text-indigo-300">{post.tags}</span>
        </p>

        <hr className="border-gray-700 mb-6" />

        <p className="text-lg leading-relaxed whitespace-pre-wrap text-gray-200">
          {post.content}
        </p>

        <div className="mt-10 text-right">
          <a href="/posts" className="inline-block text-indigo-400 hover:text-indigo-300 underline">
            ← Back to all posts
          </a>
        </div>
      </div>
    </div>
  );
}
