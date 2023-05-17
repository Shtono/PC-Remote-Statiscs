import { useEffect, useMemo, useState } from "react"
import { Modal, Stack, Box } from "@mui/material"
import { allGifs, gifsArray } from "assets/gif"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"

function ImageWrapper({ image }: any) {
  return (
    <div
      style={{
        border: "1px solid wheat",
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
    ></div>
  )
}

const ImageWrapper2 = ({ image }: any) => {
  return (
    <Box
      style={{
        // border: "1px solid wheat",
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "50px",
        width: "50px",
      }}
    ></Box>
  )
}

const iconStyles = {
  color: "#FFFFFF",
  fontSize: 48,
}

function ImageContainer({
  images,
  setImage,
}: {
  images: string[]
  setImage: any
}) {
  return (
    <Stack
      width={1}
      height={1}
      gap={2}
      flexWrap="wrap"
      direction="row"
      justifyContent="start"
      alignItems="flex-start"
      alignContent="flex-start"
      overflow="scroll"
      sx={{ border: "green solid 1px", flexBasis: "auto" }}
    >
      {images.map((gif, i) => (
        <Box key={gif} onClick={() => setImage(i)}>
          <ImageWrapper2 image={gif} />
        </Box>
      ))}
    </Stack>
  )
}

const GifSelect = ({ open, onClose, setImage }: any) => {
  const [currentGif, setCurrentGif] = useState<number>(0)

  useEffect(() => {
    setImage(gifsArray[currentGif])
  }, [currentGif])

  const prevGifs = useMemo(() => {
    return gifsArray.slice(0, currentGif)
  }, [currentGif])

  const nextGifs = useMemo(() => {
    return gifsArray.slice(currentGif + 1)
  }, [currentGif])

  const handleNext = () => {
    currentGif === gifsArray.length - 2
      ? setCurrentGif(0)
      : setCurrentGif((prev) => prev + 1)
  }

  const handlePrev = () => {
    currentGif === 0
      ? setCurrentGif(gifsArray.length - 2)
      : setCurrentGif(currentGif - 1)
  }
  return (
    <Modal open={open} onClose={onClose}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          top: "20%",
          bottom: "20%",
          left: "20%",
          right: "20%",
          border: "1px solid red",
          backgroundColor: "#000000",
        }}
      >
        <Stack direction="row" width={1} height={1} alignItems="center">
          <ChevronLeft onClick={handleNext} sx={iconStyles} />
          <ImageWrapper image={allGifs[currentGif]} />
          <ChevronRight onClick={handlePrev} sx={iconStyles} />
        </Stack>
        <Box height={50}>
          <ImageContainer images={gifsArray} setImage={setCurrentGif} />
        </Box>
      </Stack>
    </Modal>
  )
}

export default GifSelect
