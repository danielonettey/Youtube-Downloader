import { CheckCircleIcon, DownloadIcon } from "@heroicons/react/outline";
import React from "react";
import { DownloadItem } from "../components/Downloader";
import useFileDownloader from "../hooks/useFileDownloader";


const files = [
    {
        name: "Photo 1",
        thumb:
            "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=427&q=80 427w",
        file:
            "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?rnd=" +
            Math.random(),
        filename: "photo-1.jpg",
    },
    {
        name: "Photo 2",
        thumb:
            "https://images.unsplash.com/photo-1604164388977-1b6250ef26f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80 401w",
        // file:
        //     "https://images.unsplash.com/photo-1604164388977-1b6250ef26f3?rnd=" +
        //     Math.random(),
        filename: "photo-2.jpg",
    },
    {
        name: "Photo 3",
        thumb:
            "https://images.unsplash.com/photo-1604264849633-67b1ea2ce0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 750w",
        file:
            "a" +
            Math.random(),
        filename: "photo-3.jpg",
    },
];


const Dashboard = () => {

    const [downloadFile, downloaderComponentUI] = useFileDownloader();

    const download = (file) => downloadFile(file);

    return (
        <div className="relative w-full h-screen">
            <div className="pt-20 text-center">
                <h2>File Downloader with progress bar in react</h2>
                <div className="grid grid-cols-3 mt-20">
                    {files.map((file, idx) => (
                        <div>
                            <div className="text-center" key={idx}>
                                <img className="w-3/4 mx-auto" src={file.thumb} />
                                <h5 className="card-title">{file.name}</h5>

                                <button className="flex items-center mx-auto" onClick={() => download(file)}>
                                    <p>Download</p>
                                    <DownloadIcon className="w-6 text-black" />
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {downloaderComponentUI}
        </div>
    );
};

export default Dashboard;
