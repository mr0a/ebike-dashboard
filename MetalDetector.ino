int limitswitch = 8;
int value;
int rpm = 0;
unsigned int time = 0;
unsigned int prevMetalDetectTime;
unsigned int curMetalDetectTime;
const unsigned long period = 1000;

void setup() {
  Serial.begin(9600);
  pinMode(limitswitch, INPUT);
  prevMetalDetectTime = millis();
}

void loop() {
  value = digitalRead(limitswitch);
  if (value == 1){
    curMetalDetectTime = millis();
    delay(100);
    value = digitalRead(limitswitch);
    Serial.println("Metal Detected");
    if(value == 0){
      rpm++;
      time += (curMetalDetectTime - prevMetalDetectTime);
      Serial.print("Time");
      Serial.println(time);
      Serial.println("Rpm");
      Serial.println(rpm);
      prevMetalDetectTime = curMetalDetectTime;
    }
  }
}