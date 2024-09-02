import socket
import json
import numpy as np
import matplotlib.pyplot as plt
HOST = '192.168.50.100'  # IP address
PORT = 8000  # Port to listen on (use ports > 1023)

plt.ion()  # Turn on interactive mode for dynamic updates
fig, ax = plt.subplots()

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()
    print("Starting server at: ", (HOST, PORT))
    conn, addr = s.accept()
    with conn:
        print("Connected at", addr)
        while True:
            data = conn.recv(1024).decode('utf-8')
            print("Received from socket server:", data)
            if data.count('{') != 1:
                # Incomplete data are received.
                choose = 0
                buffer_data = data.split('}')
                while buffer_data[choose][0] != '{':
                    choose += 1
                data = buffer_data[choose] + '}'
            obj = json.loads(data)
            
            t = obj['s']
            # Plotting x, y, z with different colors
            ax.scatter(t, obj['x'], c='blue', label='x' if t == 0 else "", alpha=0.5)
            ax.scatter(t, obj['y'], c='red', label='y' if t == 0 else "", alpha=0.5)
            ax.scatter(t, obj['z'], c='green', label='z' if t == 0 else "", alpha=0.5)
            
            # Set labels and legend
            ax.set_xlabel("sample num")
            ax.set_ylabel("values")
            if t == 0:  # Add legend only once
                ax.legend()

            plt.pause(0.0001)
