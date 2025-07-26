"use client";

import { ChangeEvent, useCallback, useState, useEffect } from "react";
import { Upload, X } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImagePickerProps {
  defaultImage?: string | null;
  onImageChange: (file: File | null) => void;
  ratio?: number;
  placeholder?: string;
  className?: string;
}

export const ImagePicker = ({
  defaultImage,
  onImageChange,
  ratio = 16 / 9,
  placeholder = "Upload an image",
  className,
}: ImagePickerProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(defaultImage ?? null);

  useEffect(() => {
    if (defaultImage !== undefined) {
      setImageUrl(defaultImage);
    }
  }, [defaultImage]);

  const handleImageUpload = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageUrl(URL.createObjectURL(file));
    onImageChange(file);
  }, [onImageChange]);

  const handleRemoveImage = useCallback(() => {
    setImageUrl(null);
    onImageChange(null);
  }, [onImageChange]);

  return (
    <div className={className}>
      <AspectRatio ratio={ratio} className="bg-muted rounded-md overflow-hidden">
        {imageUrl ? (
          <div className="relative w-full h-full">
            <img
              src={imageUrl}
              alt="Uploaded image"
              className="object-cover h-full w-full"
            />
            <button
              onClick={handleRemoveImage}
              className="absolute z-10 p-2 rounded-full bg-destructive/80 hover:bg-destructive transition-colors right-3 top-3"
            >
              <X className="h-4 w-4 text-destructive-foreground" />
            </button>
          </div>
        ) : (
          <label className="w-full h-full flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-muted/80 transition-colors">
            <input
              type="file"
              className="sr-only"
              onChange={handleImageUpload}
              accept="image/*"
            />
            <div className="flex flex-col items-center gap-1">
              <Upload className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-center px-4 text-muted-foreground">
                {placeholder}
              </span>
            </div>
          </label>
        )}
      </AspectRatio>
    </div>
  );
};
