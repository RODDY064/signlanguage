"use client"

export default function Vote() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:justify-end my-10">
        <p className="font-medium">Please vote </p>
        <div className="flex gap-4 items-center">
            <div className="w-32 px-6 h-10 bg-green-100/70 rounded-[6px] cursor-pointer flex items-center justify-center">
                <p className="text-green-500">Correct</p>
            </div>
            <div className="w-32 px-6 h-10 bg-red-100/70 rounded-[6px] cursor-pointer flex items-center justify-center">
                <p className="text-red-500">Wrong</p>
            </div>
        </div>
    </div>
  )
}
