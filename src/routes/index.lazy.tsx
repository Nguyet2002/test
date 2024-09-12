import HomePage from "@/pages/home/Home";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: HomePage,
});
