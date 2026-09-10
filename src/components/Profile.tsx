import Image from "next/image";
import { profile } from "@/config/profile";

export default function Profile() {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={profile.avatarUrl}
        alt={`${profile.name} 프로필 사진`}
        width={128}
        height={128}
        priority
        className="h-32 w-32 rounded-full object-cover ring-1 ring-gray-200"
      />
      <h1 className="mt-5 text-xl font-semibold text-gray-900">
        {profile.name}
      </h1>
      <p className="mt-1 text-sm text-gray-500">{profile.bio}</p>
    </div>
  );
}
