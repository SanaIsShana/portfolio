import { useEffect, useRef } from "react"

interface MagnifiedImageProps {
  expand: boolean
  setExpand: (expand: boolean) => void
  image: string
}

export const MagnifiedImage = ({
  expand,
  setExpand,
  image,
}: MagnifiedImageProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        expand &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setExpand(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler)
    }
  }, [setExpand, expand])

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div
        ref={ref}
        className="flex transition ease-in-out duration-700 relative w-auto h-auto p-10 max-w-3xl cursor-pointer"
      >
        <img src={image} className="p-2" onClick={() => setExpand(false)} />

        <button onClick={() => setExpand(false)}></button>
      </div>
    </div>
  )
}
