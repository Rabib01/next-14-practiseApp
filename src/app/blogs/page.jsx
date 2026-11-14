import Link from "next/link";
import BlogItem from "../../../components/BlogItem";
import blogs from "../../../data/blogs";

export default function Blogs() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold text-amber-900">Blog Lists</h1>
      <div className="mt-6 p-4">
        {blogs.map((eachBlog) => (
          <Link href={`blogs/${eachBlog.id}`} key={eachBlog.id}>
            <BlogItem title={eachBlog.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}
