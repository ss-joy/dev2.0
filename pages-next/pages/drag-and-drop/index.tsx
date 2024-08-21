import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useCallback, useState, useRef } from "react";
import { useDropzone } from "react-dropzone";

export default function MyDropzone() {
  const [files, setFiles] = useState<File[]>([]);

  const videoRef = useRef<HTMLVideoElement>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) => {
        const preview = URL.createObjectURL(file);
        return Object.assign(file, { preview });
      })
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
  });

  const upload = async () => {
    if (files.length === 0) return;

    const formData = new FormData();
    formData.append("video", files[0]);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="mx-auto w-[80%] border">
      <section
        {...getRootProps({
          className: "bg-teal-600 size-[500px]",
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </section>

      <section className="w-full border-4 p-4">
        {files.length > 0 && (
          <div className="flex flex-col items-center gap-4">
            <video
              ref={videoRef}
              className="w-[300px] h-[300px] object-cover"
              src={files[0].preview}
              controls
            />
          </div>
        )}
      </section>

      <Button onClick={upload}>Submit</Button>
    </div>
  );
}
