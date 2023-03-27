import FormInput from '../FormInput'
import { useForm } from 'react-hook-form'
import { View, StyleSheet } from 'react-native'
import AppButton from '../AppButton'
import useCreateReview from '../../hooks/useCreateReview'

const style = StyleSheet.create({
  formCard: {
    backgroundColor: 'white'
  }
})

const ReviewForm = ({ navigation }) => {
  const {control, handleSubmit} = useForm()
  const createReview = useCreateReview()

  const onSubmit = async (data) => {
    try {
      const { repositoryId } = await createReview(data)
      navigation.navigate('Repository', {
        id: repositoryId
      })
    } catch (e) {
      console.log(e)
    }
  }

  const rules = {
    ownerName: {
      required: 'Repo owner is required',
      maxLength: { value: 39, message: 'Owner name must be less than 39 characters'}
    },
    repositoryName: {
      required: 'Repo name is required'
    },
    rating: {
      pattern: { value: /^\d+$/, message: "Rating must be a number" },
      min: { value: 0, message: 'Rating must be within 0 and 100'},
      max: { value: 100, message: 'Rating must be within 0 and 100'},
    }
  }

  return (
    <View style={style.formCard}>
      <FormInput name="ownerName" placeholder="Repository owner name" control={control} rules={rules.ownerName}/>
      <FormInput name="repositoryName" placeholder="Repository name" control={control} rules={rules.repositoryName}/>
      <FormInput name="rating" placeholder="Rating between 0 and 100" control={control} rules={rules.rating} type="number"/>
      <FormInput name="text" placeholder="Review" control={control} />
      <AppButton onPress={handleSubmit(onSubmit)} type="submitLarge" text="Submit review"/>
    </View>
  )
}

export default ReviewForm