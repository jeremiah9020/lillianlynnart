# lillianlynnart

## Running/Building

### Testing locally

```sh
nvm use 22
npm start
```

### Deploying

```sh
nvm use 22
npm run deploy
```

## Adding Images

Add image file (only use jpg files, if they end in "JPG" or "jpeg", rename it to "jpg") to the corresponding folder in the public folder, then add an entry to the files array in the corresponding component.

### Paintings

- Put file [here](public/paintings/)
- Add entry [here](src/app/routes/paintings/paintings.component.ts)

### Ceramics

- Put file [here](public/ceramics/)
- Add entry [here](src/app/routes/ceramics/ceramics.component.ts)

### Exhibitions

- Put file [here](public/exhibitions/)
- Add entry [here](src/app/routes/exhibitions/exhibitions.component.ts)
