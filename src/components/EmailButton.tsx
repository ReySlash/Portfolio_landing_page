"use client";

import Image from "next/image";
import copyClipboard from "../assets/copyClipboardIcon.svg";
import copiedClipboard from "../assets/copiedClipboardIcon.svg";
import { useEffect, useRef, useState } from "react";

function EmailButton() {
  const [copied, setCopied] = useState(false);
  const resetCopiedTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetCopiedTimeoutRef.current !== null) {
        window.clearTimeout(resetCopiedTimeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("rcarmenate95@gmail.com");
    setCopied(true);

    if (resetCopiedTimeoutRef.current !== null) {
      window.clearTimeout(resetCopiedTimeoutRef.current);
    }

    resetCopiedTimeoutRef.current = window.setTimeout(() => {
      setCopied(false);
      resetCopiedTimeoutRef.current = null;
    }, 5000);
  };
  return (
    <button
      type="button"
      onClick={() => {
        void handleCopyEmail();
      }}
      className="flex flex-1 items-center justify-center text-center rounded-xl border border-gray-700 bg-gray-900 px-5 py-3 font-semibold  transition-all duration-150 hover:scale-[1.02] hover:cursor-pointer hover:border-gray-500 hover:bg-gray-800 active:scale-[0.98]"
      aria-label={
        copied ? "Email copied to clipboard" : "Copy email to clipboard"
      }
    >
      <Image
        className="h-5 w-5 brightness-0 invert"
        src={copied ? copiedClipboard : copyClipboard}
        alt="Copy icon"
        width={20}
        height={20}
        unoptimized
      />
      {copied ? "Copied!" : "Copy Email"}
    </button>
  );
}

export default EmailButton;
