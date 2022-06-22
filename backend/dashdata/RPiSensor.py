import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.IN)
prevTime = time.time()

# while True:
# 	input = GPIO.input(11)
# 	if (input == 1):
# 		time.sleep(0.05)
# 		input = GPIO.input(11)
# 		if input == 0:
# 			curTime = time.time()
# 			timeTaken = curTime - prevTime
# 			rpm = 1/timeTaken * 60
# 			speed = 0.62 * 3.14 * rpm / 60 * 3600 / 1000
# 			print("RPM is", rpm, "Speed is", speed)
# 			prevTime = curTime

def getSpeedAndRpm():
    input = GPIO.input(11)
    prevTime = time.time()
    while input != 1:
        input = GPIO.input(11)
        if time.time() > prevTime + 5: return (0, 0)
    prevTime = time.time()
    time.sleep(0.05)
    input = GPIO.input(11)
    while input != 1:
        input = GPIO.input(11)
    timeTakenForSingleRevolution = time.time() - prevTime
    rpm = 1/timeTakenForSingleRevolution * 60
    speed = 0.62 * 3.14 * rpm / 60 * 3600 / 1000
    return (speed, rpm)