
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Downloader from "../components/Downloader";

const useFileDownloader = () => {
  const [files, setFiles] = useState(() => []);

  const download = (file) =>
    setFiles((fileList) => [...fileList, { ...file, downloadId: uuid() }]);

  const remove = (removeId) =>
    setFiles((files) => [
      ...files.filter((file) => file.downloadId !== removeId),
    ]);

  return [
    (e) => download(e),
    files.length > 0 ? (
      <Downloader files={files} remove={(e) => remove(e)} />
    ) : null,
  ];
};

export default useFileDownloader;
