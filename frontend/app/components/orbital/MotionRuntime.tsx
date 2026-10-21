"use client";
import { useEffect } from "react";
import { setupMotion } from "./motion";
export function MotionRuntime() {
 useEffect(() => setupMotion(), []);
 return null;
}
