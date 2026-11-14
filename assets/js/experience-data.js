// Confirmed against the approved November 2026 resume. Keep two bullets per position.
export const experience = [
  {
    company: 'Beta Biomed', role: 'Electrical Product Designer',
    dates: 'September 2026 – Present', location: 'Remote', technologies: ['PCB Design', 'Firmware', 'Sensor Integration'],
    bullets: [
      'Electrical circuit design, PCB development, and sensor selection for medical-device R&D.',
      'Microcontroller firmware, electronic integration, and prototype testing.'
    ]
  },
  {
    company: 'AstraBionics', role: 'Embedded Software Engineer',
    dates: 'August 2024 – March 2026', location: 'Tehran', technologies: ['ESP32', 'BLE', 'Altium Designer'],
    bullets: [
      'ESP32 firmware, IMU acquisition, BLE communication, and PCB development for a wearable tracking glove.',
      'Embedded control for an underactuated robotic finger, with MATLAB-based evaluation.'
    ]
  },
  {
    company: 'Gazelle Design and Manufacturing Center', role: 'Embedded Software Engineer',
    dates: 'July 2023 – August 2024', location: 'Tehran', technologies: ['STM32', 'CAN', 'ESP32'],
    bullets: [
      'STM32F407 firmware and CAN communication for solar-electric vehicle motor-control electronics.',
      'STM32-based automotive lighting control and ESP32 robotic-vehicle firmware.'
    ]
  },
  {
    company: 'ESLAB', role: 'Research Assistant',
    dates: 'October 2022 – April 2023', location: 'Tehran', technologies: ['Arduino', 'Data Acquisition', 'PCB Design'],
    bullets: [
      'Arduino-based acquisition for a piezoelectric smart insole used in foot-pressure experiments.',
      'Supercapacitor-based PCB design for biomechanical energy-harvesting experiments.'
    ]
  }
];

export const areasOfWork = [
  { title: 'Firmware Development', description: 'Microcontroller firmware and bare-metal development.' },
  { title: 'PCB Design & Hardware Integration', description: 'Circuit design, board development, and electronic integration.' },
  { title: 'Sensor Integration & Data Acquisition', description: 'Sensor interfaces, acquisition firmware, and motion sensing.' },
  { title: 'Communication Interfaces & Embedded Control', description: 'Device communication, motor control, and hardware–software integration.' }
];

export const skills = [
  { title: 'Programming', items: ['Embedded C/C++', 'Python', 'MATLAB'] },
  { title: 'Microcontrollers & Platforms', items: ['STM32 / ARM Cortex-M', 'ESP32', 'AVR', 'Bare-metal development', 'STM32 HAL'] },
  { title: 'Communication Interfaces', items: ['UART', 'SPI', 'I2C', 'CAN', 'RS-485', 'Modbus', 'BLE', 'MQTT'] },
  { title: 'Embedded Engineering', items: ['Interrupts & DMA', 'Sensor integration & fusion', 'Data acquisition', 'Motor control', 'Hardware–software integration', 'FreeRTOS (familiarity)'] },
  { title: 'Development Tools', items: ['STM32CubeIDE', 'PlatformIO', 'Git', 'VS Code'] },
  { title: 'Hardware & Simulation', items: ['Altium Designer', 'LTspice', 'MATLAB/Simulink'] }
];
