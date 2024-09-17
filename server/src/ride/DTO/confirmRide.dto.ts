import { IsNotEmpty } from 'class-validator';

export class ConfirmRideDto {
  @IsNotEmpty()
  from: string;

  @IsNotEmpty()
  to: string;

  @IsNotEmpty()
  carType: 'SUV' | 'Sedan' | 'Prime';

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  distance: number;

  @IsNotEmpty()
  driver: string;

  @IsNotEmpty()
  customer: string;
}
