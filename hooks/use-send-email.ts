"use client";

import { useMutation } from "@tanstack/react-query";

async function sendEmail(data: unknown) {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send email");
  }

  return res.json();
}

export function useSendEmail() {
  return useMutation({
    mutationFn: sendEmail,
  });
}
