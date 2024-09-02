# Embedded System HW2

This repository contains the second hardware assignment for the Embedded System course, provided by 許禎勻. It includes a practical implementation of the B-L475E-IOT01A board's capabilities to capture 3D accelerometer data and transmit it over WiFi to a Python-based socket server, which visualizes the XYZ coordinates in real-time.

#### Author
B10502139 許禎勻
#### Date
2024/3/21

## Getting Started

The following instructions will guide you through the process of setting up your B-L475E-IOT01A board and running the Python socket server to receive and visualize accelerometer data.

### Prerequisites

- B-L475E-IOT01A development board
- Mbed CLI and Mbed Studio installed on your computer
- Python 3.x installed along with the `socket` library

### Configuration

1. Connect your B-L475E-IOT01A board to your computer via USB.
2. Update the `mbed_app.json` file with the appropriate WiFi credentials: replace `ssid` and `password` fields with your WiFi network's SSID and password.
3. Modify the `HOST` variable in the `socket-server.py` script to match the IP address of the computer that will run the socket server.

### Running the Server and Application

1. Start the socket server by running the Python script:

   ```bash
   python socket-server.py
2. Open Mbed Studio and import the Mbed-os-example-sockets project.
3. Build and flash the project to your B-L475E-IOT01A board.
4. Once the application is running on the board, it will send accelerometer data over WiFi to the socket server.
5. The socket server will process the incoming data and plot the XYZ coordinates over time.
### Visualization

The real-time visualization provided by the socket server gives a graphical representation of the accelerometer data, allowing for immediate analysis and interpretation of the movements captured by the B-L475E-IOT01A board.

## Built With

Mbed OS - The open-source operating system for IoT devices.

Python - The programming language used for the socket server.
