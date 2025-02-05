function Categories({ categories }) {
  return (
    <div className="m-5 flex justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category._id}
          className="px-3 py-2 font-bold hover:text-white hover:bg-black"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
