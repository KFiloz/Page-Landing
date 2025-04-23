---
title: "¿Cuál es la diferencia entre LoRa y LoRaWAN?"
date: "2025-04-23"
author: "Camilo Ortega"
mainImage: "/images/lora-vs-lorawan.png"
excerpt: "Aunque suelen confundirse, LoRa y LoRaWAN no son lo mismo. Esta entrada explica sus diferencias clave en arquitectura, aplicación y propósito dentro de una red IoT."
category: "Redes LoRaWAN"
---

# ¿Cuál es la diferencia entre LoRa y LoRaWAN?

Uno de los errores más comunes al hablar de tecnologías de comunicación IoT es usar indistintamente los términos **LoRa** y **LoRaWAN**. Aunque están estrechamente relacionados, se refieren a componentes distintos dentro de una red de largo alcance y bajo consumo.

---

## ¿Qué es LoRa?

**LoRa (Long Range)** es una **modulación de radiofrecuencia** basada en espectro ensanchado de tipo *chirp spread spectrum* (CSS), patentada por Semtech. En términos simples, **LoRa define cómo se transmite la señal a nivel físico**. Es el **componente físico (PHY)** del stack de comunicaciones.

🔧 **Características principales:**

- Opera en bandas ISM sin licencia (ej. 868 MHz en Europa, 915 MHz en América).
- Alta sensibilidad (hasta -137 dBm).
- Bajo consumo de energía.
- Alcances de hasta 10-15 km en entornos rurales.
- Muy resistente al ruido y a las interferencias.

---

## ¿Qué es LoRaWAN?

**LoRaWAN (Long Range Wide Area Network)** es **un protocolo de red de nivel superior** desarrollado por la LoRa Alliance. Funciona **sobre LoRa** y define **cómo los dispositivos se comunican a través de la red**: autenticación, direccionamiento, seguridad, y gestión de datos.

📡 **Características principales:**

- Arquitectura estrella de estrellas (star-of-stars).
- Estándar abierto y globalmente adoptado.
- Seguridad mediante cifrado AES de extremo a extremo.
- Dispositivos clasificados en clases A, B y C según su consumo y latencia.
- Soporte para redes públicas y privadas.

---

## Diferencias Clave entre LoRa y LoRaWAN

| Característica       | LoRa                         | LoRaWAN                            |
|----------------------|------------------------------|-------------------------------------|
| Nivel de protocolo   | Físico (PHY)                 | Enlace y red (MAC + NET)           |
| Función              | Transmisión de señal         | Gestión de red y datos             |
| Control de acceso    | No definido                  | Definido por protocolo LoRaWAN     |
| Seguridad            | No especificada              | AES-128 en red y aplicación        |
| Topología            | Punto a punto (sin estándar) | Estrella de estrellas (gateways)   |
| Estándar             | Propietario (Semtech)        | Abierto (LoRa Alliance)            |

---

## ¿Se puede usar LoRa sin LoRaWAN?

Sí. LoRa puede emplearse en implementaciones personalizadas punto a punto o redes privadas donde **no se requiere un stack completo** como LoRaWAN. Sin embargo, estas implementaciones suelen carecer de escalabilidad y seguridad estructurada.

---

## Conclusión

LoRa es la base física que permite comunicación inalámbrica de largo alcance y bajo consumo. LoRaWAN es el protocolo que da estructura, seguridad y funcionalidad a las redes LoRa a gran escala. Entender la diferencia es clave para diseñar soluciones IoT robustas, seguras y escalables.

🔍 ¿Te interesa saber cómo construir una red LoRaWAN desde cero o cómo conectar sensores industriales a la nube? Revisa nuestros próximos artículos en la categoría **Redes LoRaWAN** o contáctame directamente.

---

> 🛠️ *Camilo Ortega es ingeniero electrónico con más de 15 años de experiencia en automatización industrial, IoT y desarrollo de soluciones LoRaWAN personalizadas para entornos agrícolas e industriales.*
