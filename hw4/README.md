# Embedded System Hw4

This project demonstrates the implementation of BLE services for heart rate monitoring and button state notification using an Mbed-enabled device as the server and a Raspberry Pi as the BLE scanner (client). The heart rate service updates every second, and the button service updates on state changes.

#### Author
- Department: EE3
- Name: Chen-Yu, HSU
- ID: B10502139

## Prerequisites

- **Hardware:**
  - An Mbed-compatible device (e.g., DISCO_L475VG_IOT01A).
  - Raspberry Pi with Bluetooth capability.

- **Software:**
  - [Mbed Studio](https://os.mbed.com/studio/) installed on your PC.
  - [Bluepy](https://github.com/IanHarvey/bluepy) on the Raspberry Pi (Python library for Bluetooth).

## Setup and Build Instructions

### Configuring the Mbed Device

1. **Connect the Mbed Device:**
   Connect your Mbed-compatible device to your computer using a USB cable.

2. **Open Mbed Studio:**
   Launch Mbed Studio and import the `BLE_GattServer_AddService` project.

3. **Build the Project:**
   - Navigate to the project directory in Mbed Studio.
   - Select the appropriate target board from the targets list.
   - Build the project by clicking the build button.
  
4. **Flash the Program:**
   - After a successful build, flash the program to the device.
   - Reset the device to start the program.

### Setting Up the Raspberry Pi

1. **Prepare the Pi:**
   Ensure your Raspberry Pi is set up with the latest version of Raspberry Pi OS and is connected to the internet.

2. **Install Git and Bluepy:**
   Open a terminal on the Raspberry Pi. Install Git if it's not already installed, and then install the Bluepy library. Bluepy is a Python module that allows communication with Bluetooth LE devices.

   ```bash
   sudo apt update
   sudo apt install git
   sudo pip3 install bluepy

3. **Clone the Repository:**
   ```bash
   git clone https://github.com/ianhsu0203/embedded_system_hw4.git
   cd embedded_system_hw4

## Running the BLE Services

### Starting the Services on the Mbed Device
Ensure that the Mbed device is powered and running the flashed program. It should start advertising its BLE services, which includes Heart Rate and Button services.

### Scanning and Connecting Using Raspberry Pi

1. **Execute the Scanner Script:**
   Navigate to the repository directory and run the scanner.py script to scan for and connect to the BLE services advertised by the Mbed device.

   ```bash
   sudo python3 scanner.py
   
2. **Select the Device:**
   The script will list all available BLE devices. Enter the number corresponding to the Mbed device from the list to establish a connection.
   
4. **Interact with Services:**
   Once connected, the script will subscribe to notifications from both the Heart Rate and Button services. The heart rate updates and button press events will be displayed in the    console output of the Raspberry Pi.

## Expected Output

You should observe the following outputs displayed in the console of the Raspberry Pi:

- **Heart Rate Service:**
  - Updates on heart rate measurement will be printed every second, showing the current beats per minute (bpm). This demonstrates the real-time functionality of the heart rate service.
  
- **Button Service:**
  - Notifications of button state changes (press and release) will be printed as they occur. This reflects the responsive nature of the button service to user interactions.

## Troubleshooting

- **BLE Not Connecting:**
  - Ensure that the Mbed device is within range of the Raspberry Pi and that the BLE is properly advertising. Confirm that the device is not already connected to another BLE client.
  - Check that the BLE services are correctly initialized and in the advertising mode.

- **No Notifications Received:**
  - Verify that the Client Characteristic Configuration Descriptor (CCCD) for each service has been properly configured to allow notifications. This setup should be evident in the `scanner.py` script but may require manual verification if issues arise.

- **Script Errors:**
  - Ensure that all dependencies, particularly the Bluepy library and Git, are correctly installed on the Raspberry Pi. Run `pip3 list` and `git --version` to verify their presence.
  - Make sure the Python script (`scanner.py`) is error-free and correctly handling BLE operations.

## Additional Resources

For further reading and additional support, the following resources are available:

- **Mbed BLE Documentation:**
  - Comprehensive guide and API references: [Mbed BLE documentation](https://os.mbed.com/docs/mbed-os/latest/apis/ble.html)

- **Bluepy Documentation:**
  - Official Bluepy module documentation and usage examples: [Bluepy documentation](https://github.com/IanHarvey/bluepy)

- **Raspberry Pi Documentation:**
  - Setup, configurations, and troubleshooting: [Raspberry Pi documentation](https://www.raspberrypi.org/documentation/)
