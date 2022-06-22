import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.IN)
prevTime = time.time()

while True:
	input = GPIO.input(11)
	if (input == 1):
		time.sleep(0.05)
		input = GPIO.input(11)
		if input == 0:
			curTime = time.time()
			timeTaken = curTime - prevTime
			rpm = 1/timeTaken * 60
			speed = 0.62 * 3.14 * rpm / 60 * 3600 / 1000
			print("RPM is", rpm, "Speed is", speed)
			prevTime = curTime
		#print("Metal Detected")
		#time.sleep(1)

