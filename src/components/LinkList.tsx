import { links } from "@/config/profile";
import LinkCard from "./LinkCard";

export default function LinkList() {
  return (
    <div className="mt-8 flex w-full flex-col gap-3">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}
