"use client";

import { useMutation } from "@tanstack/react-query";

async function sendEmailConsultation(data: unknown) {
  const res = await fetch("/api/send-email-consultation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send consultation email");
  }

  return res.json();
}

export function useSendEmailConsultation() {
  return useMutation({
    mutationFn: sendEmailConsultation,
  });
}