import UIElement from "assets/ui/round.png"

const styles = {
  containerMain: {
    width: 120,
    height: 120,
    backgroundSize: 'cover',
    position: 'relative',
    overflow: 'hidden',
  },
  rotatingBackground: {
    // border: '3px solid purple',
    borderRadius: '30%',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${UIElement})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    animation: 'rotation 10s infinite linear',
    '@keyframes rotation': {
      from: {
        transform: 'rotate(0deg)'
      },
      to: {
        transform: 'rotate(359deg)'
      }
    }
  },
  content: {
    borderRadius: '50%',
    padding: '9px',
    backgroundColor: 'black',
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#FFF',
    fontFamily: 'Anton',
    fontSize: 24,
  },
  labelPrimary: {
    position: 'absolute',
    top: 0,
    left: 15,
    transform: 'translateX(-50%)',
    color: '#FFF',
    fontFamily: 'Anton',
    fontSize: 12,
  },
  labelSecondary: {
    position: 'absolute',
    bottom: 0,
    right: 15,
    transform: 'translateX(50%)',
    color: '#FFF',
    fontFamily: 'Anton',
    fontSize: 12,
  }
}

export default styles
