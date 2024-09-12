import { getPosts } from "@/services/supabase";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  // Query the posts
  // const { data: posts } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: async () => {
  //     return await getPosts();
  //   },
  // });

  // console.log("posts", posts);
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
