import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Icon from "@/components/ui/Icon";

const DropZone = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
      console.log(files);
    },
  });

  return (
    <div>
      <div className="flex w-full flex-col items-center justify-center rounded-md border border-dashed border-secondary-500 py-[52px] text-center">
        {files.length === 0 && (
          <div {...getRootProps({ className: "dropzone" })}>
            <input className="hidden" {...getInputProps()} />
            <img src="/assets/images/svg/upload.svg" alt="" className="mx-auto mb-4" />
            {isDragAccept ? (
              <p className="text-sm text-slate-500 dark:text-slate-300">Drop the files here ...</p>
            ) : (
              <p className="text-sm text-slate-500 dark:text-slate-300">
                Drop files here or click to upload.
              </p>
            )}
          </div>
        )}
        <div className="flex space-x-4">
          {files.map((file, i) => {
            const isImage = file.type.startsWith("image/");

            return (
              <div key={i} className="mb-4 flex-none">
                {isImage ? (
                  <div className="mx-auto mt-6 h-[300px] w-[300px] rounded-md">
                    <img
                      src={file.preview}
                      alt=""
                      className="block h-full w-full rounded-md object-contain"
                      onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <Icon icon="heroicons-outline:document" width={48} />
                    <p className="text-sm text-slate-500 dark:text-slate-300">{file.name}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DropZone;
