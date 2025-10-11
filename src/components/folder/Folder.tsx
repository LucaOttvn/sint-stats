"use client";
import "./style.scss";
import React, {useState} from "react";
import Image from "next/image";
import {Folder} from "@/utils/interfaces";
import Link from "next/link";

interface FolderComponentProps {
  folder: Folder;
  className?: string;
}

export default function FolderComponent(props: FolderComponentProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="folderContainer">
      <div className={"folder " + props.className || ""} onClick={() => setOpen((prev) => !prev)}>
        <Image src="/icons/folder.svg" alt="Folder Icon" width={20} height={20} />
        <span>{props.folder.name}</span>
      </div>
      <div className="filesContainer">
        {(open && props.folder.files) && props.folder.files.map((file) => <Link key={"file" + file.name} href={`/home/lore/${props.folder.id}-${file.id}`} className="file" >{file.name}</Link>)}
        {(open && !props.folder.files) && <span>Empty folder</span>}
      </div>
    </div>
  );
}
