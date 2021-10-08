# View Searching Engine Gif React App Demo in:
 https://leojaimes.github.io/gif-expert-app/
 






# Testing with react 17 and ezime
Should install from: 
https://github.com/wojtekmaj/enzyme-adapter-react-17

 ``
   npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
 ``
 

 and from https://www.npmjs.com/package/enzyme-to-json

``
   npm install --save-dev enzyme-to-json
``
 
 And then save a file named: setupTests.js in src.
 and write this code:

 ````
 
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; 
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

 ````

