"use client";
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

//BOTÓN PARA SUBIR ARCHIVOS
export const UploadButton = generateUploadButton<OurFileRouter>();
//AREA DRAG AND DROP
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
