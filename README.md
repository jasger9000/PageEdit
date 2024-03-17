# PageEdit

PageEdit is a small browser add-on/extension that makes it possible to easily edit a web-page locally using the browsers built-in design mode.

## Installation
  #### Firefox:
  1. Download the `PageEdit.zip` zip file of the [latest release](https://github.com/jasger9000/PageEdit/releases/latest)
  2. Install the add-on locally in your browser
  3. Go to the URL `about:addons` or Press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd>
  4. Click on the cogwheel in the top right corner
  5. Click `Install Add-On From File...`
  6. Choose the zip file you downloaded in step 1     
  
  #### Chromium:
  1. There currently is unfortunately no Chrome version available</br>

## Building

You will have to have git and pnpm installed.

```bash
# clone the repository
git clone https://github.com/jasger9000/PageEdit
cd PageEdit

# build the project
pnpm run build
```

There should now be a zip file named `PageEdit.zip` located in `dist/` which can be installed as described [above](#installation).

## Usage

1. Press Right-Mouse-Button on any website
2. Press `Enable page edit`
3. Edit the page to your likig

To finish your editig:
1. Press Right-Mouse-Button again
2. Press `Disable page-edit`

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
