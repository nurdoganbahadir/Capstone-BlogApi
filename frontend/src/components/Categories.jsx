function Categories({ categories, setCategory }) {
  return (
    <div className="m-5 flex justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category._id}
          className="px-3 py-2 font-bold hover:text-white hover:bg-black"
          onClick={() => setCategory(category._id)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
