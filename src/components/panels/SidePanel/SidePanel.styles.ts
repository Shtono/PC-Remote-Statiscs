const iconButton = {
  color: "wheat",
}

const drawer = {
  ".MuiDrawer-paper": {
    borderTopLeftRadius: 38,
    borderBottomLeftRadius: 38,
    margin: "5px 0 5px 5px",
    backgroundColor: "transparent",
    height: 79,
  },
}

const buttonContainer = {
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: 200,
  transition: "width 1s",
  backgroundColor: "rgba(51,51,51,0.95)",
  "@keyframes test": {
    from: { width: 0 },
    to: { width: 200 },
  },
  animationName: "test",
  animationDuration: "0.3s",
}

const button = (active: boolean) => ({
  color: active ? "#39FF14" : "rgba(57,255,20,0.75)",
  fontWeight: active ? "bold" : "normal",
})

export default { iconButton, drawer, buttonContainer, button }
