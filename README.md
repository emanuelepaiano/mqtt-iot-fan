# IoT Fan with Raspberry Pi and MQTT
MQTT script to manage an IoT Fan, as described into Elettronica & Maker paper on issue 5 (italian only)

# Setup
Enter inside folder and run 'npm install'. 

For running script you need Node 9.9.0 (minimum) and run script with 'node raspberry_controller.js'. 
For run script at boot, you should copy run_mqtt.sh to /etc/init.d/mqtt_client and register to 
Init with update-rc.d.
 
You can use MQTT Dashboard on Android to manage remote Relay by Internet and MQTT protocol. 

# License
Apache 2.0

# Author
Emanuele Paiano - nixw0rm [ at ] gmail [ dot ] com
