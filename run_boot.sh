#!/bin/bash
#

path='/home/pi/mqtt_scripts'
node=$(which node)

cd $path
$node rpi_controller.js

