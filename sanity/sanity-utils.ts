import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "uv8r7bnr",
    dataset: "production",
    apiVersion: "2023-09-18",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt, 
        name,
        "slug": slug.current,
        "image": image.asets->url,
        url,
        content
    }`
  );
}
