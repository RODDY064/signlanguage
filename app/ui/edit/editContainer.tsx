"use client";

import Edit from "./edit";
import { useEdit } from "./editContext";

export default function EditContainer() {

    const { edit } = useEdit()


  return (
    <>
        {edit && <Edit/>}
    </>
  )
}
