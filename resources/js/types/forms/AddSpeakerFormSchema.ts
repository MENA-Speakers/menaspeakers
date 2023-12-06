import * as z from 'zod';

export const AddSpeakerFormSchema = z.object({
  name: z.string().min(1,{ message: 'Speaker name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  bio: z.string().min(1,{ message: 'Speaker bio is required' }),
  image: z.string().min(1,{ message: 'Speaker image is required' }),
  meta_title: z.string().min(1,{ message: 'Speaker meta title is required' }).max(75,{ message: 'Speaker meta title must be less than 60 characters' }),
});
