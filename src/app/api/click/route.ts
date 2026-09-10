import { NextResponse } from "next/server";

// 링크별 클릭 수 집계 (임시 스텁)
// TODO: MongoDB Atlas 연결 (다음 단계) — 아래 인메모리 카운터를 DB 업데이트로 교체.
// 주의: 인메모리 카운터는 서버리스/재시작 시 초기화되며 여러 인스턴스 간 공유되지 않음. 임시 확인용.
const counts = new Map<string, number>();

export async function POST(request: Request) {
  const { id } = await request.json().catch(() => ({ id: undefined }));

  if (typeof id !== "string" || id.length === 0) {
    return NextResponse.json({ error: "invalid id" }, { status: 400 });
  }

  const next = (counts.get(id) ?? 0) + 1;
  counts.set(id, next);
  console.log(`[click] ${id} -> ${next}`);

  return NextResponse.json({ id, count: next });
}
