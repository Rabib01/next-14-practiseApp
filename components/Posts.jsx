const fetchPosts = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, 3000);
  });
  return "Here are my posts";
};

export default async function Posts() {
  const posts = await fetchPosts();
  return (
    <div>
      <h1 className="text-5xl">{posts}</h1>
    </div>
  );
}
