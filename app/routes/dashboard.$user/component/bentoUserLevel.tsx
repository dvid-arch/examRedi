const BentoGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[500px] gap-4">
        <div className="bg-blue-200 p-6 rounded-lg shadow-md col-span-3">
          <h2 className="text-xl font-bold mb-2">Estimated Score</h2>
          <p className="text-6xl text-black/80 font-semibold">50/100</p>
          <p>This box spans two rows on larger screens and two columns on medium screens.</p>
        </div>
        <div className="bg-green-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Box 2</h2>
          <p>This is a standard box that adapts to the grid layout.</p>
        </div>
        <div className="bg-yellow-200 p-6 rounded-lg shadow-md col-span-2">
          <h2 className="text-xl font-bold mb-2">Box 3</h2>
          <p>Another standard box that fits into the responsive grid.</p>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;