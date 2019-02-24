# IoT Fan with Raspberry Pi and MQTT
MQTT script to manage an IoT Fan, as described into "Elettronica & Maker"  on issue 5, available in italian language only, at https://elettronicaemaker.it/

![alt tag](https://github.com/emanuelepaiano/mqtt-iot-fan/blob/master/sketch.png?raw=true)

# Setup
Go into project folder and run 'npm install' to install node dependencies. 

This script require Node 9.9.0 (minimum) and you can run it with 'node raspberry_controller.js'. 
For setup script at startup, you should copy run_mqtt.sh to /etc/init.d/mqtt_client and register it with update-rc.d.
 
For Android devices, you can use 'MQTT Dashboard' app, so you can manage the remote Relay by internet and MQTT protocol. 

# License
Apache 2.0

# Author
Emanuele Paiano - nixw0rm [ at ] gmail [ dot ] com
