import React, { useEffect, useState } from "react";
import Axios from "axios";
import { CheckCircleIcon } from "@heroicons/react/outline";

const Downloader = ({ files = [], remove }) => {
    return (
        <div className="absolute bottom-5 right-3  w-96 ">
            <div className="border rounded">
                <div className="p-2 rounded-t bg-primary text-white">File Downloader</div>
                <ul className="space-y-1">
                    {files.map((file, idx) => (
                        <DownloadItem
                            key={idx}
                            removeFile={() => remove(file.downloadId)}
                            {...file}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export const DownloadItem = ({ name, file, filename, removeFile }) => {
    const [downloadInfo, setDownloadInfo] = useState({
        progress: 0,
        completed: false,
        total: 0,
        loaded: 0,
    });

    useEffect(() => {
        const options = {
            onDownloadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;

                setDownloadInfo({
                    progress: Math.floor((loaded * 100) / total),
                    loaded,
                    total,
                    completed: false,
                });
            },
        };

        Axios.get(file, {
            responseType: "blob",
            ...options,
        }).then(function (response) {
            console.log(response);

            const url = window.URL.createObjectURL(
                new Blob([response.data], {
                    type: response.headers["content-type"],
                })
            );

            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();

            setDownloadInfo((info) => ({
                ...info,
                completed: true,
            }));

            setTimeout(() => {
                removeFile();
            }, 4000);
        });
    }, []);

    const formatBytes = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

    return (
        <div>
            <div className="px-2 flex items-center justify-between w-full">
                <div className="d-inline font-weight-bold text-truncate">{name}</div>
                <div className="pl-2">
                    <p className="text-xs">

                        {downloadInfo.loaded > 0 && (
                            <>
                                <span className="text-green-500">
                                    {formatBytes(downloadInfo.loaded)}
                                </span>
                                / {formatBytes(downloadInfo.total)}
                            </>
                        )}
                        {downloadInfo.loaded === 0 && <p>Initializing...</p>}
                    </p>
                </div>
            </div>
            {/* <div className="col-12 mt-2">
          <ProgressBar
            variant="success"
            now={downloadInfo.progress}
            striped={true}
            label={`${downloadInfo.progress}%`}
          />
        </div> */}

            {downloadInfo.completed &&
                <div className="text-sm ml-2 text-green-500 flex space-x-0.5">
                    <p>Completed</p>
                    <CheckCircleIcon className="w-5" />
                </div>
                }
        </div>


    );
};

export default Downloader;
