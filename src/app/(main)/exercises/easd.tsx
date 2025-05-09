import { Spinner } from "@/config/theme.config";
import React from "react";

export default function Loading() {
  return <Spinner className="animate-spin size-40 text-accent-blue" />;
}
