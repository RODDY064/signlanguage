"use client";

import Edit from "./edit";
import { useEdit } from "./editContext";
import Recorder from "./recoder";

export default function EditContainer() {

    const { edit, recorder } = useEdit()


  return (
    <>
        {edit.isActive && !recorder.isActive && <Edit/>}
        {/* {edit.isActive && recorder.isActive && <Recorder/>} */}
    </>
  )
}
