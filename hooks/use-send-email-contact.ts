"use client";

import { useMutation } from "@tanstack/react-query";

async function sendEmailContact(data: unknown) {
  const res = await fetch("/api/send-email-contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send contact email");
  }

  return res.json();
}

export function useSendEmailContact() {
  return useMutation({
    mutationFn: sendEmailContact,
  });
}