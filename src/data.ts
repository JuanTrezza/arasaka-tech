import { SolutionItem, LevelItem, DiagnosticsNode } from './types';

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'neural',
    title: 'Seguridad Neural',
    description: 'Protección directa contra intrusiones de red cerebral y manipulación de datos a nivel sináptico con latencia zero.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'ice',
    title: 'ICE Defensivo',
    description: 'Contra-medidas intrusivas de nivel militar (Black ICE) diseñadas para neutralizar cualquier agresor externo.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'nodes',
    title: 'Nodos Arasaka',
    description: 'Red de infraestructura física fortificada distribuida globalmente, operada exclusivamente por personal de élite.',
    iconName: 'Network'
  },
  {
    id: 'intel',
    title: 'Inteligencia Táctica',
    description: 'Sistemas de IA predictiva que detectan vulnerabilidades antes de que existan en el plano físico o digital.',
    iconName: 'BrainCircuit'
  },
  {
    id: 'legacy',
    title: 'Protocolos Legacy',
    description: 'Acceso a sistemas de computación cuántica de la vieja red, aislados del espacio público mediante muros de datos.',
    iconName: 'Terminal'
  },
  {
    id: 'compliance',
    title: 'Compliance Corporativo',
    description: 'Garantía total de cumplimiento con las leyes de la Directiva Arasaka para operaciones intercontinentales.',
    iconName: 'FileCheck'
  }
];

export const TIER_LEVELS: LevelItem[] = [
  {
    id: 'lvl_01',
    levelCode: 'LVL_01',
    name: 'CORPORATIVO',
    features: [
      'Firewall Neural Básico',
      'Soporte 18/7 Local',
      'Encriptación Grado E'
    ],
    actionLabel: 'SELECCIONAR'
  },
  {
    id: 'lvl_02',
    levelCode: 'LVL_02',
    name: 'ENTERPRISE',
    features: [
      'Black ICE Adaptativo',
      'Soporte 24/7 Global',
      'Backup Cuántico Mensual',
      '5 Nodos Regionales Dedicados'
    ],
    actionLabel: 'OBTENER ACCESO',
    recommended: true
  },
  {
    id: 'lvl_03',
    levelCode: 'LVL_03',
    name: 'EJECUTIVO',
    features: [
      'Todo en Enterprise',
      'Respuesta Física In-Situ',
      'Inmunidad de Datos Absoluta',
      'Consultoría de la Junta Arasaka'
    ],
    actionLabel: 'SOLICITAR_AUDITORÍA'
  }
];

export const INITIAL_NODES: DiagnosticsNode[] = [
  { id: 'node_nc_01', nodeName: 'NC_TOWER_CORE_01', status: '確保済み', statusType: 'success', load: 42, region: 'Night City' },
  { id: 'node_tokyo_01', nodeName: 'TOKYO_HQ_CHUO_01', status: '確保済み', statusType: 'success', load: 68, region: 'Tokyo' },
  { id: 'node_orbit_01', nodeName: 'ORBITAL_STATION_AS_8', status: '稼働中', statusType: 'success', load: 12, region: 'Orbit' },
  { id: 'node_ldn_12', nodeName: 'LONDON_SUB_SEC_12', status: '危険', statusType: 'error', load: 94, region: 'Europe' },
  { id: 'node_sao_04', nodeName: 'SAO_PAULO_HUB_04', status: '確保済み', statusType: 'success', load: 51, region: 'South America' }
];
