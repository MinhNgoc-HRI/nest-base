import { IsNotEmpty, ValidationArguments } from 'class-validator';
export class CreateCatDto {
  @IsNotEmpty({
    message: (e: ValidationArguments) => {
      console.log(e);

      return `${e.property} Không được để trống`;
    },
  })
  id: string;
  @IsNotEmpty({
    message: (e: ValidationArguments) => {
      console.log(e);

      return `${e.property} Không được để trống`;
    },
  })
  name: string;
}
