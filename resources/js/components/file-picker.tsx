"use client";

import { ChangeEvent, useCallback, useState, useEffect } from "react";
import { Upload, X, File as FileIcon, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilePickerProps {
  defaultFile?: string | null;
  onFileChange: (file: File | null) => void;
  placeholder?: string;
  className?: string;
}

export const FilePicker = ({
  defaultFile,
  onFileChange,
  placeholder = "Upload a file",
  className,
}: FilePickerProps) => {
  const [fileUrl, setFileUrl] = useState<string | null>(defaultFile ?? null);
  const [fileName, setFileName] = useState<string | null>(null);

  useEffect(() => {
    if (defaultFile !== undefined) {
      setFileUrl(defaultFile);
    }
  }, [defaultFile]);

  const handleFileChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setFileUrl(null);
    onFileChange(file);
  }, [onFileChange]);

  const handleRemoveFile = useCallback(() => {
    setFileUrl(null);
    setFileName(null);
    onFileChange(null);
  }, [onFileChange]);

  return (
    <div className={className}>
      <div className="bg-muted rounded-md overflow-hidden flex items-center justify-center p-4 h-10">
        {fileUrl ? (
          <div className="relative w-full h-full flex items-center justify-between">
            <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
              <div className="flex items-center gap-2 cursor-pointer">
                <Eye className="h-6 w-6 text-muted-foreground" />
                عرض الملف المرفق
              </div>
            </a>
            <button
              onClick={handleRemoveFile}
              className="p-2 rounded-full bg-destructive/80 hover:bg-destructive transition-colors"
            >
              <X className="h-4 w-4 text-destructive-foreground" />
            </button>
          </div>
        ) : fileName ? (
          <div className="relative w-full h-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileIcon className="h-6 w-6 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{fileName}</span>
            </div>
            <button
              onClick={handleRemoveFile}
              className="p-2 rounded-full bg-destructive/80 hover:bg-destructive transition-colors"
            >
              <X className="h-4 w-4 text-destructive-foreground" />
            </button>
          </div>
        ) : (
          <label
            htmlFor="file_path_input"
            className={cn(
              "bg-muted hover:bg-muted/80 flex h-10 w-full cursor-pointer flex-row items-center justify-start rounded-lg border-2 border-dashed transition-colors",
            )}
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <Upload className="text-muted-foreground h-5 w-5" />
              <p className="text-muted-foreground text-sm">
                اضغط لتحميل الملف
              </p>
            </div>
            <input
              id="file_path_input"
              type="file"
              accept="file/*"
              multiple={false}
              className="hidden"
              onChange={handleFileChange}
              value={""} // Clear value to allow re-uploading same file
            />
          </label>
        )}
      </div>
    </div>
  );
};
