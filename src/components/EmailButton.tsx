"use client";

import Image from "next/image";
import copyClipboard from "../assets/copyClipboardIcon.svg";
import copiedClipboard from "../assets/copiedClipboardIcon.svg";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

function EmailButton() {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const resetCopiedTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetCopiedTimeoutRef.current !== null) {
        window.clearTimeout(resetCopiedTimeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    if (resetCopiedTimeoutRef.current !== null) {
      window.clearTimeout(resetCopiedTimeoutRef.current);
      resetCopiedTimeoutRef.current = null;
    }

    try {
      await navigator.clipboard.writeText("rcarmenate95@gmail.com");
      setCopied(true);
      setCopyFailed(false);

      resetCopiedTimeoutRef.current = window.setTimeout(() => {
        setCopied(false);
        resetCopiedTimeoutRef.current = null;
      }, 5000);
    } catch {
      setCopied(false);
      setCopyFailed(true);

      resetCopiedTimeoutRef.current = window.setTimeout(() => {
        setCopyFailed(false);
        resetCopiedTimeoutRef.current = null;
      }, 5000);
    }
  };
  return (
    <Button
      type="button"
      onClick={() => {
        void handleCopyEmail();
      }}
      variant="outline"
      size="lg"
      className="w-full min-h-12 rounded-xl border-gray-700 bg-gray-900 px-5 py-3 font-semibold text-white transition-transform duration-150 hover:scale-[1.02] hover:border-gray-500 hover:bg-gray-800 hover:text-white active:scale-[0.98]"
      aria-label={
        copied
          ? "Email copied to clipboard"
          : copyFailed
            ? "Unable to copy email to clipboard"
            : "Copy email to clipboard"
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
      {copied ? "Copied!" : copyFailed ? "Copy Failed" : "Copy Email"}
    </Button>
  );
}

export default EmailButton;
