#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <DHT.h>

// --- Configuración del WiFi
const char* ssid = "UTEZ"; // Nombre de la red
const char* password = ""; // Contarseña de la red

// --- Configuración del cliente mqtt
WiFiClient espClient;
PubSubClient client(espClient);
const char mqtt_url[] = "35.170.192.173"; // Url del servidor de mqtt
const String broker = "PlantasCasa"; // Nombre del broker en donde se publicarán y escucharán los tópicos
const String clientId = "client"; // Id dela cliente (Este puede ser cualquier nombre)
const String topics[] = {"measure/hum_air", "measure/hum_earth", "measure/temp_air", "measure/temp_earth", "operation/id"}; // Tópicos de operación

// --- Declarción de los pines
#define DHTPIN 5 // Equivalente al D1
#define DS18PIN 4 // Equivalente al D2
#define FCPIN A0
#define REL 14 // Equivalente al D5

// --- Declaración de los sensores
OneWire sensor(DS18PIN);
DallasTemperature ds18(&sensor);
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

// --- Variables Globales
String topic = "";
char buff[100]; // Cambie el valor adentro de lo corchetes en caso de que lo topicos revasen el tamaño del arreglo
char value[10] = "";
char* aux = "";
boolean flag = false;
String string = "";
float hum_air, hum_earth, temp_air, temp_earth = 0.0;
String content = "";
String operation = "";

void setup() {
  Serial.begin(9600);
  dht.begin();
  ds18.begin();
  pinMode(FCPIN, INPUT);
  pinMode(DHTPIN, INPUT);
  pinMode(REL, OUTPUT);
  digitalWrite(REL, HIGH);
  setup_wifi();
  client.setServer(mqtt_url, 1883);
  client.setCallback(callback);
}

void loop() {
  delay(2000);
  if(!flag){
    reconnect();
  }

  if(operation == "1"){
    digitalWrite(REL, LOW);
  }else{
    digitalWrite(REL, HIGH);
  }

  if(operation != "5"){
    // Lectura y envío de la humedad del aire
    hum_air = dht.readHumidity();
    dtostrf(hum_air, 5, 2, aux);
    sprintf(value, "", aux);
    topic = broker+"/"+topics[0];
    topic.toCharArray(buff, 100);
    client.publish(buff, value);
    delay(2000);
  
    // Lectura y envío de la humedad de la tierra
    hum_earth = 100.0 - (analogRead(FCPIN)/10.24);
    dtostrf(hum_earth, 5, 2, aux);
    sprintf(value, "", aux);
    topic = broker+"/"+topics[1];
    topic.toCharArray(buff, 100);
    client.publish(buff, value);
    delay(2000);
  
    // Lectura y envío de la temperatura del aire
    hum_air = dht.readTemperature();
    dtostrf(hum_air, 5, 2, aux);
    sprintf(value, "", aux);
    topic = broker+"/"+topics[2];
    topic.toCharArray(buff, 100);
    client.publish(buff, value);
    delay(2000);
  
    // Lectura y envío de la temperatura de la tierra
    ds18.requestTemperatures();
    temp_earth = ds18.getTempCByIndex(0);
    dtostrf(temp_earth, 5, 2, aux);
    sprintf(value, "", aux);
    topic = broker+"/"+topics[3];
    topic.toCharArray(buff, 100);
    client.publish(buff, value);
    delay(2000);
  }

  client.loop();
}

// --- Método de conexión a wifi
void setup_wifi(){
  delay(1000);
  Serial.println();
  Serial.print("Conectandose a: ");
  Serial.print(ssid);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  while(WiFi.status() != WL_CONNECTED){
    delay(500);
    Serial.print(".");
  }

  randomSeed(micros());
  Serial.println("!");
  Serial.println("WiFi connected");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}

// --- Método client.('message');
void callback(char* topic, byte* payload, unsigned int length) {
   content = "";   
   content.concat((char)payload[length-1]);
   content.toCharArray(value, 10);
   operation = content.charAt(5);
   if(operation == NULL){
    operation = content.charAt(4);
   }
}

// --- Método de reconexión
void reconnect() {
  Serial.print("Reconectando al cliente mqtt");
  while(!flag){
    if(client.connect(clientId.c_str(), "root", "root")){
      Serial.println("!");
      char a[100] = "";
      String b = broker+"/"+topics[4];
      b.toCharArray(a, 100);
      client.subscribe(a);
      flag = true;
      break;
    }else{
      Serial.print(".");
      delay(5000);
    }
  }
}
