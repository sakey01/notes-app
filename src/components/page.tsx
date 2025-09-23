import { useState } from "react";


const Page = () => {
    const [isEmpty, setIsEmpty] = useState<boolean>(true);

  return (
    <div className="flex items-center justify-center w-full text-white bg-gray-900">
        {isEmpty ? <div className="text-gray-200 capitalize">No notes</div> : ""}
    </div>
  )
}
export default Page;
