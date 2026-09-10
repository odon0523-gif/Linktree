"use client";

import type { LinkItem } from "@/config/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  // 클릭 수 집계 (fire-and-forget) — 링크 이동은 그대로 진행된다.
  function trackClick() {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: link.id }),
      keepalive: true,
    }).catch(() => {
      // 집계 실패는 무시 (링크 이동을 방해하지 않음)
    });
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackClick}
      className="block w-full rounded-full border border-gray-300 bg-white px-6 py-4 text-center text-base font-medium text-gray-800 transition hover:border-gray-400 hover:bg-gray-50 active:scale-[0.99]"
    >
      {link.title}
    </a>
  );
}
