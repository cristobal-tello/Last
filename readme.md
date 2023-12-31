# LAST #

## 02. Asset Mapper ##

The AssetMapper component lets you write modern JavaScript and CSS without the complexity of using a bundler. Browsers already support many modern JavaScript features like the import statement and ES6 classes. And the HTTP/2 protocol means that combining your assets to reduce HTTP connections is no longer urgent. This component is a light layer that helps serve your files directly to the browser.

To install:
$ composer require symfony/asset-mapper symfony/asset symfony/twig-pack

After the installation, take a look 'asset_mapper.yaml'

All the directories in 'paths' now will be "public".

eg:
Create new irectory 'images' in 'assets' directory Then copy a image (eg: logo.png).

Using next command-line you will check the 'logical path' for previous new image.

$ bin/console debug:asset

Use the 'logical path' value, eg:

<img src="{{ asset('images/logo.png')}}" alt="Cool logo" />

If you take a look the source, you will note the file is not 'logo.png'. Instead, you open a file with name like this  'logo-3fd04f1b832abdd71143b862bf75ba55.png', but you cannot find this file. This is happen whe you're in debug mode. When you be ready for production, you need to compile the assets and Symfony will do the work for you and we don't need to modify any template.

To compile assets, use:
$ bin/console asset-map:compile

Then, take a look the public/assets/images and the files will be there.

In Dev mode, delete 'public/assets/images' because if there are assets in ''public/assets/images', Symfony will use these assets excepts the assets in the 'assets' directory.
