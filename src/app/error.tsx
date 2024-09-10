/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { ApImage } from "@/components";
import "./globals.scss";

export default function Error(error: Error) {
  return <ApImage alt="Error page" src="/page/error.png" fullScreen />;
}
