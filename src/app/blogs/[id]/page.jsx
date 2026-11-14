import blogs from "../../../../data/blogs";

export function generateStaticParams() {
  {
    /**
     * params is a static array of objects :
     * [
     * {id:1 },
     * {id:2 }
     * ]
     */
  }
  return blogs.map((blog) => ({ id: String(blog.id) }));
}

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
