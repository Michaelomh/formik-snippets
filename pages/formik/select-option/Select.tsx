import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Select as ChakraSelect,
} from '@chakra-ui/react'
import { Field } from 'formik'

export const Select = (errors, touched) => {
  return (
    <FormControl isInvalid={errors.color && touched.color}>
      <FormLabel htmlFor="color">Color</FormLabel>
      <Field name="color" as={ChakraSelect}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="error">ERROR</option>
      </Field>
      <FormErrorMessage>Error Message</FormErrorMessage>
      <FormHelperText>Helper Text</FormHelperText>
    </FormControl>
  )
}
