import { ValidatorFn, AbstractControl } from '@angular/forms';

export const releaseDateValidator: ValidatorFn = (control: AbstractControl) => {
    const dateNr = Date.parse(control.value);
    if (!dateNr) {
        return {
            releaseDate: {
                parseError: true
            }
        }
    }
    const date = new Date(dateNr);
    if (date.getFullYear() < 1891) {
        return {
            releaseDate: {
                beforeCamera: true
            }
        }
    }
    if (date > new Date()) {
        return {
            releaseDate: {
                future: true
            }
        }
    }

    return null;
}
