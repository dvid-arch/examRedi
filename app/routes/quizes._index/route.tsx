import { Link } from "@remix-run/react";
import { quizData } from "~/data/quizData";

export default function QuizzesIndexPage() {
  const categories = Object.keys(quizData);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Quiz Categories</h1>
      <p className="mb-6">Select a category to view quizzes.</p>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{category}</h2>
            <Link
              to={`/quizes/${category.toLowerCase()}`}
              className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Quizzes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
