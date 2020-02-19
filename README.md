# Testing All the Plugins

[🖥 https://test-build-plugins.netlify.com/](https://test-build-plugins.netlify.com/)

[🎛 https://test-build-plugins.netlify.com/](https://app.netlify.com/sites/test-build-plugins/overview)

Check out the [`netlify.toml`](https://github.com/tzmanics/test-all-the-plugins/blob/master/netlify.toml) file to see the plugins tested and their config.

## Running the Project

To check out the project locally run

`ng build && npm run scully`

to get the static files served out of `dist/static`.

## Build Process

 You can preview the Netlify build process by running

`netlify build --dry`

then run 

`netlify build`

to fully run through the build process.

> *you need `npm i @angular/cli @netlify-cli -g` for these commands to work*
