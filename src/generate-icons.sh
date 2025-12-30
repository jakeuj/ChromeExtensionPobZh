#!/bin/bash

# Generate PNG icons from SVG
# Requires: ImageMagick or librsvg

echo "Generating PNG icons from SVG..."

cd "$(dirname "$0")/icons"

# Check if convert (ImageMagick) is available
if command -v convert &> /dev/null; then
    echo "Using ImageMagick..."
    convert icon.svg -resize 16x16 icon16.png
    convert icon.svg -resize 48x48 icon48.png
    convert icon.svg -resize 128x128 icon128.png
    echo "✓ Icons generated successfully!"
elif command -v rsvg-convert &> /dev/null; then
    echo "Using librsvg..."
    rsvg-convert -w 16 -h 16 icon.svg > icon16.png
    rsvg-convert -w 48 -h 48 icon.svg > icon48.png
    rsvg-convert -w 128 -h 128 icon.svg > icon128.png
    echo "✓ Icons generated successfully!"
else
    echo "❌ Error: Neither ImageMagick nor librsvg is installed."
    echo "Please install one of the following:"
    echo "  - ImageMagick: brew install imagemagick"
    echo "  - librsvg: brew install librsvg"
    echo ""
    echo "Or convert icon.svg to PNG manually using an online tool:"
    echo "  - https://cloudconvert.com/svg-to-png"
    echo "  - https://www.adobe.com/express/feature/image/convert/svg-to-png"
    exit 1
fi

echo "Icon files:"
ls -lh *.png

