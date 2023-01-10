import { Button, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import RosterContext from '../../context/RosterContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const CopyButton = () => {
  const { clipboard, setClipboard } = useContext(RosterContext)

  const handleAlert = () => {
    // const clipboardCopy = [...clipboard]
    // const arrayToString = clipboardCopy.toString().replace(/,/g, '\n')

    // setClipboard(arrayToString)
    // navigator.clipboard.writeText(arrayToString)

    toast.success('Copied!', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <Box ml="10px">
      <CopyToClipboard text={clipboard.toString().replaceAll(',', '\n')}>
        <Button onClick={handleAlert} size="sm" w="65px" variant="outline">
          Copy
        </Button>
      </CopyToClipboard>
      <ToastContainer />
    </Box>
  )
}
export default CopyButton
