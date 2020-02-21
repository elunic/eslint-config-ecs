# `@elunic/eslint-config-ecs`

[![Build Status](https://travis-ci.org/elunic/eslint-config-ecs.svg?branch=master)](https://travis-ci.org/elunic/eslint-config-ecs)

The eslint part of the elunic coding styles

## Table of Contents

- [`@elunic/eslint-config-ecs`](#eluniceslint-config-ecs)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Default config (non-fix)](#default-config-non-fix)
    - [Fix config](#fix-config)
  - [License](#license)

## Installation

This module is automatically installed as part of the `@elunic/ecs` package.

For a standalone install, use:
```bash
$ npm i -D @elunic/eslint-config-ecs
```

## Usage

**Note for Angular projects**: There is currently no `eslint` configuration for Angular, as Angular itself
has not yet switched to using `eslint`. For Angular projects, `tslint` should still be used.

### Default config (non-fix)

Example usage for your `/.eslintrc.json`:

```json
{
  "extends": "@elunic/eslint-config-ecs",
  "rules": {}
}
```

### Fix config

Example usage for your `/.eslintrc.fix.json`:

```json
{
  "extends": "@elunic/eslint-config-ecs/fix",
  "rules": {}
}
```


## License

MIT License

Copyright (c) 2019-2020 elunic AG/William Hefter <wh@elunic.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
