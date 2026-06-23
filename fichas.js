/* ══ FICHAS TÉCNICAS APYMSA ══
   Pareto 80% — 46 familias — 16,791 productos
   Funciona offline sin API — Actualizado 2025
   ================================================== */

var FICHAS_TECNICAS = {
  "Sensor": {
    "titulo": "SENSOR AUTOMOTRIZ",
    "subtitulo": "Monitoreo preciso para el rendimiento óptimo",
    "que_es": "Un sensor automotriz mide variables físicas del vehículo como temperatura, presión y posición. Envía señales a la ECU para optimizar el funcionamiento del motor y sistemas del vehículo.",
    "como_funciona": [
      {
        "paso": "Detección",
        "desc": "El sensor capta la variable física mediante su elemento sensitivo."
      },
      {
        "paso": "Conversión",
        "desc": "Transforma la señal física en una señal eléctrica analógica o digital."
      },
      {
        "paso": "Transmisión",
        "desc": "Envía la señal eléctrica a la ECU a través del arnés de cables."
      },
      {
        "paso": "Corrección",
        "desc": "La ECU procesa la señal y ajusta parámetros del motor en tiempo real."
      }
    ],
    "beneficios": [
      {
        "titulo": "MAYOR EFICIENCIA",
        "desc": "Permite a la ECU optimizar la mezcla aire-combustible."
      },
      {
        "titulo": "MENOR CONSUMO",
        "desc": "Ajuste preciso reduce el consumo de combustible hasta un 15%."
      },
      {
        "titulo": "MENOS EMISIONES",
        "desc": "Control exacto de la combustión reduce emisiones contaminantes."
      },
      {
        "titulo": "DIAGNÓSTICO RÁPIDO",
        "desc": "Facilita la detección de fallas mediante códigos de diagnóstico OBD."
      }
    ],
    "sintomas": [
      "Luz de Check Engine encendida en el tablero",
      "Ralentí inestable o motor que se apaga solo",
      "Aumento en el consumo de combustible",
      "Pérdida de potencia y aceleración deficiente"
    ],
    "recomendaciones": [
      "Verificar conectores y arnés antes de reemplazar el sensor",
      "Usar scanner OBD para confirmar el código de falla",
      "Reemplazar con sensores de calidad certificada",
      "Limpiar zona de instalación para evitar contaminación"
    ]
  },
  "Alternador": {
    "titulo": "ALTERNADOR AUTOMOTRIZ",
    "subtitulo": "Generación de energía eléctrica para el vehículo",
    "que_es": "El alternador es el generador eléctrico del vehículo que convierte energía mecánica en eléctrica. Suministra corriente a todos los sistemas eléctricos y recarga la batería durante la marcha.",
    "como_funciona": [
      {
        "paso": "Accionamiento",
        "desc": "La banda serpentina transfiere movimiento del motor al alternador."
      },
      {
        "paso": "Inducción",
        "desc": "El rotor giratorio genera campo magnético que induce corriente en el estátor."
      },
      {
        "paso": "Rectificación",
        "desc": "El puente de diodos convierte corriente alterna en directa de 14V."
      },
      {
        "paso": "Regulación",
        "desc": "El regulador de voltaje mantiene la salida estable entre 13.5 y 14.5V."
      }
    ],
    "beneficios": [
      {
        "titulo": "CARGA CONSTANTE",
        "desc": "Mantiene la batería cargada durante el funcionamiento del vehículo."
      },
      {
        "titulo": "ENERGÍA SUFICIENTE",
        "desc": "Potencia todos los sistemas eléctricos simultáneamente."
      },
      {
        "titulo": "REGULACIÓN PRECISA",
        "desc": "Voltaje estable protege componentes electrónicos del vehículo."
      },
      {
        "titulo": "LARGA VIDA ÚTIL",
        "desc": "Bobinados de cobre de alta calidad garantizan miles de horas."
      }
    ],
    "sintomas": [
      "Luz de batería encendida en el tablero",
      "Batería descargada frecuentemente",
      "Luces que parpadean o pierden intensidad",
      "Ruido metálico de rodamiento interno"
    ],
    "recomendaciones": [
      "Verificar tensión y estado de la banda serpentina",
      "Revisar conexiones y cables del alternador",
      "Comprobar voltaje de carga con multímetro (13.5-14.5V)",
      "Instalar con amperaje igual o superior al original"
    ]
  },
  "Marcha": {
    "titulo": "MOTOR DE ARRANQUE",
    "subtitulo": "Arranque potente y confiable del motor",
    "que_es": "El motor de arranque hace girar el motor de combustión interna para iniciar su funcionamiento. Convierte energía eléctrica de la batería en energía mecánica para el arranque.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Al girar la llave, la ECU activa el relevador del motor de arranque."
      },
      {
        "paso": "Solenoide",
        "desc": "El solenoide empuja el piñón hacia la corona del volante motor."
      },
      {
        "paso": "Giro",
        "desc": "El motor eléctrico gira el piñón que hace rotar el cigüeñal del motor."
      },
      {
        "paso": "Retracción",
        "desc": "Al arrancar el motor, el piñón se retrae automáticamente."
      }
    ],
    "beneficios": [
      {
        "titulo": "ARRANQUE INMEDIATO",
        "desc": "Par de arranque suficiente para girar el motor en cualquier condición."
      },
      {
        "titulo": "LARGA DURABILIDAD",
        "desc": "Diseño robusto para miles de ciclos de arranque."
      },
      {
        "titulo": "BAJO CONSUMO",
        "desc": "Eficiencia eléctrica optimizada reduce carga sobre la batería."
      },
      {
        "titulo": "COMPATIBILIDAD OEM",
        "desc": "Dimensiones y potencia idénticas al equipo original."
      }
    ],
    "sintomas": [
      "Motor no gira al intentar el arranque",
      "Sonido de clic pero motor no gira",
      "Arranque lento con giro débil del motor",
      "Piñón que no se retrae y hace ruido metálico"
    ],
    "recomendaciones": [
      "Verificar carga y estado de la batería antes de reemplazar",
      "Revisar cables de alimentación y tierra del arrancador",
      "Comprobar estado del relevador de arranque",
      "Verificar torque de apriete de los pernos de montaje"
    ]
  },
  "Bomba gasolina": {
    "titulo": "BOMBA DE GASOLINA",
    "subtitulo": "Suministro preciso de combustible al motor",
    "que_es": "La bomba de gasolina extrae el combustible del tanque y lo suministra al sistema de inyección con la presión adecuada. Es fundamental para el arranque y funcionamiento del motor.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "La ECU activa la bomba al detectar la llave en posición ON."
      },
      {
        "paso": "Extracción",
        "desc": "El motor eléctrico interno succiona gasolina desde el fondo del tanque."
      },
      {
        "paso": "Presurización",
        "desc": "Comprime el combustible a 3-4 bar según requiera el sistema."
      },
      {
        "paso": "Suministro",
        "desc": "Envía combustible presurizado a la rampa de inyectores del motor."
      }
    ],
    "beneficios": [
      {
        "titulo": "ARRANQUE CONFIABLE",
        "desc": "Presión constante garantiza arranque inmediato en cualquier condición."
      },
      {
        "titulo": "MAYOR RENDIMIENTO",
        "desc": "Suministro preciso optimiza la mezcla aire-combustible."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Diseño hermético protege el motor de la bomba de contaminantes."
      },
      {
        "titulo": "BAJO RUIDO",
        "desc": "Operación silenciosa comparable al equipo original."
      }
    ],
    "sintomas": [
      "Motor no arranca o tiene dificultad para encender",
      "Motor se apaga repentinamente a altas velocidades",
      "Pérdida de potencia y aceleración deficiente",
      "Ruido de zumbido excesivo desde el área del tanque"
    ],
    "recomendaciones": [
      "Mantener el tanque con al menos 1/4 de gasolina",
      "Reemplazar el filtro de combustible al cambiar la bomba",
      "Usar gasolina de calidad para prolongar la vida útil",
      "Verificar presión del sistema tras la instalación"
    ]
  },
  "Balero": {
    "titulo": "BALERO AUTOMOTRIZ",
    "subtitulo": "Rodamiento preciso de baja fricción",
    "que_es": "El balero o rodamiento permite el movimiento rotacional con mínima fricción entre partes fijas y giratorias. Se utiliza en alternadores, marchas, poleas, bujes y ruedas del vehículo.",
    "como_funciona": [
      {
        "paso": "Soporte",
        "desc": "Los aros interno y externo sostienen la carga radial y axial del componente."
      },
      {
        "paso": "Rodadura",
        "desc": "Las esferas o rodillos ruedan entre los aros reduciendo la fricción al mínimo."
      },
      {
        "paso": "Lubricación",
        "desc": "La grasa interna lubrifica permanentemente las superficies de rodadura."
      },
      {
        "paso": "Sellado",
        "desc": "Los sellos laterales retienen la grasa e impiden entrada de contaminantes."
      }
    ],
    "beneficios": [
      {
        "titulo": "MÍNIMA FRICCIÓN",
        "desc": "Reduce pérdidas de energía por fricción en partes giratorias."
      },
      {
        "titulo": "OPERACIÓN SILENCIOSA",
        "desc": "Movimiento suave sin ruidos ni vibraciones en operación normal."
      },
      {
        "titulo": "LARGA VIDA ÚTIL",
        "desc": "Acero de alta calidad resiste millones de ciclos de rotación."
      },
      {
        "titulo": "SELLADO PERMANENTE",
        "desc": "Grasa de por vida sin necesidad de lubricación externa."
      }
    ],
    "sintomas": [
      "Ruido de zumbido o gruñido en el componente afectado",
      "Vibración que aumenta con la velocidad del vehículo",
      "Calor excesivo en la zona del balero dañado",
      "Juego axial o radial visible en el eje"
    ],
    "recomendaciones": [
      "Nunca golpear directamente sobre las esferas al instalar",
      "Usar extractor e instalador adecuados para evitar daños",
      "Reemplazar en par en ejes (ambas ruedas del mismo eje)",
      "Verificar que el asiento del balero esté libre de daños"
    ]
  },
  "Bujia": {
    "titulo": "BUJÍA DE ENCENDIDO",
    "subtitulo": "Chispa perfecta para combustión óptima",
    "que_es": "La bujía genera la chispa eléctrica dentro del cilindro para iniciar la combustión de la mezcla aire-combustible. Es fundamental para el funcionamiento eficiente del motor de gasolina.",
    "como_funciona": [
      {
        "paso": "Alimentación",
        "desc": "Recibe pulso de alta tensión de 15,000-40,000V de la bobina."
      },
      {
        "paso": "Chispa",
        "desc": "El voltaje salta el espacio entre el electrodo central y la masa."
      },
      {
        "paso": "Ignición",
        "desc": "La chispa inflama la mezcla aire-combustible comprimida en el cilindro."
      },
      {
        "paso": "Combustión",
        "desc": "La expansión de gases empuja el pistón generando la potencia del motor."
      }
    ],
    "beneficios": [
      {
        "titulo": "COMBUSTIÓN COMPLETA",
        "desc": "Chispa potente garantiza quema total del combustible."
      },
      {
        "titulo": "AHORRO DE COMBUSTIBLE",
        "desc": "Bujías en buen estado mejoran la eficiencia hasta un 10%."
      },
      {
        "titulo": "MENOS EMISIONES",
        "desc": "Combustión completa reduce hidrocarburos en el escape."
      },
      {
        "titulo": "ARRANQUE FÁCIL",
        "desc": "Chispa confiable garantiza arranque inmediato en cualquier condición."
      }
    ],
    "sintomas": [
      "Motor falla o tiembla especialmente en frío",
      "Dificultad para arrancar el motor",
      "Aumento en el consumo de combustible",
      "Humo negro o azul del escape"
    ],
    "recomendaciones": [
      "Respetar el intervalo: 30,000km convencionales, 100,000km iridio",
      "Usar bujía con el grado térmico especificado para el motor",
      "Verificar el espacio del electrodo con calibrador de láminas",
      "Cambiar el juego completo para rendimiento uniforme"
    ]
  },
  "Inyector": {
    "titulo": "INYECTOR DE COMBUSTIBLE",
    "subtitulo": "Atomización precisa para combustión perfecta",
    "que_es": "El inyector es la válvula electromagnética que atomiza y dosifica el combustible en la cantidad exacta hacia el múltiple o directamente al cilindro. Es fundamental para la eficiencia y las emisiones del motor.",
    "como_funciona": [
      {
        "paso": "Señal ECU",
        "desc": "La ECU determina el tiempo y duración de apertura según los sensores."
      },
      {
        "paso": "Apertura",
        "desc": "La bobina interna levanta la aguja permitiendo el paso de combustible."
      },
      {
        "paso": "Atomización",
        "desc": "El combustible a presión pasa por el orificio calibrado en fina niebla."
      },
      {
        "paso": "Cierre",
        "desc": "Al cortar la señal, el resorte cierra la aguja cortando el flujo exactamente."
      }
    ],
    "beneficios": [
      {
        "titulo": "DOSIFICACIÓN EXACTA",
        "desc": "Cantidad precisa de combustible en cada ciclo del motor."
      },
      {
        "titulo": "ATOMIZACIÓN FINA",
        "desc": "Niebla de combustible para combustión más completa y eficiente."
      },
      {
        "titulo": "RESPUESTA RÁPIDA",
        "desc": "Tiempo de apertura en microsegundos para control preciso."
      },
      {
        "titulo": "AHORRO DE COMBUSTIBLE",
        "desc": "Inyección exacta reduce consumo comparado con carburador."
      }
    ],
    "sintomas": [
      "Motor con falla en cilindros específicos",
      "Arranque difícil por inyector bloqueado",
      "Consumo excesivo por inyector que gotea",
      "Olor a combustible por inyector con fuga"
    ],
    "recomendaciones": [
      "Limpiar los inyectores antes de reemplazarlos, pueden recuperarse",
      "Usar combustible de calidad y filtro limpio para prolongar vida",
      "Reemplazar empaques O-rings al instalar nuevos inyectores",
      "Balancear el caudal de los inyectores del mismo motor"
    ]
  },
  "Cuerpo de Aceleracion": {
    "titulo": "CUERPO DE ACELERACIÓN",
    "subtitulo": "Control preciso del flujo de aire al motor",
    "que_es": "El cuerpo de aceleración regula la cantidad de aire que ingresa al motor según la posición del pedal. En sistemas modernos, una mariposa electrónica es controlada por la ECU para optimizar rendimiento y emisiones.",
    "como_funciona": [
      {
        "paso": "Señal del pedal",
        "desc": "El sensor del pedal envía la posición a la ECU del motor."
      },
      {
        "paso": "Control ECU",
        "desc": "La ECU calcula la apertura correcta según RPM, carga y condiciones."
      },
      {
        "paso": "Apertura",
        "desc": "El motor eléctrico abre la mariposa al ángulo calculado por la ECU."
      },
      {
        "paso": "Medición",
        "desc": "El sensor TPS confirma la posición real de la mariposa a la ECU."
      }
    ],
    "beneficios": [
      {
        "titulo": "RESPUESTA PRECISA",
        "desc": "Control electrónico para aceleración suave y lineal."
      },
      {
        "titulo": "EFICIENCIA MÁXIMA",
        "desc": "Apertura calculada por ECU optimiza la relación aire-combustible."
      },
      {
        "titulo": "MENOS EMISIONES",
        "desc": "Control exacto del aire reduce emisiones de HC y CO."
      },
      {
        "titulo": "CONTROL DE TRACCIÓN",
        "desc": "Permite reducir potencia electrónicamente para control de tracción."
      }
    ],
    "sintomas": [
      "Check Engine con código de posición de mariposa",
      "Aceleración irregular o respuesta tardía al pedal",
      "Ralentí inestable o motor que se ahoga",
      "Humo negro por mezcla rica en combustible"
    ],
    "recomendaciones": [
      "Limpiar internamente con limpiador de carburadores antes de reemplazar",
      "Calibrar la posición cero del TPS tras la instalación",
      "No usar lubricantes en la mariposa, puede acumular depósitos",
      "Verificar que no haya fugas de vacío en la instalación"
    ]
  },
  "Bobina encendido": {
    "titulo": "BOBINA DE ENCENDIDO",
    "subtitulo": "Chispa potente para combustión perfecta",
    "que_es": "La bobina de encendido convierte el voltaje de 12V en el alto voltaje necesario para generar la chispa en las bujías. Es fundamental para el encendido del motor de gasolina.",
    "como_funciona": [
      {
        "paso": "Carga",
        "desc": "La ECU envía pulsos de corriente al devanado primario de la bobina."
      },
      {
        "paso": "Campo magnético",
        "desc": "La corriente crea un campo magnético en el núcleo de hierro laminado."
      },
      {
        "paso": "Inducción",
        "desc": "Al cortar la corriente, el campo colapsa induciendo alto voltaje en el secundario."
      },
      {
        "paso": "Chispa",
        "desc": "El pulso de alta tensión viaja a la bujía generando la chispa de ignición."
      }
    ],
    "beneficios": [
      {
        "titulo": "CHISPA POTENTE",
        "desc": "Alto voltaje garantiza encendido completo de la mezcla aire-combustible."
      },
      {
        "titulo": "RESPUESTA RÁPIDA",
        "desc": "Tiempo de carga optimizado para todas las RPM del motor."
      },
      {
        "titulo": "EFICIENCIA ENERGÉTICA",
        "desc": "Mínimas pérdidas en la transformación de voltaje."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Aislamiento de resina epóxica resistente a calor y vibración."
      }
    ],
    "sintomas": [
      "Motor falla o tiembla especialmente en aceleración",
      "Dificultad para arrancar el motor en frío",
      "Aumento notable en el consumo de combustible",
      "Código de falla de cilindro con falla de encendido"
    ],
    "recomendaciones": [
      "Revisar bujías y cables antes de reemplazar la bobina",
      "Verificar voltaje de alimentación de la bobina",
      "Usar bobina con las mismas especificaciones eléctricas",
      "Instalar bujías nuevas al reemplazar la bobina"
    ]
  },
  "Termostato": {
    "titulo": "TERMOSTATO",
    "subtitulo": "Temperatura óptima de operación garantizada",
    "que_es": "El termostato es una válvula termosensible que regula el flujo de refrigerante entre el motor y el radiador. Permite el calentamiento rápido y mantiene la temperatura óptima de operación.",
    "como_funciona": [
      {
        "paso": "Motor frío",
        "desc": "El termostato permanece cerrado recirculando el refrigerante solo por el motor."
      },
      {
        "paso": "Calentamiento",
        "desc": "El motor alcanza temperatura operativa rápidamente sin pasar por el radiador."
      },
      {
        "paso": "Apertura",
        "desc": "Al alcanzar entre 82-95°C la cera interna dilata y abre la válvula."
      },
      {
        "paso": "Regulación",
        "desc": "Modula la apertura para mantener temperatura constante de operación."
      }
    ],
    "beneficios": [
      {
        "titulo": "ARRANQUE RÁPIDO",
        "desc": "Motor alcanza temperatura operativa más rápido reduciendo desgaste."
      },
      {
        "titulo": "AHORRO DE COMBUSTIBLE",
        "desc": "Motor en temperatura óptima consume menos combustible."
      },
      {
        "titulo": "PROTECCIÓN TOTAL",
        "desc": "Abre a tiempo para evitar sobrecalentamiento del motor."
      },
      {
        "titulo": "MAYOR DURABILIDAD",
        "desc": "Temperatura correcta reduce desgaste de componentes internos."
      }
    ],
    "sintomas": [
      "Motor tarda mucho en alcanzar temperatura normal",
      "Motor se sobrecalienta rápidamente en operación",
      "Temperatura del motor oscila o es inestable",
      "Calefacción del habitáculo no calienta bien"
    ],
    "recomendaciones": [
      "Reemplazar termostato al cambiar la bomba de agua",
      "Usar termostato con temperatura de apertura especificada por el fabricante",
      "Cambiar siempre el empaque al instalar el termostato",
      "Sangrar el sistema de enfriamiento tras la instalación"
    ]
  },
  "Bomba de Agua": {
    "titulo": "BOMBA DE AGUA",
    "subtitulo": "Circulación eficiente del refrigerante",
    "que_es": "La bomba de agua hace circular el refrigerante a través de todo el sistema de enfriamiento del motor. Mantiene la temperatura óptima de operación previniendo el sobrecalentamiento.",
    "como_funciona": [
      {
        "paso": "Accionamiento",
        "desc": "Es accionada por la banda de distribución o serpentina del motor."
      },
      {
        "paso": "Succión",
        "desc": "El impulsor centrífugo succiona el refrigerante frío del radiador."
      },
      {
        "paso": "Presurización",
        "desc": "Impulsa el refrigerante a través de las galerías internas del bloque motor."
      },
      {
        "paso": "Circulación",
        "desc": "El refrigerante caliente retorna al radiador para ser enfriado nuevamente."
      }
    ],
    "beneficios": [
      {
        "titulo": "TEMPERATURA ESTABLE",
        "desc": "Circulación constante mantiene el motor en temperatura óptima."
      },
      {
        "titulo": "PREVENCIÓN DE FALLAS",
        "desc": "Evita sobrecalentamiento que puede causar daños graves al motor."
      },
      {
        "titulo": "RODAMIENTO SELLADO",
        "desc": "Sello mecánico hermético evita fugas de refrigerante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Impulsor de aluminio o hierro resistente a la cavitación."
      }
    ],
    "sintomas": [
      "Motor se sobrecalienta rápidamente en operación",
      "Fuga de refrigerante visible bajo el vehículo",
      "Ruido de rodamiento o silbido en la zona del motor",
      "Juego axial visible en el eje de la bomba"
    ],
    "recomendaciones": [
      "Reemplazar junto con la banda de distribución si es accionada por ella",
      "Cambiar el termostato al mismo tiempo que la bomba",
      "Usar sello nuevo con pasta sellante de alta temperatura",
      "Sangrar el sistema de enfriamiento para eliminar aire"
    ]
  },
  "Regulador": {
    "titulo": "REGULADOR DE VOLTAJE",
    "subtitulo": "Voltaje estable para todos los sistemas",
    "que_es": "El regulador de voltaje controla y estabiliza la tensión generada por el alternador para mantenerla en el rango óptimo de 13.5 a 14.5 voltios. Protege la batería y los sistemas eléctricos del vehículo.",
    "como_funciona": [
      {
        "paso": "Monitoreo",
        "desc": "Mide continuamente el voltaje de salida del alternador."
      },
      {
        "paso": "Comparación",
        "desc": "Compara el voltaje real con el valor de referencia programado."
      },
      {
        "paso": "Corrección",
        "desc": "Ajusta la corriente de excitación del campo del alternador."
      },
      {
        "paso": "Estabilización",
        "desc": "Mantiene el voltaje constante independientemente de la carga eléctrica."
      }
    ],
    "beneficios": [
      {
        "titulo": "PROTECCIÓN ELÉCTRICA",
        "desc": "Evita sobrevoltaje que puede dañar sistemas electrónicos."
      },
      {
        "titulo": "BATERÍA SANA",
        "desc": "Carga correcta prolonga significativamente la vida de la batería."
      },
      {
        "titulo": "SISTEMAS ESTABLES",
        "desc": "Voltaje constante garantiza funcionamiento correcto de todos los sistemas."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Componentes de estado sólido sin desgaste mecánico."
      }
    ],
    "sintomas": [
      "Batería se sobrecarga o se descarga rápidamente",
      "Luces con intensidad variable o que parpadean",
      "Voltaje superior a 15V o inferior a 13V medido",
      "Batería derrama electrolito por sobrecarga"
    ],
    "recomendaciones": [
      "Verificar voltaje de carga con multímetro en ralentí",
      "Reemplazar regulador y alternador en conjunto si hay falla mayor",
      "Revisar conexión a tierra del alternador al reemplazar",
      "Instalar regulador con especificaciones idénticas al original"
    ]
  },
  "Unidad": {
    "titulo": "UNIDAD AUTOMOTRIZ",
    "subtitulo": "Control y gestión de sistemas eléctricos",
    "que_es": "Una unidad automotriz es un módulo electrónico que controla y coordina sistemas del vehículo. Recibe señales de sensores y activa actuadores para mantener el funcionamiento correcto.",
    "como_funciona": [
      {
        "paso": "Recepción",
        "desc": "La unidad recibe señales eléctricas de sensores y módulos conectados."
      },
      {
        "paso": "Procesamiento",
        "desc": "El microprocesador interno analiza las señales según su programación."
      },
      {
        "paso": "Decisión",
        "desc": "Determina la acción correcta basándose en los parámetros programados."
      },
      {
        "paso": "Actuación",
        "desc": "Envía señales de control a los actuadores correspondientes del sistema."
      }
    ],
    "beneficios": [
      {
        "titulo": "CONTROL PRECISO",
        "desc": "Gestión electrónica exacta de los sistemas del vehículo."
      },
      {
        "titulo": "MAYOR CONFIABILIDAD",
        "desc": "Reduce puntos de falla mecánicos al centralizar el control."
      },
      {
        "titulo": "DIAGNÓSTICO INTEGRADO",
        "desc": "Almacena códigos de falla para diagnóstico rápido."
      },
      {
        "titulo": "RESPUESTA INMEDIATA",
        "desc": "Tiempo de respuesta en milisegundos ante cambios del sistema."
      }
    ],
    "sintomas": [
      "Sistema controlado deja de funcionar correctamente",
      "Luz de advertencia encendida en el tablero",
      "Comportamiento errático o intermitente del sistema",
      "Códigos de falla almacenados en la memoria OBD"
    ],
    "recomendaciones": [
      "Verificar voltaje de alimentación antes de reemplazar",
      "Revisar tierra eléctrica y conexiones del conector",
      "Usar scanner para borrar códigos tras el reemplazo",
      "Instalar unidades de calidad equivalente al OEM"
    ]
  },
  "Calavera": {
    "titulo": "CALAVERA",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Calavera trasera — iluminación de posición, freno y reversa. Indica estado y maniobras del vehículo.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Luz": {
    "titulo": "LUZ",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Luz automotriz — iluminación de carretera, señalización y visibilidad. Esencial para seguridad vial.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Toma de agua": {
    "titulo": "TOMA DE AGUA",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Toma de agua — carcasa del termostato que regula el flujo de refrigerante del motor.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Espejo": {
    "titulo": "ESPEJO",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Espejo retrovisor lateral — visibilidad trasera y lateral para maniobras seguras.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Interruptor": {
    "titulo": "INTERRUPTOR",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Interruptor automotriz — control eléctrico de sistemas como luces, vidrios y accesorios.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Foco": {
    "titulo": "FOCO",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Foco automotriz — fuente de luz para iluminación delantera, trasera e interior del vehículo.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Cable": {
    "titulo": "CABLE",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Cable automotriz — conductor eléctrico para transmisión de corriente y señales entre componentes.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Faro": {
    "titulo": "FARO",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Faro delantero — iluminación frontal de la vía para conducción nocturna segura.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Plafon": {
    "titulo": "PLAFON",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Plafón — iluminación interior del habitáculo para visibilidad nocturna de pasajeros.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Conector": {
    "titulo": "CONECTOR",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Conector eléctrico — unión desmontable de circuitos eléctricos del vehículo.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Tapa": {
    "titulo": "TAPA",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Tapa automotriz — componente de sellado de depósitos y sistemas de fluidos del vehículo.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Filtro": {
    "titulo": "FILTRO",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Filtro automotriz — retiene contaminantes de aceite, combustible o aire para proteger el motor.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Solenoide": {
    "titulo": "SOLENOIDE",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Solenoide — actuador electromagnético que convierte energía eléctrica en movimiento mecánico.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Motoventilador": {
    "titulo": "MOTOVENTILADOR",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Motoventilador — conjunto de motor y aspa que refrigera el radiador en condiciones de tráfico.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Tapon": {
    "titulo": "TAPON",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Tapón automotriz — componente de sellado y drenaje de fluidos del vehículo.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Valvula": {
    "titulo": "VALVULA",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Válvula automotriz — regula el flujo de fluidos o gases en sistemas del vehículo.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Porta cepillos": {
    "titulo": "PORTA CEPILLOS",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Porta cepillos — sostiene los cepillos de carbón en contacto con el colector del motor eléctrico.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Impulsor": {
    "titulo": "IMPULSOR",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Impulsor — mecanismo de enganche del piñón del motor de arranque con la corona del motor.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Rectificador de Corriente": {
    "titulo": "RECTIFICADOR DE CORRIENTE",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Rectificador de corriente — conjunto de diodos que convierte corriente alterna del alternador en corriente directa.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Bulbo": {
    "titulo": "BULBO",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Bulbo automotriz — sensor mecánico de presión o temperatura para los indicadores del tablero.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Polea": {
    "titulo": "POLEA",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Polea automotriz — componente giratorio que transmite movimiento del motor a los accesorios mediante banda.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Palanca": {
    "titulo": "PALANCA",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Palanca de cambios — mecanismo de selección de marchas de la transmisión del vehículo.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Relevador": {
    "titulo": "RELEVADOR",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Relevador automotriz — interruptor electromagnético que controla circuitos de alta corriente.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Armadura": {
    "titulo": "ARMADURA",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Armadura eléctrica — componente giratorio con devanados de cobre del motor de arranque o alternador.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Fusible": {
    "titulo": "FUSIBLE",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Fusible automotriz — elemento de protección que interrumpe circuitos ante sobrecorriente.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Motor": {
    "titulo": "MOTOR",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Motor eléctrico auxiliar — acciona sistemas secundarios como ventiladores, elevadores y limpiabrisas.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Direccional": {
    "titulo": "DIRECCIONAL",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Direccional — sistema de señalización luminosa intermitente para indicar giros y cambios de carril.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Lubricante": {
    "titulo": "LUBRICANTE",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Lubricante automotriz — fluido que reduce fricción y desgaste entre superficies metálicas en movimiento.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Rotor": {
    "titulo": "ROTOR",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Rotor de freno — disco sobre el cual actúan las balatas para desacelerar el vehículo.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Plumas": {
    "titulo": "PLUMAS",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Plumas limpiaparabrisas — barren agua y suciedad del parabrisas para mantener visibilidad.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Cepillo": {
    "titulo": "CEPILLO",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Cepillo de carbón — hace contacto eléctrico deslizante en motores eléctricos y alternadores.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Campana": {
    "titulo": "CAMPANA",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Campana de embrague — mecanismo de conexión y desconexión de la transmisión de potencia.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  },
  "Cilindro": {
    "titulo": "CILINDRO",
    "subtitulo": "Calidad y confiabilidad APYMSA",
    "que_es": "Cilindro hidráulico — actuador que convierte presión hidráulica en fuerza mecánica lineal.",
    "como_funciona": [
      {
        "paso": "Activación",
        "desc": "Recibe señal o energía del sistema del vehículo."
      },
      {
        "paso": "Operación",
        "desc": "Realiza su función específica en el sistema correspondiente."
      },
      {
        "paso": "Control",
        "desc": "La ECU monitorea y ajusta su funcionamiento según sea necesario."
      },
      {
        "paso": "Resultado",
        "desc": "El sistema funciona correctamente gracias al componente en buen estado."
      }
    ],
    "beneficios": [
      {
        "titulo": "CALIDAD OEM",
        "desc": "Especificaciones idénticas al equipo original del fabricante."
      },
      {
        "titulo": "LARGA DURACIÓN",
        "desc": "Materiales de primera para máxima vida útil del componente."
      },
      {
        "titulo": "FÁCIL INSTALACIÓN",
        "desc": "Diseño de reemplazo directo sin modificaciones al vehículo."
      },
      {
        "titulo": "RESPALDO APYMSA",
        "desc": "Garantía y soporte técnico de la red APYMSA."
      }
    ],
    "sintomas": [
      "Funcionamiento incorrecto del sistema relacionado",
      "Luz de advertencia en el tablero del vehículo",
      "Rendimiento reducido o falla intermitente",
      "Código de diagnóstico OBD relacionado con el sistema"
    ],
    "recomendaciones": [
      "Verificar el sistema completo antes de reemplazar el componente",
      "Usar scanner OBD para confirmar la falla antes de cambiar",
      "Instalar componentes de calidad certificada",
      "Realizar mantenimiento preventivo según especificaciones del fabricante"
    ]
  }
};
