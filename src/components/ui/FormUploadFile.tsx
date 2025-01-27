import React, { useState } from "react";
import { InfoIcon } from "@/common/icons";

type FileUploadComponentProps = {
  title: string;
  onFileDrop: (files: File[]) => void;
  placeholder?: string;
  allowMultiple?: boolean;
  acceptedFormats?: string[];
};

const FormUploadFile = ({
  title,
  onFileDrop,
  placeholder = "Drop file or click here",
  allowMultiple = true,
  acceptedFormats = [],
}: FileUploadComponentProps) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const filesArray = Array.from(e.dataTransfer.files);

      const validFiles = filterFilesByFormat(filesArray);

      const newFiles = allowMultiple
        ? validFiles
        : [validFiles[0]].filter(Boolean);

      setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
      onFileDrop(newFiles);
      e.dataTransfer.clearData();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);

      const validFiles = filterFilesByFormat(filesArray);

      const newFiles = allowMultiple
        ? validFiles
        : [validFiles[0]].filter(Boolean);

      setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
      onFileDrop(newFiles);
    }
  };

  const filterFilesByFormat = (files: File[]) => {
    if (acceptedFormats.length === 0) return files;

    return files.filter((file) =>
      acceptedFormats.some((format) => file.name.toLowerCase().endsWith(format))
    );
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <InfoIcon />
          <div className="text-white font-medium ml-2">{title}</div>
        </div>
      </div>
      <div
        className={`flex items-center justify-center w-full text-white-400 border-2 border-dashed rounded-lg py-10 cursor-pointer ${
          isDragActive ? "border-primary-600" : "border-gray-400"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <input
          id="fileInput"
          type="file"
          className="hidden"
          multiple={allowMultiple}
          accept={acceptedFormats.join(",")}
          onChange={handleFileSelect}
        />
        <p className="text-white-400">{placeholder}</p>
      </div>

      {/* Lista de archivos subidos */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <h4 className="text-white font-medium mb-2">Uploaded Files:</h4>
          <ul className="list-disc list-inside text-white-400">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="flex items-center justify-between">
                <span>{file.name}</span>
                <button
                  className="text-red-500 hover:underline ml-4"
                  onClick={() => removeFile(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FormUploadFile;
