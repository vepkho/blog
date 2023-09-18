import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-24">
      <h1 className="text-7xl font-extrabold">Hello I&apos;m Vepkho</h1>
      <p className="mt-3 text-xl">Hello cjeck out my projects</p>
      <h2 className="mt-24 font-bold text-3xl">my projs</h2>
      {projects.map((project) => (
        <div key={project._id} className="border border-gray-500 rouned-lg">
          <div>{project.name}</div>
        </div>
      ))}
    </div>
  );
}
