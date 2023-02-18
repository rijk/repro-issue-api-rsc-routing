import Link from "next/link";

export default function Page() {
	return (
    <div>
      <b>Root from app directory</b><br />
      <Link href="/api/get-next-lesson">Continue learning</Link>
    </div>
  );
}