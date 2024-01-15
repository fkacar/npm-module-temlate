import React, { FC, useEffect, ChangeEvent, KeyboardEvent } from 'react'
import { InputLabelProps } from '@mui/material'
import { SxProps } from '@mui/system'
import TextField from '@mui/material/TextField'
//import InputLabel from '@mui/material/InputLabel'
//import MenuItem from '@mui/material/MenuItem'
//import FormControl from '@mui/material/FormControl'
//import Select, { SelectChangeEvent } from '@mui/material/Select'
//import Chip from '@mui/material/Chip'
//import Box from '@mui/material/Box'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faHotel, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
//import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
//import { IconName } from '@fortawesome/fontawesome-common-types'
//import { sortOptionsByType } from '@src/utility/Utils'
import { TextFieldProps } from '../../../../node_modules/@mui/material/TextField/TextField'

export interface IPropsMuiTextField {
  id: string
  value?: string | any[]
  variant?: 'standard' | 'filled' | 'outlined' | undefined
  label?: string
  type?: string
  InputProps?: TextFieldProps
  InputLabelProps?: Partial<InputLabelProps>
  onChange?: (e: any) => void
  onKeyDown?: (e: any) => void
  disabled?: boolean
  className?: string
  required?: boolean | undefined
  placeholder?: string
  sx?: SxProps<any>
  multiline?: boolean
  error?: boolean
  fullWidth?: boolean
  defaultValue?: any
}

const MuiTextField: FC<TextFieldProps> = React.memo(props => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (props.type === 'number' && ['e', 'E'].includes(event.key)) {
      event.preventDefault()
    }

    if (props.onKeyDown) {
      props.onKeyDown(event)
    }
  }

  return <TextField {...props} onKeyDown={handleKeyDown} />
})

export default MuiTextField
