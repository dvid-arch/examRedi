import { Link, useLoaderData, useParams } from "@remix-run/react";
import { quizData } from "~/data/quizData";
import type { LoaderFunction } from "@remix-run/node";

// Define the valid category keys
type Category = keyof typeof quizData;

export const loader: LoaderFunction = async ({ params }) => {
  const { category } = params;

  // Ensure the category is a valid key of quizData
  if (!category || !(category.charAt(0).toUpperCase() + category.slice(1) in quizData)) {
    throw new Response("Category not found", { status: 404 });
  }

  const quizzes = quizData[category.charAt(0).toUpperCase() + category.slice(1) as Category];

  return { quizzes };
};

export default function CategoryPage() {
  const { quizzes } = useLoaderData<{ quizzes: typeof quizData[keyof typeof quizData] }>();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Quizzes</h1>
      <div className="space-y-4">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{quiz.title}</h2>
            <p className="text-gray-600">{quiz.description}</p>
            <Link
              to={`/quizzes/${quiz.id}`}
              className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Start Quiz
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
