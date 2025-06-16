"use client";

import axios from "axios";
import { useState } from "react";

export default function CreateBlogForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, content, tags } = formData;

    if (!title || !content || !tags) {
      alert("Please fill all the details");
      return;
    }

    try {
      const response = await axios.post("/api/createpost", {
        title,
        content,
        tags,
      });

      console.log("Post created:", response.data);
      alert("Post published successfully!");
      setFormData({ title: "", content: "", tags: "" }); // Clear form
    } catch (err) {
      console.error("Error creating post:", err);
      alert("Failed to publish post");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Create a Blog Post
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Blog Title
            </label>
            <input
              type="text"
              placeholder="Enter blog title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Content
            </label>
            <textarea
              rows="8"
              placeholder="Write your blog content here..."
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              placeholder="e.g. tech, programming, life"
              value={formData.tags}
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value })
              }
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition"
            >
              Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
