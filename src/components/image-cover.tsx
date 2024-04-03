import Image from 'next/image'

export function ImageCover({ url }: { url: string }) {
  return (
    <Image
      className="w-full h-full object-cover rounded-lg"
      src={url}
      width={0}
      height={0}
      sizes="100vw"
      alt=""
    />
  )
}
