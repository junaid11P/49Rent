import { z } from 'zod';

export const bookingSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email(),
  address: z.string().min(4),
  landmark: z.string().optional(),
  pincode: z.string().min(4),
  deliveryType: z.enum(['pickup', 'delivery']),
  duration: z.string(),
});
