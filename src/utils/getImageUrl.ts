export const getImageUrl = (url: string | undefined) => {
  if (process.env.NET_PUBLIC_IMAGE_HOST) {
    return `${process.env.NET_PUBLIC_IMAGE_HOST}${url}`
  }

  if (url) {
    return url
  }

  return null
}
