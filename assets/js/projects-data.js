// Public display media; master files are not distributed.
export const projects = [
  {
    "year": "",
    "featured": true,
    "githubUrl": "https://github.com/Armwan/STM32-HAL-Dynamixel-AX12A-Driver",
    "projectUrl": "",
    "showInternalDetails": false,
    "coverImage": null,
    "gallery": [],
    "videos": [],
    "documents": [],
    "engineeringChallenge": "",
    "technicalApproach": "",
    "hardware": "",
    "software": "",
    "implementation": "",
    "testing": "",
    "results": "",
    "contentStatus": "Project documentation in preparation",
    "id": "01",
    "slug": "stm32-dynamixel-driver",
    "title": "STM32 HAL Driver for Dynamixel AX-12A",
    "category": "Embedded Firmware",
    "filter": "Firmware",
    "tracks": [
      "embedded"
    ],
    "art": "chip",
    "technologies": [
      "STM32",
      "Embedded C",
      "HAL",
      "UART",
      "Dynamixel Protocol 1.0"
    ],
    "description": "An STM32 HAL driver for the Dynamixel AX-12A servo, using UART and Dynamixel Protocol 1.0.",
    "overview": "Embedded firmware for interfacing STM32 microcontrollers with Dynamixel AX-12A servos. The project uses Embedded C, STM32 HAL, UART, and Dynamixel Protocol 1.0."
  },
  {
    "year": "",
    "featured": true,
    "githubUrl": "https://github.com/Armwan/Position_Tracking",
    "projectUrl": "",
    "showInternalDetails": false,
    "coverImage": null,
    "gallery": [],
    "videos": [],
    "documents": [],
    "engineeringChallenge": "",
    "technicalApproach": "",
    "hardware": "",
    "software": "",
    "implementation": "",
    "testing": "",
    "results": "",
    "contentStatus": "Project documentation in preparation",
    "id": "02",
    "slug": "imu-relative-positioning",
    "title": "IMU-Based Relative Positioning System",
    "category": "Sensor Fusion & Embedded Systems",
    "filter": "Sensors",
    "tracks": [
      "embedded"
    ],
    "art": "signal",
    "technologies": [
      "ESP32",
      "ICM-20948",
      "C++",
      "FusionAhrs",
      "FusionBias",
      "ZUPT"
    ],
    "description": "Relative positioning with an ESP32 and ICM-20948, using sensor fusion and zero-velocity updates.",
    "overview": "An IMU-based relative positioning project using ESP32, the ICM-20948, C++, FusionAhrs, FusionBias, and zero-velocity updates (ZUPT)."
  },
  {
    "year": "",
    "featured": false,
    "githubUrl": "",
    "projectUrl": "",
    "showInternalDetails": true,
    "coverImage": {
      "src": "assets/images/previews/seat-motion-tracking/assembled-prototype.webp",
      "alt": "Assembled motion-tracking electronics mounted inside the prototype enclosure.",
      "caption": "Assembled motion-tracking electronics integrated into the prototype enclosure.",
      "fit": "contain",
      "width": 540,
      "height": 424
    },
    "gallery": [
      {
        "src": "assets/images/previews/seat-motion-tracking/assembled-prototype.webp",
        "alt": "Assembled motion-tracking electronics mounted inside the prototype enclosure.",
        "caption": "Assembled motion-tracking electronics integrated into the prototype enclosure.",
        "width": 540,
        "height": 424
      },
      {
        "src": "assets/images/previews/seat-motion-tracking/pcb-design.webp",
        "alt": "Top-side rendering of the custom motion-tracking PCB with its processing, sensing, power, and communication components.",
        "caption": "Custom PCB designed for the motion-tracking module, integrating processing, inertial sensing, power regulation, and communication circuitry.",
        "section": "technology",
        "width": 420,
        "height": 466
      },
      {
        "src": "assets/images/previews/seat-motion-tracking/firmware-state-machine.webp",
        "width": 1154,
        "height": 443,
        "alt": "Original firmware diagram showing Initialization, Normal Operation, Application, Deep Sleep Mode, Wake-Up, and Recovery, with the source transition conditions.",
        "caption": "Firmware state machine showing initialization, motion processing, BLE data transfer, low-power operation, wake-up, and recovery.",
        "section": "implementation",
        "fullWidth": true
      },
      {
        "src": "assets/images/previews/seat-motion-tracking/android-application.webp",
        "width": 1000,
        "height": 1011,
        "alt": "Two companion Android application screens showing the daily activity timeline, activity summary, BLE connection status, seating mode, and activity timer.",
        "caption": "Companion Android application displaying recorded activity, BLE connection status, and real-time seating-state information.",
        "fullWidth": true,
        "maxDisplayWidth": 520,
        "fullSizeLabel": "Open full-size screenshot"
      }
    ],
    "videos": [],
    "documents": [],
    "engineeringChallenge": "The main challenges were integrating inertial sensing into a compact battery-powered device, mitigating drift in relative motion estimation, retaining data during wireless disconnections, and reducing power consumption across different operating states.",
    "technicalApproach": "A dual-microcontroller architecture separates motion processing and BLE communication on the ESP32 from RTC, battery monitoring, and auxiliary hardware control on the STM32. Relative motion estimation uses IMU calibration, 6-DoF sensor fusion, and zero-velocity updates to reduce accumulated inertial drift.",
    "hardware": "Custom PCB, ESP32-WROOM-32E, STM32L051, ICM-20948 IMU, TP5000 battery charger, 3.3 V/1.8 V voltage regulation, and a nominal 5200 mAh battery system.",
    "software": "Embedded C/C++, PlatformIO, SPI, UART, BLE, LittleFS, IMU sensor fusion, motion-state processing, and low-power state management.",
    "implementation": "Developed the PCB and embedded firmware, integrating IMU acquisition, dual-microcontroller communication, timestamp synchronization, binary data logging, and BLE transfer. Implemented transitions between normal processing, BLE communication, deep sleep, wake-up, and recovery states.",
    "testing": "The assembled prototype underwent functional and power-consumption testing. Reported current measurements were 71.6 mA during normal operation, 111.1 mA with BLE active, and 0.145 mA in deep sleep.",
    "results": "These measurements characterize the tested operating states and demonstrate the integration of sensing, persistent storage, wireless communication, and power management in the prototype.",
    "contentStatus": "",
    "id": "03",
    "slug": "seat-motion-tracking",
    "title": "Seat-Mounted Motion Tracking Module",
    "category": "Embedded Hardware & Firmware",
    "filter": "Sensors",
    "tracks": [
      "embedded"
    ],
    "art": "signal",
    "role": "Electronic System Design · PCB Development · Embedded Firmware · Hardware Integration & Testing",
    "technologies": [
      "ESP32",
      "STM32",
      "ICM-20948",
      "Embedded C/C++",
      "PCB Design",
      "BLE",
      "LittleFS"
    ],
    "description": "Designed and developed the electronics and embedded firmware of a battery-powered motion-tracking module for smart seating applications. The system integrates inertial sensing, motion-state detection, onboard data logging, Bluetooth Low Energy communication, and low-power operation.",
    "overview": "A compact sensing module built around an ESP32, an STM32L051, and an ICM-20948 IMU. The device monitors seat-related motion, estimates relative displacement, and records timestamped activity data for wireless retrieval.",
    "softwareLabel": "Firmware"
  },
  {
    "year": "",
    "featured": false,
    "githubUrl": "",
    "projectUrl": "",
    "showInternalDetails": true,
    "coverImage": {
      "src": "assets/images/projects/astra-glove/astra-glove-board-3d-top.jpg",
      "alt": "Altium 3D view of the component side of the Astra Glove control board.",
      "caption": "Altium 3D view of the control board, component side.",
      "fit": "contain"
    },
    "gallery": [
      {
        "src": "assets/images/projects/astra-glove/astra-glove-pcb-routing-top.jpg",
        "alt": "Top-layer PCB routing view of the Astra Glove control board.",
        "caption": "Control-board PCB routing, top-layer view."
      },
      {
        "src": "assets/images/projects/astra-glove/astra-glove-pcb-routing-bottom.jpg",
        "alt": "Bottom-layer PCB routing view of the Astra Glove control board.",
        "caption": "Control-board PCB routing, bottom-layer view."
      },
      {
        "src": "assets/images/projects/astra-glove/astra-glove-board-3d-top.jpg",
        "alt": "Altium 3D view of the component side of the Astra Glove control board.",
        "caption": "Altium 3D view of the control board, component side."
      },
      {
        "src": "assets/images/projects/astra-glove/astra-glove-board-3d-bottom.jpg",
        "alt": "Altium 3D view of the reverse side of the Astra Glove control board.",
        "caption": "Altium 3D view of the control board, reverse side."
      },
      {
        "src": "assets/images/projects/astra-glove/astra-glove-assembled-prototype.jpg",
        "alt": "Assembled Astra Glove control board connected to sensor ribbon cables on the glove.",
        "caption": "Assembled control-board prototype with the glove’s sensor cabling attached."
      }
    ],
    "videos": [],
    "documents": [],
    "engineeringChallenge": "The board must integrate a distributed multi-IMU sensing system, embedded control, wireless communication, and wearable power circuitry within a compact assembly.",
    "technicalApproach": "An ESP32-based controller coordinates acquisition from the 16-IMU sensing system and Bluetooth data transmission. The board integrates charging and power-regulation circuitry for wearable operation.",
    "hardware": "ESP32, 16 IMUs, Bluetooth connectivity, battery charging, power regulation, and Altium Designer for PCB development.",
    "software": "",
    "implementation": "PCB development integrated the controller, sensing interfaces, wireless connectivity, and power circuitry into one control board. The documented design work includes Altium layout and 3D views.",
    "testing": "The available prototype evidence includes Altium 3D views and an assembled board connected to the glove’s sensor cabling.",
    "results": "The documented implementation reached assembled-board integration. Quantitative tracking accuracy, wireless latency, and battery-life measurements are not reported.",
    "contentStatus": "",
    "id": "04",
    "slug": "astra-glove",
    "title": "Astra Glove — Control Board Development",
    "category": "Wearable Electronics",
    "filter": "Hardware",
    "tracks": [
      "embedded"
    ],
    "art": "board",
    "technologies": [
      "ESP32",
      "16 IMU Sensors",
      "PCB Design",
      "Altium Designer",
      "Bluetooth"
    ],
    "description": "Control-board development for a wearable tracking glove, integrating ESP32 control, a 16-IMU sensing system, Bluetooth communication, and power management.",
    "overview": "A control-board redesign for the Astra Glove, a wearable motion-tracking and gesture-control system. The design brings ESP32-based acquisition, Bluetooth communication, and battery-powered operation to a previously wired glove."
  },
  {
    "year": "",
    "featured": false,
    "githubUrl": "",
    "projectUrl": "",
    "showInternalDetails": true,
    "coverImage": {
      "src": "assets/images/previews/robotic-finger/five-finger-hand.jpg",
      "width": 720,
      "height": 816,
      "alt": "Five-finger robotic hand design shown on a display, with the complete hand visible.",
      "caption": "Five-finger underactuated robotic hand design.",
      "fit": "contain"
    },
    "gallery": [
      {
        "src": "assets/images/previews/robotic-finger/biomimetic-single-finger.jpg",
        "width": 900,
        "height": 1350,
        "title": "Biomimetic Single-Finger Prototype",
        "alt": "Physical articulated single-finger prototype with tendon cables, servo housing, pulleys, and its complete supporting structure.",
        "caption": "An anatomically inspired robotic finger with tendon-driven actuation, incorporating MCP, PIP, and DIP joints. The prototype uses six Dynamixel AX-12A servo motors to coordinate tendon motion and reproduce human-like finger movements."
      },
      {
        "src": "assets/images/previews/robotic-finger/five-finger-hand.jpg",
        "width": 720,
        "height": 816,
        "title": "Five-Finger Underactuated Robotic Hand",
        "alt": "Design view of the complete five-finger underactuated robotic hand.",
        "caption": "A five-finger robotic hand with four joints per finger, controlled using three motors per finger. This underactuated configuration coordinates multiple joints with fewer actuators than would be required for fully independent joint actuation."
      }
    ],
    "videos": [
      {
        "src": "assets/videos/previews/robotic-finger/astra-glove-pid-control.mp4",
        "width": 960,
        "height": 540,
        "fullWidth": true,
        "type": "video/mp4",
        "poster": "assets/images/previews/robotic-finger/astra-glove-control-poster.webp",
        "title": "Glove-Based Robotic Control — Single-Finger Demonstration",
        "caption": "A wearable Astra Glove was used as the motion-input interface for controlling the robotic finger. The demonstration integrates glove-based motion sensing with PID motor control to reproduce finger movements on the physical robotic prototype. The supplied clip includes a 2× speed label."
      }
    ],
    "documents": [],
    "engineeringChallenge": "Coordinating multiple finger joints through tendon-driven actuation requires careful motor control and system integration, particularly when the number of actuators is lower than the number of joints.",
    "technicalApproach": "Two prototype configurations were investigated: an anatomically inspired, six-actuator single-finger mechanism and a five-finger underactuated hand with three motors controlling four joints per finger. The single-finger research uses modified Landsmeer models to coordinate tendon excursions and joint motion.",
    "hardware": "Tendon-driven actuation and Dynamixel AX-12A servos in the single-finger prototype.",
    "software": "Embedded motor control, PID control, Astra Glove motion sensing, and robotic system integration.",
    "implementation": "Implemented and integrated motor-control functionality for the robotic prototypes. The single-finger system was also connected to the Astra Glove for motion-driven control demonstrations.",
    "testing": "The supplied research report documents simulation and motion-analysis experiments for the biomimetic single-finger mechanism.",
    "results": "A physical demonstration shows the single-finger prototype responding to motion commands from the Astra Glove using PID control.",
    "contentStatus": "",
    "id": "05",
    "slug": "robotic-finger",
    "title": "Underactuated Tendon-Driven Robotic Finger",
    "category": "Robotics & Embedded Control",
    "filter": "Control",
    "tracks": [
      "embedded",
      "research"
    ],
    "art": "robot",
    "technologies": [
      "Embedded C",
      "Motor Control",
      "EMG",
      "Vision-Based Control",
      "MATLAB"
    ],
    "role": "Embedded implementation, motor control, and system integration within a collaborative R&D team.",
    "description": "Development and control of tendon-driven robotic finger and hand prototypes, including a biomimetic single-finger mechanism and a five-finger underactuated configuration. The work involved motor control, embedded implementation, and integration with a wearable motion-tracking glove.",
    "overview": "Development and control of tendon-driven robotic prototypes, covering a six-actuator biomimetic single finger and a five-finger underactuated hand."
  },
  {
    "year": "",
    "featured": false,
    "githubUrl": "https://github.com/Armwan/Buck_Converter",
    "projectUrl": "",
    "showInternalDetails": false,
    "coverImage": null,
    "gallery": [],
    "videos": [],
    "documents": [],
    "engineeringChallenge": "",
    "technicalApproach": "",
    "hardware": "",
    "software": "",
    "implementation": "",
    "testing": "",
    "results": "",
    "contentStatus": "Project documentation in preparation",
    "id": "06",
    "slug": "buck-converter",
    "title": "36 W Mixed-Signal Buck Converter",
    "category": "Power Electronics",
    "filter": "Hardware",
    "tracks": [
      "embedded"
    ],
    "art": "circuit",
    "technologies": [
      "TL494",
      "STM32",
      "TLP250H",
      "Altium Designer"
    ],
    "description": "A mixed-signal buck converter project using TL494, STM32, TLP250H, and Altium Designer.",
    "overview": "A 36 W mixed-signal buck converter project. The title and technology list are provided by the author; measured power, efficiency, and other validation results have not yet been supplied."
  },
  {
    "year": "",
    "featured": true,
    "githubUrl": "",
    "projectUrl": "",
    "showInternalDetails": true,
    "coverImage": null,
    "gallery": [
      {
        "src": "assets/images/projects/inverse-filter-design/final-test-ranking-ecdf.png",
        "width": 1844,
        "height": 1178,
        "alt": "Nine-method ranking by mean full-response RMSE and empirical error distributions for the frozen second-order Sallen–Key benchmark.",
        "caption": "Frozen second-order Sallen–Key final test: mean full-response RMSE and error distributions for nine methods over 1,350 common target circuits.",
        "fullWidth": true,
        "fullSizeLabel": "Open full-size figure"
      },
      {
        "src": "assets/images/projects/inverse-filter-design/final-test-paired-comparison.png",
        "width": 1844,
        "height": 1178,
        "alt": "Tandem MLP Ensemble paired RMSE differences, frozen bootstrap intervals, and win rates against eight comparators.",
        "caption": "Tandem MLP Ensemble against eight comparators on the same 1,350 targets: paired RMSE differences with frozen 95% bootstrap intervals, and casewise win rates.",
        "fullWidth": true,
        "fullSizeLabel": "Open full-size figure"
      },
      {
        "src": "assets/images/projects/inverse-filter-design/final-test-family-region-errors.png",
        "width": 1844,
        "height": 1178,
        "alt": "Heatmaps of mean response RMSE by Bessel, Butterworth, and Chebyshev target family and by passband, transition, and stopband region.",
        "caption": "Frozen second-order benchmark: mean response errors by Bessel, Butterworth, and Chebyshev target family (450 cases each), and by frequency-response region.",
        "fullWidth": true,
        "fullSizeLabel": "Open full-size figure"
      }
    ],
    "videos": [],
    "documents": [],
    "engineeringChallenge": "Inverse circuit design can be non-unique: different component combinations may produce similar frequency responses. Minimizing component-value prediction error therefore does not necessarily yield the desired circuit response.",
    "technicalApproach": "A Tandem learning framework connects an inverse neural network to a frozen, differentiable Forward response model. The inverse network is fine-tuned to minimize frequency-response error rather than relying only on reference component values.",
    "hardware": "",
    "software": "Python, PyTorch, scikit-learn, neural networks, Sallen–Key circuit modeling, and LTspice AC simulation.",
    "implementation": "For a specified cutoff frequency, quality factor, gain, and resistance scale, the inverse model predicts resistor and capacitor values. The resulting circuit is then evaluated in LTspice to compare its simulated frequency response with the target.",
    "testing": "The Tandem approach was compared with analytical synthesis and conventional machine-learning methods under a shared LTspice evaluation protocol.",
    "results": "In the documented second-order Sallen–Key low-pass benchmark, the Tandem Ensemble had the lowest mean per-case full-response RMSE among the evaluated methods: approximately 0.0278 dB across 1,350 simulated test circuits.",
    "contentStatus": "",
    "id": "08",
    "slug": "inverse-filter-design",
    "title": "Inverse Design of Sallen–Key Analog Filters Using Machine Learning",
    "category": "Academic Research / Bachelor's Thesis",
    "filter": "Research",
    "tracks": [
      "research"
    ],
    "art": "filter",
    "technologies": [
      "Python",
      "PyTorch",
      "scikit-learn",
      "Neural Networks",
      "Sallen–Key Circuit Modeling",
      "LTspice AC Simulation"
    ],
    "description": "Developed a machine-learning-based inverse design framework for Sallen–Key analog filters, estimating circuit component values from desired frequency-response specifications.",
    "overview": "This research investigates the use of machine learning to synthesize Sallen–Key analog filter components from target electrical specifications."
  },
  {
    "year": "",
    "featured": false,
    "githubUrl": "",
    "projectUrl": "",
    "showInternalDetails": true,
    "coverImage": null,
    "gallery": [
      {
        "src": "assets/images/projects/smart-shoe-insole/insole-prototype-sensor-arrangement.jpg",
        "width": 406,
        "height": 442,
        "alt": "Original insole photographs showing six piezoelectric discs and their wiring in the silicone structure, alongside the completed encapsulated insole.",
        "caption": "Prototype smart insole with six piezoelectric sensors and silicone encapsulation, showing sensor placement and the completed structure."
      },
      {
        "src": "assets/images/projects/smart-shoe-insole/normal-walking-sensor-response.png",
        "width": 2017,
        "height": 839,
        "alt": "Recorded voltage traces for sensor channels A0–A5 during normal walking, with the original voltage and time axes and channel legend.",
        "caption": "Recorded voltage responses from six sensor channels during the paper’s normal-walking treadmill experiment.",
        "fullWidth": true,
        "fullSizeLabel": "Open full-size figure"
      },
      {
        "src": "assets/images/projects/smart-shoe-insole/ankle-twisting-sensor-response.png",
        "width": 2046,
        "height": 760,
        "alt": "Recorded A0–A5 sensor voltage traces for the reported ankle-twisting walking condition, with the original time axis and channel legend.",
        "caption": "Recorded sensor voltages during the paper’s reported ankle-twisting walking condition.",
        "fullWidth": true,
        "fullSizeLabel": "Open full-size figure"
      }
    ],
    "videos": [],
    "documents": [],
    "engineeringChallenge": "Piezoelectric sensing elements require mechanical protection under repeated foot loading while remaining sensitive to applied forces.",
    "technicalApproach": "Six PZT sensors were embedded in RTV-2 silicone rubber to provide mechanical protection while transmitting applied loads to the sensing elements.",
    "hardware": "Six PZT sensors, RTV-2 silicone encapsulation, Arduino Uno, resistor-based signal conditioning, and six analog acquisition channels (A0–A5).",
    "software": "",
    "implementation": "The sensors were distributed across the insole and connected to individual acquisition channels to monitor their voltage responses during walking.",
    "testing": "Walking experiments recorded voltage responses from six sensor regions during treadmill walking.",
    "results": "The recordings showed distinguishable regional sensor-response patterns, including changes observed during an ankle-twisting event.",
    "contentStatus": "",
    "id": "09",
    "slug": "smart-shoe-insole",
    "title": "Smart Shoe Insole for Gait Analysis",
    "category": "Sensor Systems & Research",
    "filter": "Research",
    "tracks": [
      "research"
    ],
    "art": "signal",
    "technologies": [
      "PZT Sensors",
      "RTV-2 Silicone",
      "Arduino Uno"
    ],
    "description": "Development of a piezoelectric smart insole for gait analysis, integrating silicone-encapsulated sensors with Arduino-based data acquisition to investigate foot-loading patterns during walking.",
    "publication": {
      "title": "A Novel Smart Shoe Insole for Gait Analysis",
      "venue": "The 13th International Conference on Acoustics & Vibration (ISAV2023)",
      "url": "https://scholar.google.com/scholar?oi=bibs&cluster=500187281794492559&btnI=1&hl=en",
      "label": "View Research Paper"
    },
    "overview": "A smart shoe insole incorporating six piezoelectric sensors to record electrical responses associated with foot loading during walking."
  }
];
