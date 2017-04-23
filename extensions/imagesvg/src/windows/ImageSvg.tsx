﻿/**
* ImageSvg.tsx
* Copyright: Microsoft 2017
*
* RN-specific implementation of the cross-platform abstraction for
* SVG (scalable vector graphics) images.
*/

import React = require('react');

import SvgInterfaces = require('../common/Interfaces');

// TODO: #694092 Not implemented

export class ImageSvg extends SvgInterfaces.ImageSvg<{}> {
    render(): any {
        return null;
    }
}

export default ImageSvg;
