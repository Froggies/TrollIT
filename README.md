TrollIT ? [![Build Status](https://travis-ci.org/Froggies/TrollIT.png?branch=master)](https://travis-ci.org/Froggies/TrollIT)
=========

TrollIT is a 2D management/strategy game starring a software development company.


Howto build
============

To build the project, you'll need NodeJS, Grunt and Bower.

Then, to setup the projet you need to retrieve local dependencies.

```npm install``` for grunt dependencies
```bower install``` for runtime dependencies

* To start a dev server use ``` grunt server:dev```
* To launch tests, use ```grunt server:test```or ```npm test```(CI mode)
* To build a deployable version use ```grunt```
* To launch a prod server (using builded version) use ```grunt server:prod```

The project use RequireJS, so each module should be specified in its own file, same goes for
the unit tests.

The project also run on travis to make sure any tests are run frequently.

Finally as a game engine we use [Crafty.js](http://craftyjs.com/)


Howto contribute
================

Pull requests are welcome, we just need to review if the provided features suits our vision of the game.
Before making a pull request, make sure you work is not on master, and we can merge your branch automatically.
Travis will also check that your PR is not breaking the build.


License ![License](http://www.gnu.org/graphics/gplv3-127x51.png)
==============



This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

Copyright 2013 [Froggies Team](https://github.com/Froggies?tab=members)