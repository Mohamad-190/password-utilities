# @mohamad-190/password-utilities

A small JavaScript library for password utility functions. Generate strong passwords and validate password strength.

## Installation

```bash
npm install @mohamad-190/password-utilities
```

```bash
yarn add @mohamad-190/password-utilities
```

## Usage

```js
const { generateStrongPassword, isStrongPassword } = require('@mohamad-190/password-utilities');

// Generate a strong password with a given length
generateStrongPassword(12); // => "pC%mD8TpCKn2"
generateStrongPassword(1);  // => "W"

// Check if a password is strong
isStrongPassword('Hello World');  // => false
isStrongPassword('pC%mD8TpCKn2'); // => true
```

## Functions

### generateStrongPassword(length)
Generates a random strong password of the specified length. The password includes uppercase letters, lowercase letters, numbers, and special characters. The function guarantees that the returned password is always strong.

### isStrongPassword(password)
Checks whether a password is strong. Returns `true` if the password:
- Is at least 8 characters long
- Contains at least one uppercase letter
- Contains at least one lowercase letter
- Contains at least one number
- Contains at least one special character (!@#$%^&*()_+)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute.

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) for details.
