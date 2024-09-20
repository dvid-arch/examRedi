import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ExamRedi" },
    { name: "Examination preparation app", content: "prepare for your exams" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      hey there
    </div>
  );
}


