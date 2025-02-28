import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

const posts = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack online shopping application with payment integration",
    technologies: ["python", "fastapi", "nextjs"],
    githubUrl: "https://github.com/username/ecommerce-platform",
    imageUrl:
      "https://blog.blesshost.com/wp-content/uploads/2017/07/ecommerce-1.png",
  },
  {
    id: "2",
    title: "AI Image Generator",
    description: "Generate custom images using machine learning algorithms",
    technologies: ["python", "tensorflow", "nextjs"],
    githubUrl: "https://github.com/username/ai-image-generator",
    imageUrl:
      "https://itbrief.com.au/uploads/story/2023/11/27/img-d320oqYWscvU8q8HLX0brOyX.webp",
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Productivity tool for organizing personal and team tasks",
    technologies: ["typescript", "react", "nodejs"],
    githubUrl: "https://github.com/username/task-manager",
    imageUrl:
      "https://www.officetimer.com/wp-content/uploads/2020/02/Untitled-design7.png",
  },
];

// ✅ Explicitly typing `params`
interface ProjectPageProps {
  params: { id: string };
}

const Page = ({ params }: ProjectPageProps) => {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10 my-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {post.title}
      </h1>

      <div className="w-full overflow-hidden rounded-xl shadow-md">
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      <div className="mt-6 space-y-4">
        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Category:</strong>
          <span className="ml-2 text-indigo-600 font-medium">{post.title}</span>
        </p>

        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Author:</strong>
          <span className="ml-2">{post.description}</span>
        </p>

        <p className="text-lg text-gray-700">
          <strong className="font-semibold text-gray-900">Views:</strong>
          <span className="ml-2">{post.technologies.join(", ")}</span>
        </p>

        <p className="text-lg text-gray-700 leading-relaxed border-t pt-4">
          {post.description}
        </p>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Page;
