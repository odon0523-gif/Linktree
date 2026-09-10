import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-5 py-12">
      <Profile />
      <LinkList />
    </main>
  );
}
