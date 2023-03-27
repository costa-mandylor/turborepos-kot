/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable id-length */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const startCase = require('lodash/startCase');
const svgr = require('@svgr/core').default;

const fsPromise = fs.promises;
const svgsPath = '../../public/assets/icon/';
const iconsPath = '../components/icons/';

(async () => {
  try {
    // Index content
    let indexContent = '';
    let componentNames = [];

    // Read svgs directory
    let files = await fsPromise.readdir(svgsPath);

    files = files.filter((f) => f.match(/^.*\.(svg)$/));

    // Process on individual file
    for (const file of files) {
      // Read svg content
      let content = await fsPromise.readFile(svgsPath + file, 'utf8');

      let isColorSvg = file.match(/^.*.color.svg$/);

      // Extract file name without extensions
      const [fileName] = file.split('.');

      // Make component name
      const componentName = startCase(fileName).split(' ').join('');
      componentNames.push(componentName);

      svgr(content, {
        plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
        replaceAttrValues: {},
        dimensions: false,
      })
        .then((jsCode) => {
          if (!isColorSvg) {
            if (jsCode.match(/stroke="#([0-9a-f]{3}|[0-9a-f]{6})"/gi)) {
              jsCode = jsCode.replaceAll(/stroke="#([0-9a-f]{3}|[0-9a-f]{6})"/gi, `stroke="currentColor"`);
            }
            if (jsCode.match(/fill="#([0-9a-f]{3}|[0-9a-f]{6})"/gi)) {
              jsCode = jsCode.replaceAll(/fill="#([0-9a-f]{3}|[0-9a-f]{6})"/gi, `fill="currentColor"`);
            }
          }

          jsCode = `import type { IIcons } from "./type"; \n\n${jsCode}`;
          jsCode = jsCode
            .replace('props', '{width = 24, height = 24, size, ...props}: IIcons')
            .replace('{...props}', 'width={size || width} height={size || height} {...props}');
          // Write file
          fsPromise.writeFile(`${iconsPath + componentName}.tsx`, jsCode, 'utf8');
        })
        .catch(console.log);

      console.log(`Made component ${componentName}`);
    }
    indexContent = componentNames.map((item) => `export {default as ${item}} from './${item}'`).join(';');

    await fsPromise.writeFile(`${iconsPath}index.ts`, indexContent);
  } catch (e) {
    console.log(e);
  }
})();
