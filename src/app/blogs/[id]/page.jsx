import blogs from "../../../../data/blogs";

// the rest is JS

export default async function SingleBlog({ params }) {
  // params.id er moddhe amra particular blog object ta pabo
  const { id } = await params;
  const blog = blogs.find((thatBlog) => thatBlog.id === id);
  const { title, description } = blog;

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="mt-6">{description}</p>
    </div>
  );
}
