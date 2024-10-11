```bash
npm install -g pnpm
pnpm install
pnpm dev
```

Exercise 1: Simple Form with Validation
Create a basic form with react-hook-form that accepts a user's name and email, and validates that both fields are required.

Exercise 2: Add DevTools
See: https://www.react-hook-form.com/dev-tools/

Exercise 3: Add Pattern Validation for Email
Expand the previous form to validate that the email field follows a correct email pattern.

Exercise 4: Add Conditional Validation for Age
Add a new field to the form for age, and only validate the age if the user provides a value. If entered, it must be a number between 18 and 99.

Exercise 5: Form with Nested Fields and Default Values
Extend the form to include a nested address fieldset (street and city), and pre-populate the form with default values.

Exercise 6: Dynamic Form Fields with Array Fields
Allow users to add multiple addresses dynamically. Users should be able to click "Add Address" to append a new address field.

---

Exercise 7: Add Zod validation
Convert validations to Zod schema validation.
See: https://dev.to/majiedo/using-zod-with-react-hook-form-using-typescript-1mgk

Exercise 8: Integrate Async Validation (e.g., Check if Username Exists)
Create a new form field for username and add async validation to check whether the username already exists in a database.
Use `import {checkUsernameExists} from '@/data-access'`

---

Exercise 9: Use ShadCN form components

- Enable index.css and ThemeProvider in main.tsx
- See: https://ui.shadcn.com/docs/components/form
