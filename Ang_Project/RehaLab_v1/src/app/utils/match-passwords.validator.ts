import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator(
    passwordControlName: string,
    rePasswordControlName: string
): ValidatorFn {
    return (control) =>{
   
      const passwordFormControl = control.get(passwordControlName);
      const rePasswordFormControl = control.get(rePasswordControlName);
 
    //   console.log(passwordFormControl?.value);
    //   console.log(rePasswordFormControl?.value);
    
     const passworsdAreMatching =
      passwordFormControl?.value === rePasswordFormControl?.value;

        return passworsdAreMatching ? null : {matchPasswordsValidator: true};
    };
}