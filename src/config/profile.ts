// 프로필 · 링크 데이터 (하드코딩)
// 값을 수정한 뒤 저장하면 화면에 바로 반영됩니다.

export type Profile = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "홍길동",
  bio: "노력의 천재",
  avatarUrl: "/avatar.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "blog", title: "블로그", url: "https://example.com" },
  { id: "instagram", title: "Instagram", url: "https://instagram.com" },
];
