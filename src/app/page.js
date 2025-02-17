"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex space-x-4">
        {/* Button for Calculator */}
        <Link href="/calculator" legacyBehavior>
          <a className="bg-blue-500 text-white px-4 py-2 rounded">
            Go to Calculator
          </a>
        </Link>

        {/* Button for Notes */}
        <Link href="/stickynotes" legacyBehavior>
          <a className="bg-green-500 text-white px-4 py-2 rounded">
            Go to Notes
          </a>
        </Link>
      </div>
    </div>
  );
}
